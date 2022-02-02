type Change = {
  version: string;
  changes: string;
  released?: boolean;
};

export const changes: Change[] = [
  {
    version: '74.1-1.0.0',
    changes: `## Synapse break. Vanishment, this world!\n\n**4 New Dark Themes!**\n\n- Decimate errors in the code alongside the Wicked Lord Shingan. Let your inner fantasies go rampant with Rikka Takanashi from: "Love, Chuunibyou, and Other Delusions". \n- It is comfy time! Don't let feature requests stress you out, because you can now code with Nadeshiko from Yuru Camp. \n- A Certain Scientific RailGun go: bzzzzzzt. Zap bugs out of existence with the electromaster Mikoto Misaka.\n- Raccoon + Tanuki = one really cute cinnamon bun. Enjoy your time coding with Raphtalia from: "Rising of the Shield Hero."\n\n<div style="text-align: center"><img alt="v74 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v74_girls_medium.png"/></div>\n\n### Other Stuff\n\n- Updated Syntax Highlight & Look and Feel changes for the following legacy themes: Ibuki Dark, Astolfo, Aqua, Natsuki Light, Hatsune Miku, Christmas Chocola, Emilia Dark, Beatrice, Ram, and Rem.\n- Added 2022.1 build support.\n- Increased the usability of the Search Highlight for light themes ([#485](https://github.com/doki-theme/doki-theme-jetbrains/issues/485)).\n- Fixed sticker re-positioning when you resize your window ([#482](https://github.com/doki-theme/doki-theme-jetbrains/issues/482)).`
  },
  {
    version: '22.3.0',
    changes: `- Added the ability to double-click movable stickers to save their relative position in the window.`
  },
  {
    version: '22.2.0',
    changes: `- Added the ability to put small stickers in all windows!\n- Updated Kotlin & PHP Syntax Highlighting some.\n- You can now control the \`max-width\` & \`max-height\` of stickers.\n- Stickers now change when you hit \`Apply\` in the \`Doki Theme Settings\` menu.`
  },
  {
    version: '22.1.0',
    changes: `- Added better support for the DataSpell product.\n- Themed the rest of the [file scopes](https://www.jetbrains.com/help/idea/configuring-scopes-and-file-colors.html).\n- Added [GrepConsole](https://plugins.jetbrains.com/plugin/7125-grep-console/) default colorings & icons.\n- Enhanced the usability of the debugger's breakpoint highlighting.\n- Fixed [Anime Meme Plugin](https://github.com/ani-memes/AMII) promotion issue.`
  },
  {
    version: '22.0.3',
    changes: `- Stickers no longer scale up in displays who have a higher than 100% scale setting when using the \`Ignore Scaling\` setting.`,
  },
  {
    version: '22.0.2',
    changes: ``,
    released: true,
  },
  {
    version: '22.0.1',
    changes: ``,
  },
  {
    version: '22.0.0',
    changes: `# Holiday Release!\n\n**3 New Dark Themes!**\n\n- Celebrate Christmas with Chocola from the NekoPara Series!\n  _I lied about Shigure being the last addition from NekoPara._\n\n- The 4th of July now just got even better, now that you can code with Essex from Azur Lane.\n  If you prefer a more canon experience, Essex's theme also has **secondary content** with the Eagle Union branding.\n\n- Even though I missed this year's Halloween, I've got something to look forward to in 2022.\n  Yotsuba, from The Quintessential Quintuplets, isn't 2spooky4me.\n\n<img alt="v22 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v22_girls_medium.png"/>\n\n---\n\n### Other Stuff\n\n- Moved Tohsaka Rin's wallpaper over to the right.\n- Updated the Bookmark Mnemonic icons to be themed.\n- Themed settings tags.\n- Themed the settings menu for the EduTools plugin.\n- Updated the debugger smart step-into colors.\n- Enhanced the plugin update notification to be more visually pleasing.`,
  },
  {
    version: '21.0.0',
    changes: `# Jahy-sama Will Not Be Discouraged!\nFeaturing the Dark World's Second in Command: Jahy!\n\n<img alt="v21 girl" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v21_girl_medium.png"/>\n</div>\n\n---\n\n## Other Stuff\n\n- Updated VCS inline hint color.\n- Fixed startup issue for new users.`,
    released: true,
  },
  {
    version: '20.0.0',
    changes: `# Only for Onii-Chan.\nLast addition from the NekoPara Series:\n- Minaduki Shigure (Light Theme)\n\nFrom the dumpster fire of a series, "EroManga Sensei":\n- Izumi Sagiri (Dark Theme)\n\nFrom the smaller burning trash heap, "OreImo (My little sister cannot be this cute)":\n- Kousaka Kirino (Dark Theme)\n\nAnime is trash...._and so am I_.\n\n<img alt="v20 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v20_girls_medium.png"/>\n</div>\n\n---`,
    released: true,
  },
  {
    version: "19.0.0",
    changes: `# KillLaKill Alt. Themes\n\n**2 New Themes!**\n\n- Ryuko Light\n- Satsuki Dark\n\n<img alt="v19 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v19_girls_medium.png"/>\n</div>\n\n---\n## Other Stuff`
  },
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
    changes: `# NekoPara OneeSan Vol.\n## 4 New Themes!!\n---\n- Maple (Light/Dark)\n- Cinnamon (Dark)\n- Azuki (Dark)\n\n<div style="text-align: center">\n    <img alt="v18 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v18_girls_medium.png"/>\n</div>\n\n---\n## Other Stuff\n`,
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
    changes: `# NekoPara Release!\n## 3 New Themes!!\n---\n- Chocola (Dark)\n- Vanilla (Dark)\n- Coconut (Dark)\n\n<div style="text-align: center">\n    <img alt="v17 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v17_girls_medium.png"/>\n</div>\n\n---\n## Other Stuff\n`,
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
    changes: `## 5 New Themes!\n---\n\nFrom the Monogatari series:\n\n- Hanekawa Tsubasa (Dark)\n\nFrom the Yuru Camp series:\n\n- Shima Rin (Dark)\n\nFrom the Don't Toy With Me, Miss Nagatoro series:\n\n- Hayase Nagatoro (Dark)\n\nFrom the Kakegurui Series:\n\n- Jabami Yumeko (Dark)\n\nFrom the Future Diary Series\n\n- Gasai Yuno (Dark)\n\n<div style="text-align: center">\n    <img alt="v16 girl" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v16_girls_medium.png"/>\n</div>\n\n---`,
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
