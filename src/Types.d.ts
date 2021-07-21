export interface DokiTheme {
  information: Information;
  colors: Colors;
  stickers: Stickers;
  backgrounds?: Backgrounds | null;
}
export interface Information {
  id: string;
  name: string;
  displayName: string;
  dark: boolean;
}
export interface Stickers1 {
  default: string;
}
export interface Meta {
  isVivid: string;
}
export interface Colors {
  constantColor: string;
  caretRow: string;
  infoForeground: string;
  baseIconColor: string;
  selectionForeground: string;
  headerColor: string;
  baseBackground: string;
  borderColor: string;
  buttonColor: string;
  selectionBackground: string;
  buttonFont: string;
  foregroundColor: string;
  highlightColor: string;
  accentColor: string;
  accentColorTransparent: string;
  editorAccentColor: string;
  accentContrastColor?: string;
  linkColor?: string;
  accentContrastColor: string;
  codeBlock: string;
  textEditorBackground: string;
  classNameColor: string;
  htmlTagColor: string;
  stringColor: string;
  keyColor: string;
  keywordColor: string;
  "terminal.ansiCyan": string;
  "terminal.ansiYellow": string;
  "terminal.ansiMagenta": string;
}
export interface Stickers {
  default: DefaultOrSecondary;
}
export interface DefaultOrSecondary {
  path: string;
  name: string;
}
export interface Backgrounds {
  default?: DefaultOrSecondary2 | null;
}
export interface DefaultOrSecondary2 {
  anchor: string;
}
