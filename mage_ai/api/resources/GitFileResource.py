import os
import urllib.parse

from mage_ai.api.resources.GenericResource import GenericResource
from mage_ai.data_preparation.git import Git
from mage_ai.data_preparation.models.file import File


class GitFileResource(GenericResource):
    @classmethod
    async def member(self, pk, user, **kwargs):
        git_manager = Git.get_manager(user=user)

        file_path = urllib.parse.unquote(pk)

        file_path_absolute = os.path.join(git_manager.repo_path, file_path)
        file = File.from_path(file_path_absolute)
        if not file.exists():
            file = File.from_path(file_path_absolute, '')

        modified_files = git_manager.modified_files
        is_modified = file_path in modified_files

        query = kwargs.get('query', {})
        base_branch = query.get('base_branch', [git_manager.current_branch])
        if base_branch:
            base_branch = base_branch[0]
        compare_branch = query.get('compare_branch', [git_manager.current_branch])
        if compare_branch:
            compare_branch = compare_branch[0]

        content_from_base = None
        content_from_compare = None
        error = None

        if is_modified:
            import git

            try:
                content_from_base = git_manager.show_file_from_branch(base_branch, file_path)
                if base_branch == compare_branch:
                    content_from_compare = content_from_base
                elif compare_branch:
                    content_from_compare = git_manager.show_file_from_branch(
                        compare_branch,
                        file_path,
                    )
                else:
                    content_from_compare = file.content
            except git.exc.GitCommandError as err:
                error = str(err)

        return self(dict(
            content=file.content() if os.path.isfile(file.file_path) else None,
            content_from_base=content_from_base,
            content_from_compare=content_from_compare,
            error=error,
            filename=file_path,
            modified=is_modified,
        ), user, **kwargs)
