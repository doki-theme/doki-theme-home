<script>
  import DokiThemeDefinitions from "./DokiThemeDefinitions";
import Footer from "./Footer.svelte";
  import ThemeCard from "./ThemeCard.svelte";

  const dokiThemes = Object.values(DokiThemeDefinitions).sort((a, b) => {
    const aName = (a.information.dark ? "dark" : "light") + a.information.name;
    const bName = (b.information.dark ? "dark" : "light") + b.information.name;
    return aName.localeCompare(bName);
  });

  // TODO: don't load all this stuff at once
</script>

<div style="margin: 0 2rem;">
  <div style="width: 100%; text-align: center">Code Font: <a class="victor-mono-link" href="https://rubjo.github.io/victor-mono/" 
    target="_blank">Victor Mono</a></div>
  <div class="container">
    {#each dokiThemes as dokiTheme}
      <ThemeCard {dokiTheme} />
    {/each}
  </div>
</div>

<Footer/>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    margin: 1rem auto;
    align-items: center;
    max-width: 1200px;
  }
</style>
