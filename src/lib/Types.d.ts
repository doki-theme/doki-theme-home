export interface DokiTheme {
  information: Information;
  colors: Colors;
  stickers: Stickers;
  backgrounds?: Backgrounds | null;
}

export interface DokiThemeLite {
  a: string;
  b?: string;
}

export interface Information {
  id: string;
  name: string;
  displayName: string;
  dark: boolean;
}

export interface Colors {
  "terminal.ansiBlue": string;
  "terminal.ansiCyan": string;
  "terminal.ansiGreen": string;
  "terminal.ansiMagenta": string;
  "terminal.ansiYellow": string;
  accentColor: string;
  accentColorTransparent: string;
  accentContrastColor?: string;
  baseBackground: string;
  baseIconColor: string;
  borderColor: string;
  buttonColor: string;
  buttonFont: string;
  caretRow: string;
  classNameColor: string;
  codeBlock: string;
  constantColor: string;
  dokiLogoAccent: string;
  dokiLogoAccentContrast: string;
  editorAccentColor: string;
  foregroundColor: string;
  foregroundColorEditor: string;
  headerColor: string;
  highlightColor: string;
  htmlTagColor: string;
  iconBlendCompliment: string;
  iconContrastColor?: string;
  infoForeground: string;
  keyColor: string;
  keywordColor: string;
  linkColor?: string;
  selectionBackground: string;
  selectionForeground: string;
  stringColor: string
  textEditorBackground: string;
}

export interface Stickers {
  default: DefaultOrSecondary;
  secondary?: DefaultOrSecondary;
}

export interface DefaultOrSecondary {
  path: string;
  name: string;
}

export interface Backgrounds {
  default?: DefaultOrSecondary2 | null;
  secondary?: DefaultOrSecondary2 | null;
}

export interface DefaultOrSecondary2 {
  anchor: string;
  name: string;
  opacity: number;
}
