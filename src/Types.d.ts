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
  author: string;
  group: string;
  stickers: Stickers1;
  product?: string | null;
  meta?: Meta | null;
}
export interface Stickers1 {
  default: string;
  secondary?: string | null;
  normal?: string | null;
}
export interface Meta {
  isVivid: string;
}
export interface Colors {
  constantColor: string;
  parameterColor: string;
  comments: string;
  errorColor: string;
  "terminal.ansiRed": string;
  "terminal.ansiGreen": string;
  "terminal.ansiYellow": string;
  "terminal.ansiBlue": string;
  "terminal.ansiMagenta": string;
  "terminal.ansiCyan": string;
  ghostColor: string;
  tagColor: string;
  lineNumberColor: string;
  foregroundColorEditor: string;
  unusedColor: string;
  "diff.deleted": string;
  "diff.conflict": string;
  "diff.inserted": string;
  "diff.modified": string;
  caretRow: string;
  infoForeground: string;
  completionWindowBackground?: string | null;
  baseIconColor: string;
  contrastColor: string;
  nonProjectFileScopeColor: string;
  secondaryBackground: string;
  selectionForeground: string;
  inactiveBackground?: string | null;
  inactiveBackgroundDarker?: string | null;
  headerColor: string;
  baseBackground: string;
  borderColor: string;
  buttonColor: string;
  selectionInactive: string;
  identifierHighlight: string;
  selectionBackground: string;
  selectionBackgroundTransparent?: string | null;
  buttonFont: string;
  foregroundColor: string;
  startColor: string;
  highlightColor: string;
  disabledColor: string;
  accentColorTransparent: string;
  accentColorLessTransparent: string;
  accentColorMoreTransparent: string;
  accentColor: string;
  editorAccentColor: string;
  linkColor?: string;
  accentContrastColor: string;
  stopColor: string;
  testScopeColor: string;
  popupMask: string;
  codeBlock: string;
  textEditorBackground: string;
  foldedTextBackground: string;
  classNameColor: string;
  htmlTagColor: string;
  stringColor: string;
  keyColor: string;
  keywordColor: string;
  "diff.added"?: string | null;
  "diff.changed"?: string | null;
  secondaryAccentColor?: string | null;
  iconContrastColor?: string | null;
  constantsColor?: string | null;
  accentColorOverride?: string | null;
  accentColorOverrideTransparent?: string | null;
  accentColorOverrideMoreTransparent?: string | null;
  darkerAccentColor?: string | null;
  accentColorOverrideLessTransparent?: string | null;
  selectionInactiveTransparent?: string | null;
  accentColorBrighter?: string | null;
  accentColorDarker?: string | null;
  accentColorSecondaryTransparent?: string | null;
  accentColorSecondaryLessTransparent?: string | null;
  accentColorSecondaryMoreTransparent?: string | null;
  accentColorSecondary?: string | null;
}
export interface Stickers {
  default: DefaultOrSecondary;
  secondary?: DefaultOrSecondary1 | null;
}
export interface DefaultOrSecondary {
  path: string;
  name: string;
}
export interface DefaultOrSecondary1 {
  path: string;
  name: string;
}
export interface Backgrounds {
  default?: DefaultOrSecondary2 | null;
  secondary?: DefaultOrSecondary3 | null;
}
export interface DefaultOrSecondary2 {
  anchor: string;
}
export interface DefaultOrSecondary3 {
  anchor: string;
}
