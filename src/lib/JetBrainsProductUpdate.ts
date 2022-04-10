import {Change, changes} from '../../common/src/JetBrainsChanges'

export const getChanges = (
  version: string,
): string => {
  const releaseIdentifier = (change: Change) =>
    !!change.released
  const cleanVersion = version.startsWith("v") ? version.substring(1) : version;
  return changes.reduce(
    (accum, change) => {
      if (accum.foundVersion && !accum.foundLaterRelease) {
        const foundLaterRelease = releaseIdentifier(change);
        return {
          ...accum,
          foundLaterRelease,
          changes: !foundLaterRelease
            ? accum.changes + "\n" + change.changes
            : accum.changes,
        };
      } else if (change.version === cleanVersion) {
        return {
          ...accum,
          foundVersion: true,
          changes: change.changes,
        };
      } else {
        return accum;
      }
    },
    {
      changes: "",
      foundVersion: false,
      foundLaterRelease: false,
    }
  ).changes;
};
