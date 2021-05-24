<script lang="ts">
  import marked from "marked";
  import DokiLogo from "./DokiLogo.svelte";
  import { currentTheme } from "./ThemeStore";

  export let name: string;
  export let description: string;

  $: document.documentElement.style.setProperty(
    "--theme-wallpaper",
    `url("https://doki.assets.unthrottled.io/backgrounds/wallpapers/transparent/${$currentTheme.stickers.default.name}") center fixed`
  );
</script>

<main>
  <DokiLogo />
  <h1>{name}好!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  {@html marked(description)}

  <div style="align: center;">
    <img
      alt="Best Girl"
      src={`https://doki.assets.unthrottled.io/backgrounds/${$currentTheme.stickers.default.name}`}
      height="512"
    />
  </div>
</main>

<style>
  main {
    text-align: center;
    width: 100%;
    height: 100%;
    background: var(--theme-wallpaper);
    background-size: cover;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    margin: 0 auto;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
