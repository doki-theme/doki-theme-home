<script lang="ts">
  import ContentContainer from "./ContentContainer.svelte";
  import { currentTheme } from "./ThemeStore";
</script>

<ContentContainer>
  <div style="display: flex; justify-content: center;">
    <div>
      <h2>Jetbrains IDEs</h2>
    </div>
    <img
      width="420"
      src="https://raw.githubusercontent.com/doki-theme/doki-theme-jetbrains/master/assets/screenshots/franxx/zero_two_dark_code.png"
    />
  </div>
  <div style="display: flex; justify-content: center;">
    <img
      width="420"
      src="https://raw.githubusercontent.com/doki-theme/doki-theme-vscode/master/screenshots/franxx/zero_two_dark_code.png"
    />
    <div>
      <h2>Visual Studio Code</h2>
    </div>
  </div>
  <div style="display: flex; justify-content: center;">
    <div>
      <h2>Hyper.js & Vim</h2>
    </div>
    <img
      width="420"
      src="https://user-images.githubusercontent.com/15972415/119995635-688b7600-bf93-11eb-8a05-fb2302343396.png"
    />
  </div>
  <div>
    <h2>FireFox, Chrome, Edge</h2>
  </div>
  <div>
    <h2>Jupyter Notebook</h2>
  </div>
  <div>
    <h2>GitHub</h2>
  </div>
  <div>
    <h2>Eclipse</h2>
  </div>
</ContentContainer>

<style>
</style>
