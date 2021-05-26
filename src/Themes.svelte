<script>
  import DokiThemeDefinitions from "./DokiThemeDefinitions";

  const dokiThemes = Object.values(DokiThemeDefinitions).sort((a, b) =>
    a.information.name.localeCompare(b.information.name)
  );
</script>

<div class="container">
  {#each dokiThemes as dokiTheme}
    <div class="theme">{dokiTheme.information.name}</div>
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
