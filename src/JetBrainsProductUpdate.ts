import semver from 'semver';

type Change = {
  version: string;
  changes: string;
  released?: boolean;
}

const changes: Change[] = [
  {
    version: '15.3.0',
    changes: `- Changed update notification to be a browser windo of the new [Doki Theme home page](https://doki-theme.unthrottled.io)`
  },
  {
    version: '15.2.0',
    changes: `- 2021.2 build support!`
  },
  {
    version: '15.2.0',
    changes: `- 2021.2 build support!`
  },
  {
    version: '15.1.1',
    changes: `- Fixed many small (but annoying) issues found in [#390](https://github.com/doki-theme/doki-theme-jetbrains/issues/390)`
  },
  {
    version: '15.1.0',
    changes: '',
    released: true,
  }
]

export const getChanges = (version: string): string => {
  
  return changes.map(change => change.changes).join('\n');
};