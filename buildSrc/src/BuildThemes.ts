import {
  BaseAppDokiThemeDefinition,
  constructNamedColorTemplate,
  DokiThemeDefinitions,
  evaluateTemplates,
  MasterDokiThemeDefinition,
  resolveColor,
  resolvePaths,
  StringDictionary,
} from "doki-build-source";

import omit from "lodash/omit";

type AppDokiThemeDefinition = BaseAppDokiThemeDefinition;

import fs from "fs";

import path from "path";

import {navLinks} from '../../src/lib/Constants';
import {changes} from '../../src/lib/JetBrainsProductUpdate';

const { repoDirectory, masterThemeDefinitionDirectoryPath } =
  resolvePaths(__dirname);

// todo: dis
type DokiThemeHome = {
  [k: string]: any;
};

function buildTemplateVariables(
  dokiThemeDefinition: MasterDokiThemeDefinition,
  masterTemplateDefinitions: DokiThemeDefinitions,
  dokiThemeAppDefinition: AppDokiThemeDefinition
): DokiThemeHome {
  const namedColors: StringDictionary<string> = constructNamedColorTemplate(
    dokiThemeDefinition,
    masterTemplateDefinitions
  );
  const colorsOverride = dokiThemeAppDefinition?.colors || {};
  const cleanedColors = Object.entries(namedColors).reduce(
    (accum, [colorName, colorValue]) => ({
      ...accum,
      [colorName]: colorValue,
    }),
    {}
  );
  const namedColorsWithOverrides = {
    ...cleanedColors,
    ...colorsOverride,
    editorAccentColor:
      dokiThemeDefinition.overrides?.editorScheme?.colors?.accentColor ||
      dokiThemeDefinition.colors.accentColor,
  };
  return Object.entries<string>(namedColorsWithOverrides).reduce(
    (accum, [colorName, colorValue]) => ({
      ...accum,
      [colorName]: resolveColor(colorValue, namedColorsWithOverrides),
    }),
    {}
  );
}

function buildCSSVars(colors: StringDictionary<string>) {
  return `html {--foreground-color: ${colors.foregroundColor};
    --button-color: ${colors.selectionBackground};
    --button-font: ${colors.selectionForeground};
    --accent-color: ${colors.accentColor};
    --editor-accent-color: ${colors.editorAccentColor};
    --info-foreground: ${colors.infoForeground};
    --string-color: ${colors.stringColor};
    --accent-color-transparent: ${colors.accentColor}88;
    --selection-foreground: ${colors.selectionForeground};
    --selection-background: ${colors.selectionBackground};
    --link-color: ${colors.linkColor || colors.accentColor};
    --ansi-cyan: ${colors['terminal.ansiCyan']};
    --ansi-blue: ${colors['terminal.ansiBlue']};
    --ansi-yellow: ${colors['terminal.ansiYellow']};
    --ansi-magenta: ${colors['terminal.ansiMagenta']};
    --ansi-green: ${colors['terminal.ansiGreen']};
    --base-background: ${colors.baseBackground};
    --header-color: ${colors.headerColor};}`
}

function createDokiTheme(
  masterThemeDefinitionPath: string,
  masterThemeDefinition: MasterDokiThemeDefinition,
  appTemplateDefinitions: DokiThemeDefinitions,
  appThemeDefinition: AppDokiThemeDefinition,
  masterTemplateDefinitions: DokiThemeDefinitions
) {
  try {
    return {
      path: masterThemeDefinitionPath,
      definition: masterThemeDefinition,
      stickers: getStickers(masterThemeDefinition, masterThemeDefinitionPath),
      templateVariables: buildTemplateVariables(
        masterThemeDefinition,
        masterTemplateDefinitions,
        appThemeDefinition
      ),
      theme: {},
      appThemeDefinition: appThemeDefinition,
    };
  } catch (e) {
    throw new Error(
      `Unable to build ${masterThemeDefinition.name}'s theme for reasons ${e}`
    );
  }
}

function resolveStickerPath(themeDefinitionPath: string, sticker: string): string {
  const stickerPath = path.resolve(
    path.resolve(themeDefinitionPath, ".."),
    sticker
  );
  return stickerPath.substr(
    masterThemeDefinitionDirectoryPath.length + "/definitions".length
  );
}

const getStickers = (
  dokiDefinition: MasterDokiThemeDefinition,
  themePath: string
) => {
  // const secondary =
  //   dokiDefinition.stickers.secondary || dokiDefinition.stickers.normal;
  return {
    default: {
      path: resolveStickerPath(themePath, dokiDefinition.stickers.default.name)
      .replace(/\\/g,"/"),
      name: dokiDefinition.stickers.default.name,
    },
    // ...(secondary
    //   ? {
    //       secondary: {
    //         path: resolveStickerPath(themePath, secondary),
    //         name: secondary,
    //       },
    //     }
    //   : {}),
  };
};

console.log("Preparing to generate themes.");

const DEFAULT_THEME = "e55e70ea-454b-47ef-9270-d46390dd2769";

evaluateTemplates(
  {
    appName: "home",
    currentWorkingDirectory: __dirname,
  },
  createDokiTheme
)
  .then((dokiThemes) => {
    const themeDefinitions = dokiThemes
      .map((dokiTheme) => {
        const dokiDefinition = dokiTheme.definition;
        return {
          information: {
            id: dokiDefinition.id,
            name: dokiDefinition.name,
            displayName: dokiDefinition.displayName,
            dark: dokiDefinition.dark,
          },
          colors: {
            constantColor: dokiTheme.templateVariables.constantColor,
            caretRow: dokiTheme.templateVariables.caretRow,
            infoForeground: dokiTheme.templateVariables.infoForeground,
            baseIconColor: dokiTheme.templateVariables.baseIconColor,
            selectionForeground: dokiTheme.templateVariables.selectionForeground,
            headerColor: dokiTheme.templateVariables.headerColor,
            baseBackground: dokiTheme.templateVariables.baseBackground,
            borderColor: dokiTheme.templateVariables.borderColor,
            buttonColor: dokiTheme.templateVariables.buttonColor,
            selectionBackground: dokiTheme.templateVariables.selectionBackground,
            buttonFont: dokiTheme.templateVariables.buttonFont,
            foregroundColor: dokiTheme.templateVariables.foregroundColor,
            highlightColor: dokiTheme.templateVariables.highlightColor,
            accentColor: dokiTheme.templateVariables.accentColor,
            accentColorTransparent: dokiTheme.templateVariables.accentColorTransparent,
            editorAccentColor: dokiTheme.templateVariables.editorAccentColor,
            linkColor: dokiTheme.templateVariables.linkColor,
            accentContrastColor: dokiTheme.templateVariables.accentContrastColor,
            codeBlock: dokiTheme.templateVariables.codeBlock,
            textEditorBackground: dokiTheme.templateVariables.textEditorBackground,
            classNameColor: dokiTheme.templateVariables.classNameColor,
            htmlTagColor: dokiTheme.templateVariables.htmlTagColor,
            stringColor: dokiTheme.templateVariables.stringColor,
            keyColor: dokiTheme.templateVariables.keyColor,
            keywordColor: dokiTheme.templateVariables.keywordColor,
            "terminal.ansiCyan": dokiTheme.templateVariables["terminal.ansiCyan"],
            "terminal.ansiYellow": dokiTheme.templateVariables["terminal.ansiYellow"],
            "terminal.ansiMagenta": dokiTheme.templateVariables["terminal.ansiMagenta"],
            "terminal.ansiGreen": dokiTheme.templateVariables["terminal.ansiGreen"],
            "terminal.ansiBlue": dokiTheme.templateVariables["terminal.ansiBlue"],
            ...(dokiTheme.templateVariables.iconContrastColor ?
              { iconContrastColor: dokiTheme.templateVariables.iconContrastColor } : {})
          },
          stickers: dokiTheme.stickers,
          backgrounds: dokiDefinition.stickers,
        };
      });
    // write things for extension
    const dokiThemeDefinitions = themeDefinitions
      .reduce((accum: StringDictionary<any>, definition) => {
        accum[definition.information.id] = definition;
        return accum;
      }, {});

    const finalDokiDefinitions = JSON.stringify(dokiThemeDefinitions);
    fs.writeFileSync(
      path.resolve(repoDirectory,
        "src", "lib", "DefaultDokiThemeDefinition.ts"),
      `export default ${JSON.stringify(
        { [DEFAULT_THEME]: dokiThemeDefinitions[DEFAULT_THEME] },
      )
      };`
    );
    fs.writeFileSync(
      path.resolve(repoDirectory,
        "src", "lib", "DokiThemeDefinitions.ts"),
        `export default ${finalDokiDefinitions};`
    );
    fs.writeFileSync(
      path.resolve(repoDirectory,
        "src", "lib", "DokiThemeDefinitionsLite.ts"),
        `export default ${
          JSON.stringify(dokiThemes.reduce((accum: StringDictionary<any>, dokiTheme)=> {
              accum[dokiTheme.definition.id] = {
                a: dokiTheme.templateVariables.accentColor,
                ...(dokiTheme.templateVariables.iconContrastColor ?
                  { b: dokiTheme.templateVariables.iconContrastColor } : {})
              }
              return accum;
          }, {})
          )
        };`
    );

    const defaultTheme =
    themeDefinitions.find(dokiTheme => dokiTheme.information.id === DEFAULT_THEME)!!;

    fs.writeFileSync(
      path.resolve(repoDirectory,
        "static", "initial-styles", `default.css`),
      buildCSSVars(defaultTheme.colors)
    );

    themeDefinitions.forEach(dokiTheme => {
      fs.writeFileSync(
        path.resolve(repoDirectory,
          "static", "initial-styles", `${dokiTheme.information.id}.css`),
        buildCSSVars(dokiTheme.colors)
      );
    });

    themeDefinitions.forEach(themeDef => {
      const themeDefAsString = JSON.stringify(themeDef);
      fs.writeFileSync(
        path.resolve(repoDirectory,
          "static", "themes", `${themeDef.information.id}.json`),
        themeDefAsString
      );
    });

    // write stuff for sveltekit build
    fs.writeFileSync(
      path.resolve(
        repoDirectory, "routes.js"
      ),
      `export default ${JSON.stringify(
        navLinks.map(nav => nav.path)
        .concat(changes.map(change => `/products/jetbrains/updates/` + change.version))
      )};`
    )

  })
  .then(() => {
    console.log("Theme Generation Complete!");
  });
