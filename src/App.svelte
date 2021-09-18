<script>
  import { Router, Route } from "svelte-navigator";
  import Background from "./Background.svelte";
  import Home from "./Home.svelte";
  import HeartFairy from "./HeartFairy.svelte";
  import Header from "./Header.svelte";
  import { currentTheme } from "./ThemeStore";
  import Themes from "./Themes.svelte";
  import Supporters from "./Supporters.svelte";
  import ProductUpdate from "./ProductUpdate.svelte";
  import Product from "./Product.svelte";
  import Products from "./Products.svelte";
import { themeFavicon } from "./ThemedFavicon";

  let url = "";

  $: themeFavicon($currentTheme);

  $: document.documentElement.style.setProperty(
    "--foreground-color",
    $currentTheme.colors.foregroundColor
  ); 
  
  $: document.documentElement.style.setProperty(
    "--button-color",
    $currentTheme.colors.selectionBackground,
  ); 
  
  $: document.documentElement.style.setProperty(
    "--button-font",
    $currentTheme.colors.selectionForeground,
  );

  $: document.documentElement.style.setProperty(
    "--accent-color",
    $currentTheme.colors.accentColor
  );
  
  $: document.documentElement.style.setProperty(
    "--editor-accent-color",
    $currentTheme.colors.editorAccentColor
  );
  
  $: document.documentElement.style.setProperty(
    "--info-foreground",
    $currentTheme.colors.infoForeground
  );

  $: document.documentElement.style.setProperty(
    "--string-color",
    $currentTheme.colors.stringColor
  );

  $: document.documentElement.style.setProperty(
    "--accent-color-transparent",
    `${$currentTheme.colors.accentColor}88`
  );
  $: document.documentElement.style.setProperty(
    "--selection-foreground",
    `${$currentTheme.colors.selectionForeground}`
  );

  $: document.documentElement.style.setProperty(
    "--selection-background",
    `${$currentTheme.colors.selectionBackground}`
  ); 
  
  $: document.documentElement.style.setProperty(
    "--link-color",
    `${$currentTheme.colors.linkColor || $currentTheme.colors.accentColor}`
  );  

  $: document.documentElement.style.setProperty(
    "--ansi-cyan",
    `${$currentTheme.colors["terminal.ansiCyan"]}`
  );  
  
  $: document.documentElement.style.setProperty(
    "--ansi-yellow",
    `${$currentTheme.colors["terminal.ansiYellow"]}`
  );
  
  $: document.documentElement.style.setProperty(
    "--ansi-magenta",
    `${$currentTheme.colors["terminal.ansiMagenta"]}`
  ); 
  
  $: document.documentElement.style.setProperty(
    "--ansi-green",
    `${$currentTheme.colors["terminal.ansiGreen"]}`
  );
</script>

<main>
  <Background />
  <HeartFairy />
  <Router {url}>
    <Header />
    <div class="route-container">
      <Route path="themes" component={Themes} />
      <Route path="supporters" component={Supporters} />
      <Route path="products/:id/updates/:version" component={ProductUpdate} />
      <Route path="products/:id" component={Product} />
      <Route path="products" component={Products} />
      <Route path="*">
        <Home />
      </Route>
    </div>
  </Router>
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
