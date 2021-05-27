<script lang="ts">
  import type { DokiTheme } from "./Types";
  export let dokiTheme: DokiTheme;
</script>
<div class="sticker-container">
  <img
    class={"sticker"}
    alt={`${dokiTheme.information.name}'s Sticker`}
    src={dokiTheme.stickers.default.path}
  />
</div>
<style>
  :root {
    --code-window-height: 400px;
  }
  .sticker {
    max-height: 150px;
    max-width: 150px;
  }
</style>
