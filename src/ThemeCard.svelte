<script lang="ts">
  import type { DokiTheme } from "./Types";
  import { currentTheme } from "./ThemeStore";

  export let dokiTheme: DokiTheme;

  // TODO: Smallify all the stickers
</script>

<div
  style={`
  --highlight-color: ${dokiTheme.colors.highlightColor};
  --accent-color: ${dokiTheme.colors.accentColor};
  --html-tag-color: ${dokiTheme.colors.htmlTagColor};
  --editor-accent-color: ${dokiTheme.colors.editorAccentColor};
  --keyword-color: ${dokiTheme.colors.keywordColor};
  --string-color: ${dokiTheme.colors.stringColor};
  --key-color: ${dokiTheme.colors.keyColor};
  --class-name-color: ${dokiTheme.colors.classNameColor};
  --constant-color: ${dokiTheme.colors.constantColor};
  --foreground-color: ${dokiTheme.colors.foregroundColor};
  `}
  class="code-container"
  on:mouseup={() => currentTheme.setTheme(dokiTheme.information.id)}
>
  <div
    class="window"
    style={`border: 1px solid ${dokiTheme.colors.borderColor}; 
    --custom-hover: ${dokiTheme.colors.accentColorTransparent};
  ${
    $currentTheme.information.id == dokiTheme.information.id
      ? "box-shadow: 0px 0px 20px" + dokiTheme.colors.accentColorTransparent
      : ""
  }`}
  >
    <div
      class="titlebar"
      style={`background-color: ${dokiTheme.colors.headerColor};
    color: ${dokiTheme.colors.infoForeground}; 
    border-top: 1px solid ${dokiTheme.colors.borderColor};
    border-bottom: 1px solid ${dokiTheme.colors.borderColor};`}
    >
      <div class="buttons">
        <div class="close">
          <a class="closebutton"><span><strong>x</strong></span></a>
        </div>
        <div class="minimize">
          <a class="minimizebutton"><span><strong>&ndash;</strong></span></a>
        </div>
        <div class="zoom">
          <a class="zoombutton"><span><strong>+</strong></span></a>
        </div>
      </div>
      {dokiTheme.information.name}
    </div>
    <div
      class="content"
      style={`background-color: ${dokiTheme.colors.textEditorBackground};
      color: ${dokiTheme.colors.foregroundColor}`}
    >
      <div class="tabs">
        <div class="tab active">DokiThemePreview.svelte</div>
        <div class="tab">package.json</div>
      </div>
      <div class="code">
         <div><span>&lt;</span><span class="html-tag-color">script</span> <span class="key-color italic">lang</span><span>=</span><span class="string-color">&quot;ts&quot;</span><span>&gt;</span> </div>
         <div style="margin-left: 1rem"><span class="keyword-color">import type</span> <span>&lbrace;</span> <span>DokiTheme</span> <span>&rbrace;</span> <span class="keyword-color">from</span> <span class="string-color">&quot;./Types&quot;;</span></div>
         <div style="margin-left: 1rem"><span class="keyword-color">export let</span> <span>dokiTheme:</span> <span class="key-color">DokiTheme</span><span>;</span> <span>&lt;/</span><span class="html-tag-color">script</span><span>&gt;</span></div>
         <div><span>&lt;</span><span class="html-tag-color">div</span> <span class="key-color"></span><span class="editor-accent-color italic">class</span><span>=</span><span class="string-color">&quot;sticker-container&quot;<span>&gt;</span> </div>
         <div><span>&lt;</span><span class="html-tag-color">img</span></div>
         <div style="margin-left: 1rem"><span class="editor-accent-color italic">class</span><span>=</span><span class="string-color">&quot;sticker&quot;</span><br/></div>
         <div style="margin-left: 1rem"><span class="editor-accent-color italic">alt</span><span>=</span><span>&lbrace;</span><span class="string-color">`</span><span>$</span><span>&lbrace;</span><span class="key-color">dokiTheme</span><span>.</span><span class="key-color">information</span><span class="foreground-color">.name</span><span>&rbrace;</span><span class="string-color">&#39;s Sticker`</span><span>&rbrace;</span></div>
         <div style="margin-left: 1rem"><span class="editor-accent-color italic">src</span><span>=</span><span>&lbrace;</span><span class="key-color">dokiTheme</span><span>.</span><span class="key-color">stickers</span><span>.</span><span class="key-color">default</span><span class="foreground-color">.path</span><span>&rbrace;</span><span>/</span><span>&gt;</span> </div>
         <div><span>&lt;/</span><span class="html-tag-color">div</span><span>&gt;</span></div>
         <div><span>&lt;</span><span class="html-tag-color">style</span><span>&gt;</span> </div>
         <div style="margin-left: 1rem"><span class="editor-accent-color italic">:root</span> <span>&lbrace;</span> <span class="class-name-color">--code-window-height</span><span>:</span> <span class="constant-color">400</span><span class="keyword-color">px</span><span>;</span> <span>&rbrace;</span></div>
         <div style="margin-left: 1rem"><span class="editor-accent-color italic">.sticker</span> <span>&lbrace;</span> </div>
         <div style="margin-left: 2rem"><span class="key-color">max-height</span><span>:</span> <span class="constant-color">150</span><span class="keyword-color">px</span><span>;</span></div>
         <div style="margin-left: 2rem"><span class="key-color">max-width</span><span>:</span> <span class="constant-color">150</span><span class="keyword-color">px</span><span>;</span> </div>
         <div style="margin-left: 1rem"><span>&rbrace;</span></div>
         <div><span>&lt;/</span><span class="html-tag-color">style</span><span>&gt;</span></div>
        <div class="sticker-container">
          <img
            class={"sticker"}
            alt={`${dokiTheme.information.name}'s Sticker`}
            src={`https://doki.assets.unthrottled.io/stickers/smol${dokiTheme.stickers.default.path}`}
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --code-window-height: 450px;
  }

  .italic {
    font-style: italic;
  }

  .foreground-color {
    color: var(--foreground-color);
  }

  .highlight-color {
    color: var(--highlight-color);
  }
  .accent-color {
    color: var(--accent-color);
  }
  .html-tag-color {
    color: var(--html-tag-color);
  }
  .editor-accent-color {
    color: var(--editor-accent-color);
  }
  .keyword-color {
    color: var(--keyword-color);
  }
  .string-color {
    color: var(--string-color);
  }
  .key-color {
    color: var(--key-color);
  }
  .class-name-color {
    color: var(--class-name-color);
  }
  .constant-color {
    color: var(--constant-color);
  }

  .tabs {
    display: flex;
  }

  .active {
    background-color: var(--highlight-color);
    border-bottom: 2px solid var(--accent-color);
  }

  .tab {
    padding: 0.5rem 1rem;
  }

  .tab::after {
    content: "x";
    position: relative;
    margin-left: 1rem;
  }

  .sticker-container {
    position: absolute;
    right: 7px;
    bottom: 5px;
  }
  .sticker {
    max-height: 150px;
    max-width: 150px;
  }

  .code-container {
    height: var(--code-window-height);
  }

  a {
    text-decoration: none;
  }

  span {
    line-height: 9px;
    vertical-align: 50%;
  }

  .window {
    cursor: pointer;
    border-radius: 6px;
    height: var(--code-window-height);
    display: flex;
    flex-direction: column;
  }

  .window:hover {
    box-shadow: 0px 0px 20px var(--custom-hover);
  }

  .titlebar {
    font-size: 11pt;
    line-height: 20px;
    text-align: center;
    width: 100%;
    height: 20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    cursor: default;
    background: var(--theme-wallpaper);
    background-size: cover;
  }

  .buttons {
    padding-left: 8px;
    padding-top: 3px;
    float: left;
    line-height: 0px;
  }

  .buttons:hover a {
    visibility: visible;
  }

  .close {
    background: #ff5c5c;
    font-size: 9pt;
    width: 11px;
    height: 11px;
    border: 1px solid #e33e41;
    border-radius: 50%;
    display: inline-block;
  }

  .close:active {
    background: #c14645;
    border: 1px solid #b03537;
  }

  .close:active .closebutton {
    color: #4e0002;
  }

  .closebutton {
    color: #820005;
    visibility: hidden;
    cursor: default;
  }

  .minimize {
    background: #ffbd4c;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 4px;
    width: 11px;
    height: 11px;
    border: 1px solid #e09e3e;
    border-radius: 50%;
    display: inline-block;
  }

  .minimize:active {
    background: #c08e38;
    border: 1px solid #af7c33;
  }

  .minimize:active .minimizebutton {
    color: #5a2607;
  }

  .minimizebutton {
    color: #9a5518;
    visibility: hidden;
    cursor: default;
  }

  .zoom {
    background: #00ca56;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 6px;
    width: 11px;
    height: 11px;
    border: 1px solid #14ae46;
    border-radius: 50%;
    display: inline-block;
  }

  .zoom:active {
    background: #029740;
    border: 1px solid #128435;
  }

  .zoom:active .zoombutton {
    color: #003107;
  }

  .zoombutton {
    color: #006519;
    visibility: hidden;
    cursor: default;
  }

  .code {
    padding: 0.5rem;
    font-family: "Victor Mono", monospace;
    display: grid;
    white-space: pre;
  }

  .content {
    flex-grow: 1;
    background: var(--theme-wallpaper);
    background-size: cover;
    position: relative;
  }

  /* window END */

  /* content BEGIN */

  h3 {
    margin-top: 0px;
  }

  /* content END */
</style>
