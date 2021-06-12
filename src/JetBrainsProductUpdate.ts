type Change = {
  version: string;
  changes: string;
  released?: boolean;
};

const changes: Change[] = [
{
    version: "16.0.0",
    changes: `## 5 New Themes!\n---\n\nFrom the Monogatari series:\n\n- Hanekawa Tsubasa (Dark)\n\nFrom the Yuru Camp series:\n\n- Shima Rin (Dark)\n\nFrom the Don't Toy With Me, Miss Nagatoro series:\n\n- Hayase Nagatoro (Dark)\n\nFrom the Kakegurui Series:\n\n- Jabami Yumeko (Dark)\n\nFrom the Future Diary Series\n\n- Gasai Yuno (Dark)\n\n<div style="text-align: center">\n    <img alt="v16 girl" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v16_girls.png"/>\n</div>\n\n---`,
  },
  {
    version: "15.3.0",
    changes: `- Changed update notification to be a browser window of the new [Doki Theme home page](https://doki-theme.unthrottled.io)`,
  },
  {
    version: "15.2.0",
    changes: `- 2021.2 build support!`,
  },
  {
    version: "15.1.1",
    changes: `- Fixed many small (but annoying) issues found in [#390](https://github.com/doki-theme/doki-theme-jetbrains/issues/390)`,
  },
  {
    version: "15.1.0",
    changes: `- Added \`Notification Opacity\` setting that enables you to control the transparency of your notification windows.

    ![Notification Opacity](https://raw.githubusercontent.com/doki-theme/doki-theme-jetbrains/master/assets/readmeAssets/notification_opacity.gif)
    `,
    released: true,
  },
];

export const getChanges = (version: string): string => {
  const cleanVersion = version.startsWith("v") ? version.substr(1) : version;
  return changes.reduce(
    (accum, change) => {
      if (accum.foundVersion && !accum.foundLaterRelease) {
        const foundLaterRelease = !!change.released;
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
