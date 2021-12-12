<script lang="ts">
	import Background from '$lib/Background.svelte';
	import ContentContainer from '$lib/ContentContainer.svelte';
	import Header from '$lib/Header.svelte';
	import HeartFairy from '$lib/HeartFairy.svelte';
	import { browser } from '$app/env';
	import { currentTheme } from '$lib/ThemeStore';
	import type { DokiTheme } from '$lib/Types';
	import { themeFavicon } from '$lib/ThemedFavicon';

	const themeSite = (dokiTheme: DokiTheme) => {
		if (browser) {
			themeFavicon(dokiTheme);

			document.documentElement.style.setProperty(
				'--foreground-color',
				dokiTheme.colors.foregroundColor
			);

			document.documentElement.style.setProperty(
				'--button-color',
				dokiTheme.colors.selectionBackground
			);

			document.documentElement.style.setProperty(
				'--button-font',
				dokiTheme.colors.selectionForeground
			);

			document.documentElement.style.setProperty('--accent-color', dokiTheme.colors.accentColor);

			document.documentElement.style.setProperty(
				'--editor-accent-color',
				dokiTheme.colors.editorAccentColor
			);

			document.documentElement.style.setProperty(
				'--info-foreground',
				dokiTheme.colors.infoForeground
			);

			document.documentElement.style.setProperty('--string-color', dokiTheme.colors.stringColor);

			document.documentElement.style.setProperty(
				'--accent-color-transparent',
				`${dokiTheme.colors.accentColor}88`
			);
			document.documentElement.style.setProperty(
				'--selection-foreground',
				`${dokiTheme.colors.selectionForeground}`
			);

			document.documentElement.style.setProperty(
				'--selection-background',
				`${dokiTheme.colors.selectionBackground}`
			);

			document.documentElement.style.setProperty(
				'--link-color',
				`${dokiTheme.colors.linkColor || dokiTheme.colors.accentColor}`
			);

			document.documentElement.style.setProperty(
				'--ansi-cyan',
				`${dokiTheme.colors['terminal.ansiCyan']}`
			);

			document.documentElement.style.setProperty(
				'--ansi-blue',
				`${dokiTheme.colors['terminal.ansiBlue']}`
			);

			document.documentElement.style.setProperty(
				'--ansi-yellow',
				`${dokiTheme.colors['terminal.ansiYellow']}`
			);

			document.documentElement.style.setProperty(
				'--ansi-magenta',
				`${dokiTheme.colors['terminal.ansiMagenta']}`
			);

			document.documentElement.style.setProperty(
				'--ansi-green',
				`${dokiTheme.colors['terminal.ansiGreen']}`
			);

			document.documentElement.style.setProperty(
				'--base-background',
				$currentTheme.colors.baseBackground
			);

			document.documentElement.style.setProperty(
				'--header-color',
				$currentTheme.colors.headerColor
			);

			document.documentElement.style.setProperty(
				'--theme-wallpaper',
				`url("https://doki.assets.unthrottled.io/backgrounds/wallpapers/transparent/${
					$currentTheme.stickers.default.name
				}") ${$currentTheme.backgrounds?.default?.anchor || 'center'} fixed`
			);
		}
	};

	$: themeSite($currentTheme);
</script>

<main>
	<Background />
	<HeartFairy />
	<Header />
	<ContentContainer>
		<slot />
	</ContentContainer>
</main>

<style>
	main {
		color: var(--foreground-color);
		width: 100%;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.route-container {
		width: 100%;
		height: 100%;
		background: none;
	}
</style>
