from dataclasses import dataclass, field
from enum import Enum
from typing import Any, List

from mage_ai.shared.array import find
from mage_ai.shared.hash import ignore_keys_with_blank_values
from mage_ai.shared.models import BaseDataClass


class DynamicBlockFlag(str, Enum):
    CLONE_OF_ORIGINAL = 'clone_of_original'
    DYNAMIC = 'dynamic'
    DYNAMIC_CHILD = 'dynamic_child'
    ORIGINAL = 'original'
    REDUCE_OUTPUT = 'reduce_output'
    SPAWN_OF_DYNAMIC_CHILD = 'spawn_of_dynamic_child'


def is_dynamic_block(block) -> bool:
    """
    Checks if the given block is a dynamic block.

    Args:
        block: The block.

    Returns:
        bool: True if the block is a dynamic block, False otherwise.
    """
    return block.configuration and block.configuration.get('dynamic', False)


def should_reduce_output(block) -> bool:
    """
    Checks if the given block should reduce its output.

    Args:
        block: The block.

    Returns:
        bool: True if the block should reduce its output, False otherwise.
    """
    if not block.configuration or not block.configuration.get('reduce_output', False):
        return False
    return True


def has_dynamic_block_upstream_parent(block) -> bool:
    return block.upstream_blocks and any([is_dynamic_block(b) for b in block.upstream_blocks])


def is_dynamic_block_child(block) -> bool:
    """
    Checks if the given block is a dynamic block child.

    Args:
        block: The block.

    Returns:
        bool: True if the block is a dynamic block child, False otherwise.
    """
    dynamic_or_child = []

    for upstream_block in block.upstream_blocks:
        if is_dynamic_block(upstream_block) or is_dynamic_block_child(upstream_block):
            dynamic_or_child.append(upstream_block)

    if len(dynamic_or_child) == 0:
        return False

    dynamic_or_child_with_reduce = list(filter(lambda x: should_reduce_output(x), dynamic_or_child))

    return len(dynamic_or_child) > len(dynamic_or_child_with_reduce)


def is_original_dynamic_child_block(
    block,
    block_run_block_uuid: int = None,
    block_run_id: int = None,
) -> bool:
    # Check to see if its the original non-cloned version.
    block_run = None

    def __get_block_run(block_run_id=block_run_id):
        from mage_ai.orchestration.db.models.schedules import BlockRun
        return BlockRun.query.get(block_run_id)

    if block:
        if not block_run_block_uuid and block_run_id:
            block_run = __get_block_run()
            block_run_block_uuid = block_run.block_uuid

        if block_run_block_uuid and block.uuid == block_run_block_uuid:
            return True

    if not block_run and not block_run_id:
        return False

    if not block_run:
        block_run = __get_block_run()

    if block and block.uuid == block_run.block_uuid:
        return True

    wrapper = DynamicBlockWrapperBase()
    wrapper.hydrate(block=block, block_run=block_run)

    return wrapper.is_dynamic_child() and wrapper.is_original(include_clone=True)


@dataclass
class DynamicBlockWrapperBase(BaseDataClass):
    block: Any = None
    block_run_block_uuid: str = None
    block_uuid: str = None
    children: List[BaseDataClass] = field(default_factory=lambda: [])
    clones: List[BaseDataClass] = field(default_factory=lambda: [])
    factory: Any = None
    flags: List[DynamicBlockFlag] = field(default_factory=lambda: [])
    index: int = None
    metadata_instructions: BaseDataClass = field(default_factory=lambda: {})
    siblings: List[BaseDataClass] = field(default_factory=lambda: [])
    spawns: List[BaseDataClass] = field(default_factory=lambda: [])
    upstream_dynamic_blocks: List[BaseDataClass] = field(default_factory=lambda: [])
    upstream_dynamic_child_blocks: List[BaseDataClass] = field(default_factory=lambda: [])
    uuid: str = None


@dataclass
class DynamicBlockWrapper(BaseDataClass):
    block: Any = None
    block_run_block_uuid: str = None
    block_uuid: str = None
    # If the current block is a dynamic block, then the children are the dynamic child blocks
    # that are created from this block’s output.
    children: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # If the current block is the original, then clones are the other blocks that the original
    # created to handle the responsibility of controlling what block runs are created
    # from an upstream dynamic block.
    clones: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    dynamic_block_index: int = None
    factory: Any = None
    flags: List[DynamicBlockFlag] = field(default_factory=lambda: [])
    metadata_instructions: BaseDataClass = None
    # Other blocks at the same level; other cloned blocks, other spawns, etc.
    siblings: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # If the current block is an original dynamic child block or cloned dynamic child block,
    # then spawns are the blocks that are created based on the original or cloned upstream
    # dynamic block’s (e.g. a direct parent block) output.
    spawns: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # Upstream blocks that are dynamic blocks.
    upstream_dynamic_blocks: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # Upstream blocks that are dynamic child blocks.
    upstream_dynamic_child_blocks: List[DynamicBlockWrapperBase] = field(default_factory=lambda: [])
    # Unique identifier used as a suffix in the block run.
    uuid: str = None

    def __post_init__(self):
        self.factory._wrapper = self

        block_run = self.factory.block_run()

        self.block = self.factory.block
        self.block_uuid = self.block.uuid if self.block else None
        self.block_run_block_uuid = block_run.block_uuid if block_run else None
        self.uuid = self.block_run_block_uuid or self.block_uuid

        if block_run:
            config = block_run.metrics or {}
            self.dynamic_block_index = config.get('dynamic_block_index')

            metadata = config.get('metadata') or {}

            self.flags = [DynamicBlockFlag(v) for v in metadata.get('flags') or []]
            if metadata.get('clone_original', False):
                self.flags.append(DynamicBlockFlag.CLONE_OF_ORIGINAL)
            self.flags = list(set(self.flags))

            for key in [
                'uuid',
            ]:
                value = metadata.get(key) or None
                if value:
                    setattr(self, key, value)

            for key in [
                'children',
                'clones',
                'siblings',
                'spawns',
                'upstream_dynamic_blocks',
                'upstream_dynamic_child_blocks',
            ]:
                values = metadata.get(key) or None
                if values:
                    setattr(self, key, [self.load(**m) for m in values])

    def is_original(self, include_clone: bool = False) -> bool:
        if DynamicBlockFlag.ORIGINAL in (self.flags or []) or (
            include_clone and self.is_clone_of_original()
        ):
            return True
        return self.block and self.block.uuid == self.block_run_block_uuid

    def is_clone_of_original(self) -> bool:
        return DynamicBlockFlag.CLONE_OF_ORIGINAL in (self.flags or []) and not self.is_original()

    def is_dynamic(self) -> bool:
        if DynamicBlockFlag.DYNAMIC in (self.flags or []):
            return True
        return self.block and is_dynamic_block(self.block)

    def is_dynamic_child(self) -> bool:
        if DynamicBlockFlag.DYNAMIC_CHILD in (self.flags or []):
            return True
        return self.block and is_dynamic_block_child(self.block)

    def is_dynamic_squared(self) -> bool:
        return self.is_dynamic() and self.is_dynamic_child()

    def is_spawn(self) -> bool:
        if DynamicBlockFlag.SPAWN_OF_DYNAMIC_CHILD in (self.flags or []):
            return True

        return (self.block or self.block_uuid) and \
            self.block_run_block_uuid and \
            ((self.block and self.block.uuid != self.block_run_block_uuid) or
                (self.block_uuid and self.block_uuid != self.block_run_block_uuid)) and \
            not self.is_original(include_clone=True)

    def should_reduce_output(self) -> bool:
        if DynamicBlockFlag.REDUCE_OUTPUT in (self.flags or []):
            return True
        return self.block and should_reduce_output(self.block)

    def get_dynamic_block_index(self) -> int:
        if self.dynamic_block_index is not None:
            return self.dynamic_block_index

        block_run = self.factory.block_run()
        if block_run and block_run.metrics:
            self.dynamic_block_index = (block_run.metrics.get('metadata') or {}).get(
                'dynamic_block_index',
            )

        return self.dynamic_block_index

    def to_dict_base(self, **kwargs) -> dict:
        data = dict(
            dynamic_block_index=self.get_dynamic_block_index(),
        )

        flags = []
        if self.is_original():
            flags.append(DynamicBlockFlag.ORIGINAL)
        if self.is_clone_of_original():
            flags.append(DynamicBlockFlag.CLONE_OF_ORIGINAL)
        if self.is_dynamic():
            flags.append(DynamicBlockFlag.DYNAMIC)
        if self.is_dynamic_child():
            flags.append(DynamicBlockFlag.DYNAMIC_CHILD)
        if self.is_spawn():
            flags.append(DynamicBlockFlag.SPAWN_OF_DYNAMIC_CHILD)
        if self.should_reduce_output():
            flags.append(DynamicBlockFlag.REDUCE_OUTPUT)

        flags = list(set(flags + (self.flags or [])))
        if len(flags) >= 1:
            data['flags'] = [v.value for v in flags if isinstance(v, DynamicBlockFlag)]

        for key in [
            'block_run_block_uuid',
            'block_uuid',
            'uuid',
        ]:
            if getattr(self, key) is not None:
                data[key] = getattr(self, key)

        return ignore_keys_with_blank_values(data)

    def to_dict(
        self,
        include_all: bool = False,
        use_metadata_instructions: bool = False,
        **kwargs,
    ) -> dict:
        if use_metadata_instructions:
            return ignore_keys_with_blank_values(dict(
                clone_original=self.metadata_instructions.clone_original,
                original=self.metadata_instructions.original.to_dict_base(),
                upstream=self.metadata_instructions.upstream.to_dict_base(),
            ))

        data = self.to_dict_base(**kwargs)
        if include_all:
            for key in [
                'children',
                'clones',
                'siblings',
                'spawns',
                'upstream_dynamic_blocks',
                'upstream_dynamic_child_blocks',
            ]:
                values = getattr(self, key) or None
                if values:
                    data[key] = [v.to_dict_base(**kwargs) for v in values]

        return ignore_keys_with_blank_values(data)


@dataclass
class MetadataInstructions(BaseDataClass):
    clone_original: bool = False
    original: DynamicBlockWrapper = None
    parent: DynamicBlockWrapper = None
    upstream: DynamicBlockWrapper = None

    def __post_init__(self):
        self.serialize_attribute_class('original', DynamicBlockWrapper)
        self.serialize_attribute_class('parent', DynamicBlockWrapper)
        self.serialize_attribute_class('upstream', DynamicBlockWrapper)


def dynamically_created_child_block_runs(pipeline, block, block_runs: List):
    def _find_child(br, block=block, pipeline=pipeline):
        block2 = pipeline.get_block(br.block_uuid)
        return br.block_uuid != block.uuid and block2 and block2.uuid == block.uuid

    return list(filter(_find_child, block_runs))


def all_upstreams_completed(block, block_runs: List) -> bool:
    pipeline = block.pipeline

    block_runs_for_current_block = filter(
        lambda br: block.uuid == pipeline.get_block(br.block_uuid).uuid,
        block_runs,
    )

    upstream_block_uuids_mapping = {}
    for br in block_runs_for_current_block:
        # If this dynamic child block has upstream blocks that were dynamically created:
        if br.metrics and br.metrics.get('dynamic_upstream_block_uuids'):
            for up_uuid in br.metrics.get('dynamic_upstream_block_uuids') or []:
                up_block = pipeline.get_block(up_uuid)
                if up_block and up_block.uuid not in upstream_block_uuids_mapping:
                    upstream_block_uuids_mapping[up_block.uuid] = []
                # Create a mapping of the original upstream block
                # to all of its dynamic child block’s block run’s block_uuid
                upstream_block_uuids_mapping[up_block.uuid].append(up_uuid)

    completed_checks = []
    # Check that all the upstream block for this block is completed.
    for upstream_block in block.upstream_blocks:
        # If the upstream block’s UUID is in the mapping, that means it had an upstream block
        # that was a dynamic child block; and it’s upstream was dynamically created.
        if upstream_block.uuid in upstream_block_uuids_mapping:
            br_uuids = upstream_block_uuids_mapping[upstream_block.uuid]
            for br_uuid in br_uuids:
                up_block_run = find(
                    lambda br, br_uuid=br_uuid: br.block_uuid == br_uuid,
                    block_runs,
                )

                if up_block_run:
                    completed = 'completed' == up_block_run.status
                    completed_checks.append(completed)
                    if not completed:
                        return False
                else:
                    # If there is no block run, then it never completed.
                    completed_checks.append(False)
                    return False
        elif upstream_block.upstream_blocks:
            # If the upstream block has other upstream blocks that don’t have
            # dynamically created upstream blocks:
            completed = all_upstreams_completed(
                upstream_block,
                block_runs,
            )
            completed_checks.append(completed)
            if not completed:
                return False

            # for up_upstream_block in upstream_block.upstream_blocks:
        else:
            # If the upstream block has no upstream blocks,
            # check to see if its single block run is completed.
            up_block_run = find(
                lambda br, upstream_block=upstream_block: br.block_uuid == upstream_block.uuid,
                block_runs,
            )

            if up_block_run:
                completed = 'completed' == up_block_run.status
                completed_checks.append(completed)
                if not completed:
                    return False
            else:
                # If there is no block run, then it never completed.
                completed_checks.append(False)
                return False

    return all(completed_checks)
