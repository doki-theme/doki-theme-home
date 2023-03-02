<script lang='ts'>
	import Footer from '$lib/Footer.svelte';
  import DokiThemeIcons from '$lib/DokiThemeIcons';
</script>

<div style="margin: 0 2rem;">
  <div style="width: 100%; text-align: center; margin-bottom: 3rem;">
    <h2><a class="attribution-link" href="https://github.com/doki-theme/doki-theme-icons#attribution-requirements"
    >Attribution Requirements</a
    ></h2>
    <a class="attribution-link" href="https://github.com/doki-theme/doki-theme-icons/blob/main/LICENSE-GRAPHICS"
    >License</a
    >
  </div>
	<div class="container">
    {#each DokiThemeIcons as dokiIcon}
      <div class="icon-container" title="{dokiIcon.svgName}">
        {@html dokiIcon.svg}
      </div>
    {/each}
	</div>
</div>

<Footer />

<style>
	.container {
		display: grid;
		grid-template-columns: auto auto auto auto;
		grid-gap: 1rem;
		margin: 1rem auto;
		align-items: center;
		max-width: 1200px;
    justify-items: center;
	}
  .icon-container {
    width: 50px;
    text-align: center;
  }
</style>
