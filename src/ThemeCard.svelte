<script lang="ts">
  import type { DokiTheme } from "./Types";
  import { currentTheme } from "./ThemeStore";

  export let dokiTheme: DokiTheme;

  // TODO: Smallify all the stickers
</script>

<div
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
          <!-- close button link -->
        </div>
        <div class="minimize">
          <a class="minimizebutton"><span><strong>&ndash;</strong></span></a>
          <!-- minimize button link -->
        </div>
        <div class="zoom">
          <a class="zoombutton"><span><strong>+</strong></span></a>
          <!-- zoom button link -->
        </div>
      </div>
      {dokiTheme.information.name}
      <!-- window title -->
    </div>
    <div
      class="content"
      style={`background-color: ${dokiTheme.colors.textEditorBackground};
      color: ${dokiTheme.colors.foregroundColor}`}
    >
      <h3>Hey! What's up?</h3>
      I'm a simple OS X Yosemite style window.
      <!-- window content -->

      <div class="sticker-container">
        <img
          class={"sticker"}
          alt={`${dokiTheme.information.name}'s Sticker`}
          src={`https://doki.assets.unthrottled.io/stickers/jetbrains/v2${dokiTheme.stickers.default.path}`}
        />
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --code-window-height: 400px;
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

  .content {
    padding: 10px;
    flex-grow: 1;
    background: var(--theme-wallpaper);
    background-size: cover;
    position:relative;
  }

  /* window END */

  /* content BEGIN */

  h3 {
    margin-top: 0px;
  }

  /* content END */
</style>
