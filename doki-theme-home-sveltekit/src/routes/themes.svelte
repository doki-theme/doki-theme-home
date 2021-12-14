<script lang='ts'>
	import DokiThemeDefinitions from '$lib/DokiThemeDefinitions';
	import Footer from '$lib/Footer.svelte';
	import ThemeCard from '$lib/ThemeCard.svelte';
	import type { DokiTheme } from '$lib/Types';

	const dokiThemes: DokiTheme[] = Object.values(DokiThemeDefinitions).sort((a, b) => {
		const aName = (a.information.dark ? 'dark' : 'light') + a.information.name;
		const bName = (b.information.dark ? 'dark' : 'light') + b.information.name;
		return aName.localeCompare(bName);
	});
</script>

<div style="margin: 0 2rem;">
	<div style="width: 100%; text-align: center">
		Code Font: <a class="victor-mono-link" href="https://rubjo.github.io/victor-mono/"
			>Victor Mono</a
		>
	</div>
	<div class="container">
		{#each dokiThemes as dokiTheme}
			<ThemeCard {dokiTheme} />
		{/each}
	</div>
</div>

<Footer />

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
