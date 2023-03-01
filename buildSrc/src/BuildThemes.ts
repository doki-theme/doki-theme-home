import {
  BaseAppDokiThemeDefinition,
  constructNamedColorTemplate,
  DokiThemeDefinitions,
  evaluateTemplates,
  MasterDokiThemeDefinition,
  resolveColor,
  resolvePaths,
  StringDictionary,
  walkDir,
} from "doki-build-source";

import deepClone from "lodash/cloneDeep";
import xmlParser from "xml2js";
import builder from "xmlbuilder";
import fs from "fs";

import path from "path";

import {navLinks} from '../../common/src/Constants';
import {changes} from '../../common/src/JetBrainsChanges';


type AppDokiThemeDefinition = BaseAppDokiThemeDefinition;

const {repoDirectory, masterThemeDefinitionDirectoryPath} =
  resolvePaths(__dirname);

const iconSourceDir = path.resolve(__dirname, "..", "..", "iconSource");
const iconsDir = path.resolve(iconSourceDir, "icons");
const appTemplatesDirectoryPath = path.resolve(iconSourceDir, 'buildSrc', 'assets', 'templates');
const exportedIconsDir = path.join(iconsDir, "exported");
const oneOffsIconsDir = path.join(iconsDir, "oneOffs");
const iconSourceGeneratedIconsDir = path.join(iconsDir, "generated");


const hexToNamedIconColor: StringDictionary<string> = JSON.parse(fs.readFileSync(
  path.join(appTemplatesDirectoryPath, 'icon.palette.template.json'), {
    encoding: 'utf-8',
  }
))

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

const hexToNamedColorCSSVar = Object.entries(hexToNamedIconColor)
  .reduce<StringDictionary<string>>((accum, [hex, namedColor]) => {
    accum[hex] = `--${toKebabCase(namedColor)}`;
    return accum;
  }, {})


class SVGSupplier {
  constructor(private readonly svgNameToPatho: StringDictionary<string>) {
  }

  async getSVGAsXml(svgName: string): Promise<any> {
    const iconName = svgName;
    const svgPath =
      this.svgNameToPatho[iconName] || path.join(iconSourceGeneratedIconsDir, iconName);
    if (!fs.existsSync(svgPath)) {
      throw new Error(`Hey silly, you forgot to export ${iconName}`);
    }

    return await toXml(
      fs.readFileSync(svgPath, {encoding: "utf-8"})
    )
  }
}

const parser = new xmlParser.Parser({
  explicitChildren: true,
  mergeAttrs: false,
  preserveChildrenOrder: true,
});

const toXml = (xml1: string): Promise<any> => parser.parseStringPromise(xml1);

function constructSVG(root: any, children: any[]) {
  if (!children) {
    return;
  }

  for (const child of children) {
    const childNode = root.ele(child["#name"], child.$ || {});
    constructSVG(childNode, child.$$);
  }
}

function buildXml(workingCopy: any): string {
  const svg = workingCopy.svg;
  const root = builder.create(svg["#name"]);

  Object.entries(svg.$).forEach(([attributeKey, attributeValue]) =>
    root.att(attributeKey, attributeValue)
  );

  constructSVG(root, svg.$$);

  return root.end({pretty: false});
}

function updateIconFill(nonBaseGuts: any) {
  const fillProvider: (color: string) => string =
    (color) => {
      const cssVar = hexToNamedColorCSSVar[color];
      if (cssVar) {
        return `var(${cssVar})`
      }
      return color;
    }
  addAttributes(nonBaseGuts, node => {
    if (node.fill && node.fill !== 'none') {
      node.fill = fillProvider(node.fill);
    }
    if (node.stroke && node.stroke !== 'none') {
      node.stroke = fillProvider(node.stroke)
    }
  });
}

function addAttributes(nonBaseGuts: StringDictionary<any>, attributeProvider: (node: any) => void) {
  if (!nonBaseGuts) {
    return;
  }

  if (!nonBaseGuts.$) {
    nonBaseGuts.$ = {};
  }

  attributeProvider(nonBaseGuts.$);

  (nonBaseGuts.$$ || []).forEach((item: any) => {
    addAttributes(item, attributeProvider);
  });
}


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
  // language=CSS
  return `html {
    --foreground-color: ${colors.foregroundColor};
    --button-color: ${colors.selectionBackground};
    --button-font: ${colors.selectionForeground};
    --accent-color: ${colors.accentColor};
    --editor-accent-color: ${colors.editorAccentColor};
    --info-foreground: ${colors.infoForeground};
    --string-color: ${colors.stringColor};
    --accent-color-transparent: ${colors.accentColor}88;
    --selection-foreground: ${colors.selectionForeground};
    --selection-background: ${colors.selectionBackground};
    --icon-accent: ${colors.iconAccent};
    --icon-accent-compliment: ${colors.iconAccentCompliment};
    --icon-base-blend: ${colors.iconBaseBlend};
    --icon-secondary-blend: ${colors.iconSecondaryBlend};
    --icon-blend-contrast: ${colors.iconBlendContrast};
    --icon-diversification: ${colors.iconDiversification};
    --icon-blend-compliment: ${colors.iconBlendCompliment};
    --link-color: ${colors.linkColor || colors.accentColor};
    --ansi-cyan: ${colors['terminal.ansiCyan']};
    --ansi-blue: ${colors['terminal.ansiBlue']};
    --ansi-yellow: ${colors['terminal.ansiYellow']};
    --ansi-magenta: ${colors['terminal.ansiMagenta']};
    --ansi-green: ${colors['terminal.ansiGreen']};
    --base-background: ${colors.baseBackground};
    --header-color: ${colors.headerColor};
  }`
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
  return {
    default: {
      path: resolveStickerPath(themePath, dokiDefinition.stickers.default.name)
        .replace(/\\/g, "/"),
      name: dokiDefinition.stickers.default.name,
    },
  };
};

console.log("Preparing to generate themes.");

// Zero Two Obsidian
const DEFAULT_THEME = "13adffd9-acbe-47af-8101-fa71269a4c5c";

evaluateTemplates(
  {
    appName: "home",
    currentWorkingDirectory: __dirname,
  },
  createDokiTheme
)
  .then(async (dokiThemes) => {
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
            foregroundColorEditor: dokiTheme.templateVariables.foregroundColorEditor,
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
            dokiLogoAccent: dokiTheme.templateVariables.dokiLogoAccent,
            dokiLogoAccentContrast: dokiTheme.templateVariables.dokiLogoAccentContrast,
            iconAccent: dokiTheme.templateVariables.iconAccent,
            iconAccentCompliment: dokiTheme.templateVariables.iconAccentCompliment,
            iconBaseBlend: dokiTheme.templateVariables.iconBaseBlend,
            iconSecondaryBlend: dokiTheme.templateVariables.iconSecondaryBlend,
            iconBlendContrast: dokiTheme.templateVariables.iconBlendContrast,
            iconBlendCompliment: dokiTheme.templateVariables.iconBlendCompliment,
            iconDiversification: dokiTheme.templateVariables.iconDiversification,
            "terminal.ansiCyan": dokiTheme.templateVariables["terminal.ansiCyan"],
            "terminal.ansiYellow": dokiTheme.templateVariables["terminal.ansiYellow"],
            "terminal.ansiMagenta": dokiTheme.templateVariables["terminal.ansiMagenta"],
            "terminal.ansiGreen": dokiTheme.templateVariables["terminal.ansiGreen"],
            "terminal.ansiBlue": dokiTheme.templateVariables["terminal.ansiBlue"],
            ...(dokiTheme.templateVariables.iconContrastColor ?
              {iconContrastColor: dokiTheme.templateVariables.iconContrastColor} : {})
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
        {[DEFAULT_THEME]: dokiThemeDefinitions[DEFAULT_THEME]},
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
      `export default ${JSON.stringify(dokiThemes.reduce((accum: StringDictionary<any>, dokiTheme) => {
          accum[dokiTheme.definition.id] = {
            a: dokiTheme.templateVariables.dokiLogoAccent,
            b: dokiTheme.templateVariables.dokiLogoAccentContrast,
          }
          return accum;
        }, {})
      )
      };`
    );

    const defaultTheme =
      themeDefinitions.find(dokiTheme => dokiTheme.information.id === DEFAULT_THEME)!;

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
  .then(async () => {
    const icons = await Promise.all([
      walkDir(exportedIconsDir),
      walkDir(oneOffsIconsDir),
    ])
      .then(allIcons => allIcons
        .reduce((accum, next) => accum.concat(next))
        .filter(iconPath => iconPath.endsWith('.svg'))
      );

    const svgNameToPatho = icons.reduce((accum, generatedIconPath) => {
      const svgName = generatedIconPath.substring(generatedIconPath.lastIndexOf(path.sep) + 1);
      accum[svgName] = generatedIconPath;
      return accum;
    }, {} as StringDictionary<string>);
    const svgSupplier = new SVGSupplier(svgNameToPatho);

    const svgNameAndValues = await sequentiallyIterate(
      Object.keys(svgNameToPatho),
      async (svgName) => {
        const svgAsXML = await svgSupplier.getSVGAsXml(svgName);
        const workingCopy = deepClone(svgAsXML);

        updateIconFill(workingCopy.svg);

        return {
          svgName,
          svg: buildXml(workingCopy)
        };
      }
    );

    svgNameAndValues.sort((a, b) => a.svgName.localeCompare(b.svgName));

    fs.writeFileSync(
      path.resolve(repoDirectory,
        "src", "lib", "DokiThemeIcons.ts"),
      `export default ${JSON.stringify(svgNameAndValues)};`
    );
  })
  .then(() => {
    console.log("Theme Generation Complete!");
  });


function sequentiallyIterate<T, R>(items: T[], mapping: (t: T) => Promise<R>): Promise<R[]> {
  return items.reduce(
    (accum: Promise<R[]>, next: T) => accum.then(stuff =>
      mapping(next).then(mapped => {
        stuff.push(mapped);
        return stuff;
      })),
    Promise.resolve<R[]>([])
  )
}