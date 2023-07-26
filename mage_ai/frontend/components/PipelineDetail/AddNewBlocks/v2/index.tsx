import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMutation } from 'react-query';

import AutocompleteDropdown from '@components/AutocompleteDropdown';
import BlockActionObjectType, { ObjectType } from '@interfaces/BlockActionObjectType';
import Button from '@oracle/elements/Button';
import ClickOutside from '@oracle/components/ClickOutside';
import Flex from '@oracle/components/Flex';
import FlexContainer from '@oracle/components/FlexContainer';
import FlyoutMenuWrapper from '@oracle/components/FlyoutMenu/FlyoutMenuWrapper';
import KeyboardTextGroup from '@oracle/elements/KeyboardTextGroup';
import MarkdownPen from '@oracle/icons/custom/MarkdownPen';
import PenWriting from '@oracle/icons/custom/PenWriting';
import SearchResultType, { SearchResultTypeEnum } from '@interfaces/SearchResultType';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import TextInput from '@oracle/elements/Inputs/TextInput';
import Tooltip from '@oracle/components/Tooltip';
import api from '@api';
import {
  ABBREV_BLOCK_LANGUAGE_MAPPING,
  BLOCK_TYPE_NAME_MAPPING,
  BlockLanguageEnum,
  BlockRequestPayloadType,
  BlockTypeEnum,
} from '@interfaces/BlockType';
import {
  ArrowsAdjustingFrameSquare,
  BlockBlank,
  BlockCubePolygon,
  BlockGeneric,
  CircleWithArrowUp,
  CubeWithArrowDown,
  DBT as DBTIcon,
  File as FileIcon,
  FrameBoxSelection,
  Sensor,
  TemplateShapes,
} from '@oracle/icons';
import { BLOCK_TYPE_ICON_MAPPING } from '@components/CustomTemplates/BrowseTemplates/constants';
import {
  ButtonWrapper,
  ContainerStyle,
  DividerStyle,
  DropdownStyle,
  ICON_SIZE,
  RowStyle,
  SearchStyle,
  TextInputFocusAreaStyle,
} from './index.style';
import { FlyoutMenuItemType } from '@oracle/components/FlyoutMenu';
import { ItemType, RenderItemProps } from '@components/AutocompleteDropdown/constants';
import {
  KEY_SYMBOL_FORWARD_SLASH,
  KEY_SYMBOL_META,
  KEY_CODE_ESCAPE,
} from '@utils/hooks/keyboardShortcuts/constants';
import { PipelineTypeEnum } from '@interfaces/PipelineType';
import { UNIT } from '@oracle/styles/units/spacing';
import { getColorsForBlockType } from '@components/CodeBlock/index.style';
import { getdataSourceMenuItems } from '../utils';
import { onSuccess } from '@api/utils/response';
import { pauseEvent } from '@utils/events';
import { useError } from '@context/Error';
import { useKeyboardContext } from '@context/Keyboard';

const BUTTON_INDEX_TEMPLATES = 0;
const BUTTON_INDEX_CUSTOM = 1;
const BUTTON_INDEX_MARKDOWN = 0;

type AddNewBlocksV2Props = {
  addNewBlock: (block: BlockRequestPayloadType) => void;
  blockIdx: number;
  blockTemplatesByBlockType: {
    [blockType: string]: {
      [language: string]: FlyoutMenuItemType;
    };
  };
  compact?: boolean;
  focused?: boolean;
  itemsDBT: FlyoutMenuItemType[];
  pipelineType: PipelineTypeEnum;
  searchTextInputRef?: any;
  setAddNewBlockMenuOpenIdx?: (cb: any) => void;
  setFocused?: (focused: boolean) => void;
  showBrowseTemplates?: (opts?: {
    addNew?: boolean;
    addNewBlock: (block: BlockRequestPayloadType) => void;
    blockType?: BlockTypeEnum;
    language?: BlockLanguageEnum;
  }) => void;
};

function AddNewBlocksV2({
  addNewBlock,
  blockIdx,
  blockTemplatesByBlockType,
  compact,
  focused: focusedProp,
  itemsDBT,
  pipelineType,
  searchTextInputRef,
  setAddNewBlockMenuOpenIdx,
  setFocused: setFocusedProp,
  showBrowseTemplates,
}: AddNewBlocksV2Props) {
  const buttonRefTemplates = useRef(null);
  const buttonRefCustom = useRef(null);
  const timeoutRef = useRef(null);
  const refTextInputInit = useRef(null);
  const refTextInput =
    typeof searchTextInputRef !== 'undefined' ? searchTextInputRef : refTextInputInit;

  const componentUUID = useMemo(() => `AddNewBlocksV2/${blockIdx}`, [blockIdx]);
  const [showError] = useError(null, {}, [], {
    uuid: `AddNewBlocksV2/${blockIdx}`,
  });

  const [buttonMenuOpenIndex, setButtonMenuOpenIndex] = useState<number>(null);
  const [focusedState, setFocusedState] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(null);
  const [searchResult, setSearchResult] = useState<SearchResultType>(null);

  const focused = useMemo(() => {
    if (typeof focusedProp !== 'undefined') {
      return focusedProp;
    }

    return focusedState;
  }, [
    focusedProp,
    focusedState,
  ]);

  const setFocused = useCallback((prev) => {
    if (typeof setFocusedProp !== 'undefined') {
      return setFocusedProp(prev);
    }

    return setFocusedState(prev);
  }, [
    setFocusedProp,
    setFocusedState,
  ]);

  const {
    registerOnKeyDown,
    unregisterOnKeyDown,
  } = useKeyboardContext();

  useEffect(() => () => unregisterOnKeyDown(componentUUID), [
    unregisterOnKeyDown,
    componentUUID,
  ]);

  registerOnKeyDown?.(
    componentUUID,
    (event, keyMapping) => {
      if (focused) {
        if (keyMapping[KEY_CODE_ESCAPE]) {
          setFocused(false);
          refTextInput?.current?.blur();
        }
      }
    },
    [
      focused,
      refTextInput,
    ],
  );

  const closeButtonMenu = useCallback(() => setButtonMenuOpenIndex(null), []);
  const handleBlockZIndex = useCallback((newButtonMenuOpenIndex: number) =>
    setAddNewBlockMenuOpenIdx?.(idx => (
      (idx === null || buttonMenuOpenIndex !== newButtonMenuOpenIndex)
        ? blockIdx
        : null
    )),
    [blockIdx, buttonMenuOpenIndex, setAddNewBlockMenuOpenIdx],
  );

  const itemsDataLoader = useMemo(() => getdataSourceMenuItems(
    addNewBlock,
    BlockTypeEnum.DATA_LOADER,
    pipelineType,
    {
      blockTemplatesByBlockType,
      v2: true,
    },
  )?.find(({
    uuid,
  }) => uuid === `${BlockTypeEnum.DATA_LOADER}/${BlockLanguageEnum.PYTHON}`)?.items,
  [
    addNewBlock,
    blockTemplatesByBlockType,
    pipelineType,
  ]);

  const itemsDataExporter = useMemo(() => getdataSourceMenuItems(
    addNewBlock,
    BlockTypeEnum.DATA_EXPORTER,
    pipelineType,
    {
      blockTemplatesByBlockType,
      v2: true,
    },
  )?.find(({
      uuid,
  }) => uuid === `${BlockTypeEnum.DATA_EXPORTER}/${BlockLanguageEnum.PYTHON}`)?.items,
  [
    addNewBlock,
    blockTemplatesByBlockType,
    pipelineType,
  ]);

  const itemsTransformer = useMemo(() => getdataSourceMenuItems(
    addNewBlock,
    BlockTypeEnum.TRANSFORMER,
    pipelineType,
    {
      blockTemplatesByBlockType,
      v2: true,
    },
  )?.find(({
    uuid,
  }) => uuid === `${BlockTypeEnum.TRANSFORMER}/${BlockLanguageEnum.PYTHON}`)?.items, [
    addNewBlock,
    blockTemplatesByBlockType,
    pipelineType,
  ]);

  const itemsSensors = useMemo(() => getdataSourceMenuItems(
    addNewBlock,
    BlockTypeEnum.SENSOR,
    pipelineType,
    {
      blockTemplatesByBlockType,
      v2: true,
    },
  )?.find(({
      uuid,
  }) => uuid === `${BlockTypeEnum.SENSOR}/${BlockLanguageEnum.PYTHON}`)?.items,
  [
    addNewBlock,
    blockTemplatesByBlockType,
    pipelineType,
  ]);

  const buildNonPythonItems = useCallback((blockType: BlockTypeEnum) => [
    {
      isGroupingTitle: true,
      label: () => 'SQL',
      uuid: `${BlockLanguageEnum.SQL}/${blockType}/group`,
    },
    {
      label: () => 'Base template (generic)',
      onClick: () => {
        addNewBlock({
          language: BlockLanguageEnum.SQL,
          type: blockType,
        });
      },
      uuid: `${BlockLanguageEnum.SQL}/${blockType}/Base template (generic)`,
    },
    {
      isGroupingTitle: true,
      label: () => 'R',
      uuid: `${BlockLanguageEnum.R}/${blockType}/group`,
    },
    {
      label: () => 'Base template (generic)',
      onClick: () => {
        addNewBlock({
          language: BlockLanguageEnum.R,
          type: blockType,
        });
      },
      uuid: `${BlockLanguageEnum.R}/${blockType}/Base template (generic)`,
    },
  ], [
    addNewBlock,
  ]);

  const itemsTemplates = useMemo(() => [
    {
      beforeIcon: (
        <CubeWithArrowDown
          fill={getColorsForBlockType(
            BlockTypeEnum.DATA_LOADER,
          ).accent}
          size={ICON_SIZE}
        />
      ),
      items: [
        {
          isGroupingTitle: true,
          label: () => 'Python',
          uuid: `${BlockLanguageEnum.PYTHON}${BlockTypeEnum.DATA_LOADER}/group`,
        },
        // @ts-ignore
      ].concat(itemsDataLoader).concat(buildNonPythonItems(BlockTypeEnum.DATA_LOADER)),
      label: () => BLOCK_TYPE_NAME_MAPPING[BlockTypeEnum.DATA_LOADER],
      uuid: `${BlockTypeEnum.DATA_LOADER}/${BlockLanguageEnum.PYTHON}`,
    },
    {
      beforeIcon: (
        <FrameBoxSelection
          fill={getColorsForBlockType(
            BlockTypeEnum.TRANSFORMER,
          ).accent}
          size={ICON_SIZE}
        />
      ),
      items: [
        {
          isGroupingTitle: true,
          label: () => 'Python',
          uuid: `${BlockLanguageEnum.PYTHON}${BlockTypeEnum.TRANSFORMER}/group`,
        },
        // @ts-ignore
      ].concat(itemsTransformer).concat(buildNonPythonItems(BlockTypeEnum.TRANSFORMER)),
      label: () => BLOCK_TYPE_NAME_MAPPING[BlockTypeEnum.TRANSFORMER],
      uuid: `${BlockTypeEnum.TRANSFORMER}/${BlockLanguageEnum.PYTHON}`,
    },
    {
      beforeIcon: (
        <CircleWithArrowUp
          fill={getColorsForBlockType(
            BlockTypeEnum.DATA_EXPORTER,
          ).accent}
          size={ICON_SIZE}
        />
      ),
      items: [
        {
          isGroupingTitle: true,
          label: () => 'Python',
          uuid: `${BlockLanguageEnum.PYTHON}${BlockTypeEnum.DATA_EXPORTER}/group`,
        },
        // @ts-ignore
      ].concat(itemsDataExporter).concat(buildNonPythonItems(BlockTypeEnum.DATA_EXPORTER)),
      label: () => BLOCK_TYPE_NAME_MAPPING[BlockTypeEnum.DATA_EXPORTER],
      uuid: `${BlockTypeEnum.DATA_EXPORTER}/${BlockLanguageEnum.PYTHON}`,
    },
    {
      beforeIcon: (
        <Sensor
          fill={getColorsForBlockType(
            BlockTypeEnum.SENSOR,
          ).accent}
          size={ICON_SIZE}
        />
      ),
      items: [
        {
          isGroupingTitle: true,
          label: () => 'Python',
          uuid: `${BlockLanguageEnum.PYTHON}${BlockTypeEnum.SENSOR}/group`,
        },
        // @ts-ignore
      ].concat(itemsSensors),
      label: () => BLOCK_TYPE_NAME_MAPPING[BlockTypeEnum.SENSOR],
      uuid: `${BlockTypeEnum.SENSOR}/${BlockLanguageEnum.PYTHON}`,
    },
    {
      beforeIcon: (
        <DBTIcon
          fill={getColorsForBlockType(
            BlockTypeEnum.DBT,
          ).accent}
          size={ICON_SIZE}
        />
      ),
      items: itemsDBT,
      label: () => BLOCK_TYPE_NAME_MAPPING[BlockTypeEnum.DBT],
      uuid: BlockTypeEnum.DBT,
    },
    {
      isGroupingTitle: true,
      label: () => 'Custom templates',
      uuid: 'custom_templates',
    },
    {
      beforeIcon: <TemplateShapes default size={ICON_SIZE} />,
      label: () => 'Browse templates',
      onClick: () => showBrowseTemplates({
        addNewBlock,
      }),
      uuid: 'browse_templates',
    },
    {
      beforeIcon: <ArrowsAdjustingFrameSquare default size={ICON_SIZE} />,
      label: () => 'Create new template',
      onClick: () => showBrowseTemplates({
        addNew: true,
        addNewBlock,
      }),
      uuid: 'create_template',
    },
  ], [
    addNewBlock,
    buildNonPythonItems,
    itemsDataExporter,
    itemsDataLoader,
    itemsDBT,
    itemsSensors,
    itemsTransformer,
    showBrowseTemplates,
  ]);

  const itemsCustom = useMemo(() => [
    {
      beforeIcon: <BlockGeneric default size={ICON_SIZE} />,
      label: () => 'Python block',
      onClick: () => {
        addNewBlock({
          language: BlockLanguageEnum.PYTHON,
          type: BlockTypeEnum.CUSTOM,
        });
      },
      uuid: 'Python',
    },
    {
      beforeIcon: <BlockGeneric default size={ICON_SIZE} />,
      label: () => 'SQL block',
      onClick: () => {
        addNewBlock({
          language: BlockLanguageEnum.SQL,
          type: BlockTypeEnum.CUSTOM,
        });
      },
      uuid: 'SQL',
    },
    {
      beforeIcon: <BlockGeneric default size={ICON_SIZE} />,
      label: () => 'R block',
      onClick: () => {
        addNewBlock({
          language: BlockLanguageEnum.R,
          type: BlockTypeEnum.CUSTOM,
        });
      },
      uuid: 'R',
    },
    {
      beforeIcon: <PenWriting default size={ICON_SIZE} />,
      label: () => 'Scratchpad',
      onClick: () => {
        addNewBlock({
          language: BlockLanguageEnum.PYTHON,
          type: BlockTypeEnum.SCRATCHPAD,
        });
      },
      uuid: 'scratchpad',
    },
  ], [
    addNewBlock,
  ]);

  const [createSearchResult] = useMutation(
    api.search_results.useCreate(),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: ({
            search_result: sr,
          }) => {
            setSearchResult(sr);
          },
          onErrorCallback: (response, errors) => showError({
            errors,
            response,
          }),
        },
      ),
    },
  );

  const onUserTyping = useCallback((e) => {
    clearTimeout(timeoutRef.current);

    const val = e.target.value;
    setInputValue(val);

    if (!val) {
      setSearchResult(null);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      // @ts-ignore
      createSearchResult({
        search_result: {
          pipeline_type: pipelineType,
          query: val,
          ratio: 70,
          type: SearchResultTypeEnum.BLOCK_ACTION_OBJECTS,
        },
      });
    }, 500);
  }, [
    createSearchResult,
    pipelineType,
    timeoutRef,
  ]);

  const results: BlockActionObjectType[] =
    useMemo(() => searchResult?.results || [], [searchResult]);
  const autocompleteItems =
    useMemo(() => results?.map((blockActionObject: BlockActionObjectType) => ({
      itemObject: blockActionObject,
      searchQueries: [searchResult?.uuid],
      value: blockActionObject?.uuid,
    })), [
      results,
      searchResult,
    ]);

  const focusArea = useMemo(() => (
    <TextInputFocusAreaStyle
      compact={compact}
      onClick={() => refTextInput?.current?.focus()}
    />
  ), [
    compact,
    refTextInput,
  ]);

  return (
    <ClickOutside
      onClickOutside={closeButtonMenu}
      open
    >
      <ContainerStyle compact={compact} focused={focused}>
        <FlexContainer
          alignItems="center"
        >
          <ButtonWrapper
            compact={compact}
            increasedZIndex={BUTTON_INDEX_TEMPLATES === buttonMenuOpenIndex}
          >
            <FlyoutMenuWrapper
              disableKeyboardShortcuts
              items={itemsTemplates}
              onClickCallback={closeButtonMenu}
              open={BUTTON_INDEX_TEMPLATES === buttonMenuOpenIndex}
              parentRef={buttonRefTemplates}
              uuid="button_templates"
            >
              <Tooltip
                block
                label="Add a block from a template"
                size={null}
                widthFitContent
              >
                <Button
                  iconOnly
                  noBackground
                  noBorder
                  noPadding
                  onClick={(e) => {
                    e.preventDefault();
                    setButtonMenuOpenIndex(val =>
                      val === BUTTON_INDEX_TEMPLATES
                        ? null
                        : BUTTON_INDEX_TEMPLATES,
                    );
                    handleBlockZIndex(BUTTON_INDEX_TEMPLATES);
                  }}
                >
                  <TemplateShapes
                    secondary={BUTTON_INDEX_TEMPLATES === buttonMenuOpenIndex}
                    size={ICON_SIZE}
                  />
                </Button>
              </Tooltip>
            </FlyoutMenuWrapper>
          </ButtonWrapper>

          <Spacing mr={3} />

          <ButtonWrapper
            compact={compact}
            increasedZIndex={BUTTON_INDEX_CUSTOM === buttonMenuOpenIndex}
          >
            <FlyoutMenuWrapper
              disableKeyboardShortcuts
              items={itemsCustom}
              onClickCallback={closeButtonMenu}
              open={BUTTON_INDEX_CUSTOM === buttonMenuOpenIndex}
              parentRef={buttonRefCustom}
              uuid="button_custom"
            >
              <Tooltip
                block
                label="Add a blank custom block or scratchpad block"
                size={null}
                widthFitContent
              >
                <Button
                  iconOnly
                  noBackground
                  noBorder
                  noPadding
                  onClick={(e) => {
                    e.preventDefault();
                    setButtonMenuOpenIndex(val =>
                      val === BUTTON_INDEX_CUSTOM
                        ? null
                        : BUTTON_INDEX_CUSTOM,
                    );
                    handleBlockZIndex(BUTTON_INDEX_CUSTOM);
                  }}
                >
                  <BlockBlank
                    secondary={BUTTON_INDEX_CUSTOM === buttonMenuOpenIndex}
                    size={ICON_SIZE}
                  />
                </Button>
              </Tooltip>
            </FlyoutMenuWrapper>
          </ButtonWrapper>

          <Spacing mr={3} />

          <ButtonWrapper
            compact={compact}
            increasedZIndex={BUTTON_INDEX_MARKDOWN === buttonMenuOpenIndex}
          >
            <Tooltip
              block
              label="Add a markdown block for documentation"
              size={null}
              widthFitContent
            >
              <Button
                iconOnly
                noBackground
                noBorder
                noPadding
                onClick={(e) => {
                  e.preventDefault();
                  addNewBlock({
                    language: BlockLanguageEnum.MARKDOWN,
                    type: BlockTypeEnum.MARKDOWN,
                  });
                }}
              >
                <MarkdownPen size={ICON_SIZE} />
              </Button>
            </Tooltip>
          </ButtonWrapper>

          <Spacing mr={3} />

          <DividerStyle />

          <Spacing mr={3} />

          <SearchStyle>
            {focusArea}
            <FlexContainer alignItems="center" fullWidth>
              <TextInput
                fullWidth
                noBackground
                noBorder
                // Need setTimeout because when clicking a row, the onBlur will be triggered.
                // If the onBlur triggers too soon, clicking a row does nothing.
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                onChange={onUserTyping}
                onFocus={() => setFocused(true)}
                paddingHorizontal={0}
                paddingVertical={0}
                placeholder="Search for a block..."
                ref={refTextInput}
                value={inputValue || ''}
              />
              <KeyboardTextGroup
                addPlusSignBetweenKeys
                disabled
                keyTextGroups={[[KEY_SYMBOL_META, KEY_SYMBOL_FORWARD_SLASH]]}
              />
            </FlexContainer>
            {focusArea}

            <DropdownStyle
              topOffset={refTextInput?.current?.getBoundingClientRect().height + (
                compact
                  ? 1.5 * UNIT
                  : 2.5 * UNIT
              )}
            >
              <AutocompleteDropdown
                itemGroups={[
                  {
                    items: focused ? autocompleteItems : [],
                    renderItem: (
                      {
                        itemObject: blockActionObject,
                      }: ItemType,
                      opts: RenderItemProps,
                    ) => {
                      const {
                        block_type: blockType,
                        description,
                        language,
                        object_type: objectType,
                        title,
                      } = blockActionObject;

                      const iconProps: {
                        fill?: string;
                        size: number;
                      } = {
                        fill: getColorsForBlockType(blockType).accent,
                        size: ICON_SIZE,
                      };
                      const Icon = BLOCK_TYPE_ICON_MAPPING[blockType];

                      const displayText =
                        `${title}${description ? ': ' + description : ''}`.slice(0, 80);

                      return (
                        <RowStyle
                          {...opts}
                          onClick={(e) => {
                            pauseEvent(e);
                            opts?.onClick?.(e);
                          }}
                        >
                          <Flex
                            alignItems="center"
                            flex={1}
                          >
                            {Icon && <Icon default={!iconProps?.fill} {...iconProps} />}

                            <Spacing mr={2} />

                            <Text default overflowWrap textOverflow>
                              {displayText}
                            </Text>
                          </Flex>

                          <Spacing mr={1} />

                          <Text monospace muted uppercase>
                            {ABBREV_BLOCK_LANGUAGE_MAPPING[language]}
                          </Text>

                          <Spacing mr={1} />

                          {ObjectType.BLOCK_FILE === objectType && (
                            <FileIcon muted size={ICON_SIZE} />
                          )}

                          {ObjectType.CUSTOM_BLOCK_TEMPLATE === objectType && (
                            <TemplateShapes muted size={ICON_SIZE} />
                          )}

                          {ObjectType.MAGE_TEMPLATE === objectType && (
                            <BlockCubePolygon muted size={ICON_SIZE} />
                          )}
                        </RowStyle>
                      );
                    },
                  },
                ]}
                onSelectItem={({ itemObject: blockActionObject }: ItemType) => {
                  addNewBlock({
                    block_action_object: blockActionObject,
                  });
                  setInputValue(null);
                  setSearchResult(null);
                }}
                uuid={componentUUID}
              />
            </DropdownStyle>
          </SearchStyle>
        </FlexContainer>
      </ContainerStyle>
    </ClickOutside>
  );
}

export default AddNewBlocksV2;
