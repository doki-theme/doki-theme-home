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

const fs = require("fs");

const path = require("path");

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

function resolveStickerPath(themeDefinitionPath: string, sticker: string) {
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
      path: resolveStickerPath(themePath, dokiDefinition.stickers.default),
      name: dokiDefinition.stickers.default,
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

evaluateTemplates(
  {
    appName: "home",
    currentWorkingDirectory: __dirname,
  },
  createDokiTheme
)
  .then((dokiThemes) => {
    // write things for extension
    const dokiThemeDefinitions = dokiThemes
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
            accentColorTransparent:
              dokiTheme.templateVariables.accentColorTransparent,
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
          },
          stickers: dokiTheme.stickers,
          backgrounds: dokiTheme.appThemeDefinition.backgrounds,
        };
      })
      .reduce((accum: StringDictionary<any>, definition) => {
        accum[definition.information.id] = definition;
        return accum;
      }, {});
    const finalDokiDefinitions = JSON.stringify(dokiThemeDefinitions);
    fs.writeFileSync(
      path.resolve(repoDirectory, "src", "DokiThemeDefinitions.ts"),
      `export default ${finalDokiDefinitions};`
    );
  })
  .then(() => {
    console.log("Theme Generation Complete!");
  });
