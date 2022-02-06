<script lang="ts">
	import marked from 'marked';
	import { getChanges } from '$lib/JetBrainsProductUpdate';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';

	const changes = getChanges($page.params.version);
</script>

<div class="content-container">
	<h1>The Doki Theme: JetBrains IDEs</h1>

	<h2>What's new in <code class="info-foreground italic">{$page.params.version}</code> ?</h2>
	<div class="changes">
		{@html marked(changes)}
	</div>

	<p>
		For a full list of changes please see the <a
			href="https://github.com/doki-theme/doki-theme-jetbrains/blob/master/changelog/CHANGELOG.md"
			>changelog</a
		> for more details
	</p>
	<Footer />
	<code style="opacity: 0; font-family: 'Victor Mono'">And his name is John Cena!</code>
</div>

<style>
	.content-container {
		margin: auto;
		text-align: center;
		padding: 1rem;
		max-width: 750px;
	}
	h1 {
		font-weight: 300;
	}
	.changes {
		text-align: left;
	}
</style>
