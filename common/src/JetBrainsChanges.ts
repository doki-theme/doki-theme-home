export type Change = {
  version: string;
  changes: string;
  released?: boolean;
};


export const changes: Change[] = [
  {
    version: '88.3-1.7.1',
    changes: ""
  },
  {
    version: '88.2-1.7.0',
    changes: ""
  },
  {
    version: '88.2-1.6.3',
    changes: ""
  },
  {
    version: '88.2-1.6.2',
    changes: ""
  },
  {
    version: '88.2-1.6.1',
    changes: ""
  },
  {
    version: '88.2-1.6.0',
    changes: `<div align="center">\n<img src="https://doki.assets.unthrottled.io/misc/doki_icons_logo.png" width="256" height="256" alt="Doki Theme Icons"></img>\n</div>\n\n- Removed the legacy Material Icons. Please install the [Doki Theme Icons](https://github.com/doki-theme/doki-theme-icons-jetbrains) in its place. \n- Renamed plugin to \`Doki Theme\` & updated plugin logo.\n- Zero Two's Obsidian theme is now the default for new users.\n- Updated Chocola's Xmas theme.\n- Made Natsuki's & Tohru's ANSI green color more usable.\n- Themed the \`Version Control Marker Popup\`\n- Restored the selected radio button for all light themes.\n- Themed the segmented buttons, so various settings UI components look better.\n- Added the initial experimental UI (New UI) support.\n- Raised lowest supported build to 2022.2 to support Java 17.\n- Source code is compiled for Java 17.\n`
  },
  {
    version: '88.1-1.5.4',
    changes: "",
    released: true,
  },
  {
    version: '88.1-1.5.3',
    changes: ""
  },
  {
    version: '88.1-1.5.2',
    changes: ""
  },
  {
    version: '88.1-1.5.1',
    changes: "- Added the initial support for the 2022.3 platform.\n- Potentially fixed icon loading issue at start up."
  },
  {
    version: '88.1-1.5.0',
    changes: "- Made the vertical code folding lines, in the gutter, visible again. If you want them gone, like they were before, you can turn them off by going to the setting \"`Editor` > `General` > `Code Folding` > `Show code folding outline`\"."
  },
  {
    version: '88.1-1.4.0',
    changes: ``,
    released: true,
  },
  {
    version: '88.0-1.3.0',
    changes: `<div style="text-align: center; margin-top: 3.5rem;"><h3>Best Girl just got <em>better</em>. ❤️</h3><img alt="Best Girl" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/best_girl_medium.png"/><br/><br/><em>Zero Two's Not Just A Cutie. ;)</em></div>\n\n**4 New Themes!**\n\n- I decided that I didn't have enough Zero Two themes, so I fixed that. She now has a new top-tier dark hacker theme: \`Obsidian\`. I also felt like Red Zero Two doesn't get enough attention, so I added a light \`Sakura\` theme which features her as she was as a child. With all these new Zero Two themes, I thought it would be best to rename the existing dark & light themes to \`Rose\` & \`Lily\` respectively.\n- I also went ahead and added Hiro as well. (Dark Theme)\n- Lastly, this is the first release with a duo theme! (Nao's doesn't count, I just wanted the melon meme.) Just to pad my Zero Two theme stats, I've now got a Hiro & Zero Two couples' dark theme.\n\n### Other Stuff\n\n- Desaturated Itsuki's theme a bit.\n- Adjusted CC's inlay color.\n- Fixed differentiation fo un-versioned files in VCS.\n- Allowed you to opt-out of promotional content.\n- Changed [Anime Meme Plugin](https://github.com/ani-memes/AMII) promotion to a notification.\n- It was brought to my attention that I cannot spell "Rimuru".\n`
  },
  {
    version: '84.2-1.3.0',
    changes: ``,
    released: true,
  },
  {
    version: '84.1-1.2.1',
    changes: `<div style="text-align: center; margin-top: 3.5rem;"><img alt="v84 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v84_girls_medium.png"/></div>\n\nThis release is not for my Dark Theme Normies. \nDark themes are nice, but I like Light Themes too (and my Dark Theme Normies).\nI'm currently trying new things out. \nSorry in advance if I made your eyes bleed.\nI might tweak some of them as time goes on, still not 100% on what looks good & also is a fun color.\n\n**6 New Light Themes!**\n\n- Tired & broken down programmers rejoice! Even though you will never be pampered by a real Fox-demigod, you can now at least code with one. Let "The Helpful Fox Senko-san" watch over you as complete your tickets. You can almost feel the "おかえりなのじゃ" you will never get 😭\n- I decided to complete my Quintessential Quintuplets collection by adding the oldest and youngest quint: Nakano Ichika & Nakano Itsuki.\n- Tomori Nao, from Charlotte, has an interesting dichotomy when it comes to her personality. She is super cute tho.\n- Have I ever seen Code Geass? No. Can I appreciate C.C. without having seen the anime? Yeah buddy.\n- Guess while I'm talking about "anime I haven't seen but, chose to make a theme because the girl is pretty." We now have Yuzuriha Inori from Guilty Crown.\n\n### Other Stuff\n\n- Adjusted Sayori's dark diff deleted color & updated Satsuki's light autocomplete letter match color.\n- Updated \`Weak Warning\` underline color for light & dark themes.\n- Changed added & modified VCS file colors to be more usable for light & dark themes.\n- Migrating MacOS users on 2022.2 builds to not use the provided themed title bar, as it has native support now.\n- Fixed issue when opening the update notification for some users.\n- Fixed issue with stickers keeping the previously sized sticker when adjusting the size of the sticker.\n- Added themed [Rainbow Brackets](https://plugins.jetbrains.com/plugin/10080-rainbow-brackets) that match the [VSCode Bracket Match](https://github.com/doki-theme/doki-theme-vscode/blob/master/CHANGELOG.md#782-110-themed-bracket-pair-colorization), for the most part.\n- Raised lowest supported IDE build to \`211.7628.21\`.\n- Fixed usability problems for: Beatrice, C.C., & Sayori Dark.\n- Fixed the VCS Log inactive color & some other stuff.`,
  },
  {
    version: '78.2-1.2.0',
    changes: ``
  },
  {
    version: '78.2-1.1.1',
    changes: ``,
    released: true,
  },
  {
    version: '78.2-1.1.0',
    changes: ``,
  },
  {
    version: '78.1-1.0.9',
    changes: ``,
  },
  {
    version: '78.1-1.0.8',
    changes: `<div align='center'><h1>Major Legacy Theme Updates</h1></div>\n\n\n- **Major Updates** to syntax highlighting colors to these themes: \n  - Asuna Dark \n  - Beatrice\n  - Emilia Light.\n  - Ibuki Light\n  - Monika Dark/Light \n  - Natsuki Dark/Light\n  - Sayori Dark/Light\n  - Yuri Dark/Light\n- Minor syntax highlighting updates to these themes: Nakano Miku, Megumin, Mai Dark, Ryuko Dark, Tohsaka Rin,\n  Rias: Crimson, Mai Light, and Asuna Light\n- Small syntax highlighting usability updates to these themes: Zero Two Dark, Yukino, Hanekawa,\n  Nagatoro, Rei, Astolfo, Echidna, Shima Rin, Sonoda Umi, Kurisu, & Ishtar Dark\n- Made the background art brighter for: Satsuki Dark & Asuna Dark\n- Made background art dimmer for: Yuri Light.\n- Added a link to install [Theme Randomizer](https://plugins.jetbrains.com/plugin/16107-theme-randomizer) from settings.\n- Decreased load time of the settings menu for users who have many fonts installed on their machine.\n- Added a feature that can be enabled from the settings or toggled from \`Hide on Hover\` action, that allows you to hover\n    over the sticker to see what's behind it.\n- Adjusted Drag & Drop to be able to see where you are dropping.\n\n#### Motivation\n\nI am in a position where I will now regularly be using my light themes more often. I am also planning on adding more.\nMost of my light themes were created a long time ago and my tastes have evolved over time.\nI have taken the time to revisit a fair number of my legacy themes, light and dark.\nIf you want the old syntax highlighting back, then feel free to reach\nout [in this discussion thread](https://github.com/doki-theme/doki-theme-jetbrains/discussions/509).\nI will provide you assets and instructions on how to revert the color scheme back.\n\nThank you for your understanding!\n`,
  },
  {
    version: '78.0-1.0.7',
    changes: ``,
    released: true,
  },
  {
    version: '78.0-1.0.6',
    changes: `<div align='center'><h1>The Boys</h1></div>\n\n_I'm trying to bring in a bit of inclusion._\n\n**4 New Dark Themes!**\n\n- I can already hear you now, "Riruru Tempest, from 'That Time I Got Reincarnated as a Slime', is not a boy. They are the best genderless slime, get your facts correct." Yeah well....shut up.\n- Next, is one of the S ranked heroes in the 'One Punch Man' universe, Genos.\n- After that, is the smug smile of Yukihira Soma from Shokugeki no Soma. \n- Lastly, I am going to be honest, I haven't seen Haikyu. I just wanted a Indigo & Orange based theme. So here is Hinata Shoyo.\n\n<div style="text-align: center"><img alt="v78 Bois" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v78_bois_medium.png"/></div>\n\n### Other Stuff\n\n- Updated some of Rory, Ram, & Rem's syntax highlighting colors to be more usable.\n- Update tree drag-and-drop colorings to be themed.\n- Better GO language syntax highlighting support.\n- Small Stickers no longer stay in dialog windows for non-Doki look and feels.\n- Discreet mode is now toggleable from the settings menu.\n`
  },
  {
    version: '74.2-1.0.5',
    changes: `- Fixed issue with multiple background images displaying over the update notification when the Doki Theme's wallpaper is activated ([#499](https://github.com/doki-theme/doki-theme-jetbrains/issues/499))`
  },
  {
    version: '74.2-1.0.4',
    changes: `- Better Cucumber & Gherkin support\n- Enhanced [Quick Documentation](https://www.jetbrains.com/help/idea/2021.3/documentation-tool-window.html) a bit.\n- Darkened Nino's Theme some, Lightened Raphtalia's accent color a bit, and made Yukino's unused color more usable.\n`,
    released: true,
  },
  {
    version: '74.1-1.0.3',
    changes: `- Fixed IDE performance issue when the Doki Theme & the [SSV Normandy Progress Bar](https://plugins.jetbrains.com/plugin/12025-ssv-normandy-progress-bar/versions/stable/143942?preview=true) are installed.\n- Fixed reported issue when stickers are turned off, and dimension has a width & height of 0. `
  },
  {
    version: '74.1-1.0.2',
    changes: `## v74.1-1.0.2\n- Fixed issue when sticker is turned off and window is resized, or when project starts. Thank you for all who reported the issue! ([#489](https://github.com/doki-theme/doki-theme-jetbrains/issues/489))\n- Increased usability of showing code coverage from tests in the editor.\n\n---\n`,
    released: true
  },
  {
    version: '74.1-1.0.0',
    changes: `## Synapse break. Vanishment, this world!\n\n**4 New Dark Themes!**\n\n- Decimate errors in the code alongside the Wicked Lord Shingan. Let your inner fantasies go rampant with Rikka Takanashi from: "Love, Chuunibyou, and Other Delusions". \n- It is comfy time! Don't let feature requests stress you out, because you can now code with Nadeshiko from Yuru Camp. \n- A Certain Scientific RailGun go: bzzzzzzt. Zap bugs out of existence with the electromaster Mikoto Misaka.\n- Raccoon + Tanuki = one really cute cinnamon bun. Enjoy your time coding with Raphtalia from: "Rising of the Shield Hero."\n\n<div style="text-align: center"><img alt="v74 girls" style="max-width: 700px; border-radius: 0.5rem" src="https://doki.assets.unthrottled.io/misc/v74_girls_medium.png"/></div>\n\n### Other Stuff\n\n- Updated Syntax Highlight & Look and Feel changes for the following legacy themes: Ibuki Dark, Astolfo, Aqua, Natsuki Light, Hatsune Miku, Christmas Chocola, Emilia Dark, Beatrice, Ram, and Rem.\n- Added 2022.1 build support.\n- Increased the usability of the Search Highlight for light themes ([#485](https://github.com/doki-theme/doki-theme-jetbrains/issues/485)).\n- Fixed sticker re-positioning when you resize your window ([#482](https://github.com/doki-theme/doki-theme-jetbrains/issues/482)).`,
    released: true,
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
