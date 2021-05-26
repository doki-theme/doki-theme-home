<script>
  import DokiThemeDefinitions from "./DokiThemeDefinitions";
import ThemeCard from "./ThemeCard.svelte";

  const dokiThemes = Object.values(DokiThemeDefinitions).sort((a, b) => {
    const aName = (a.information.dark ? "dark" : "light") + a.information.name
    const bName = (b.information.dark ? "dark" : "light") + b.information.name
    return aName.localeCompare(bName)
  }
  );
</script>

<div class="container">
  {#each dokiThemes as dokiTheme}
    <ThemeCard dokiTheme={dokiTheme} />
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto;
  }

  .theme {
    padding: 1rem;
    text-align: center;
  }

</style>
