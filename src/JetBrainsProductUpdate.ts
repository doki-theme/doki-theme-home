type Change = {
  version: string;
  changes: string;
  released?: boolean;
};

const changes: Change[] = [
  {
    version: "18.3.1",
    changes: `- Updated the version control uncommitted line markers on the right-hand side (next the scrollbar) to be more visible. ([#446](https://github.com/doki-theme/doki-theme-jetbrains/issues/446))`
  },
  {
    version: "18.3.0",
    changes: `- Added \`Discreet Mode\`, when enabled will clear and not show any anime in the IDE. Also, the theme name in the status bar will temporarily hide as well. Is integrated with the [Anime Meme Plugin](https://github.com/ani-memes/AMII#discreet-mode), for the ultimate shame hiding experience.`
  },
  {
    version: "18.2.1",
    changes: `- Updates the colors used by the [IDE Features Trainer](https://plugins.jetbrains.com/plugin/8554-ide-features-trainer) plugin, for a more consistent learning experience.`
  },
  {
    version: "18.2.0",
    changes: `- Added localization for all people hanging out in the Russian Federation. Thank you **@Dragon-0609** for the translations!`
  },
  {
    version: "18.1.0",
    changes: `- Made it easier to differentiate the search & selection background colors for all **61** themes.<sup><sup>(Some days I question my current life choices....)</sup></sup>`
  },
  {
    version: "18.0.0",
    changes: `# NekoPara OneeSan Vol.\n## 4 New Themes!!\n---\n- Maple (Light/Dark)\n- Cinnamon (Dark)\n- Azuki (Dark)\n\n<div style="text-align: center">\n    <img alt="v18 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v18_girls.png"/>\n</div>\n\n---\n## Other Stuff\n`,
    released: true,
  },
  {
    version: "17.2.0",
    changes: `- Plugin is now supported on the \`Code With Me\` platform.`
  },
  {
    version: "17.1.0",
    changes: `- Added a convenient feature that allows you to set the console font family for all Doki Themes!`,
  },
  {
    version: "17.0.0",
    changes: `# NekoPara Release!\n## 3 New Themes!!\n---\n- Chocola (Dark)\n- Vanilla (Dark)\n- Coconut (Dark)\n\n<div style="text-align: center">\n    <img alt="v17 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v17_girls.png"/>\n</div>\n\n---\n## Other Stuff\n`,
    released: true,
  },
  {
    version: "16.2.0",
    changes: `- Added themed [XPathView Plugin](https://plugins.jetbrains.com/plugin/12478-xpathview--xslt) configurations.\n- Added themed [CSV Plugin](https://plugins.jetbrains.com/plugin/10037-csv/) configurations.\n- Themed the IntelliJ Ultimate [Flame Graph](https://blog.jetbrains.com/idea/2020/03/profiling-tools-and-intellij-idea-ultimate/).\n- Better Rider/C# Syntax Highlighting\n- Echinda's pressed "Action Button" is more visible.\n`,
  },
  {
    version: "16.1.0",
    changes: `- Better 2021.2 EAP Build Support.`,
  },
  {
    version: "16.0.0",
    changes: `## 5 New Themes!\n---\n\nFrom the Monogatari series:\n\n- Hanekawa Tsubasa (Dark)\n\nFrom the Yuru Camp series:\n\n- Shima Rin (Dark)\n\nFrom the Don't Toy With Me, Miss Nagatoro series:\n\n- Hayase Nagatoro (Dark)\n\nFrom the Kakegurui Series:\n\n- Jabami Yumeko (Dark)\n\nFrom the Future Diary Series\n\n- Gasai Yuno (Dark)\n\n<div style="text-align: center">\n    <img alt="v16 girl" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v16_girls.png"/>\n</div>\n\n---`,
    released: true,
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
