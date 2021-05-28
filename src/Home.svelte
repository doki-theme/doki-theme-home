<script lang="ts">
  // import marked from "marked";

  import DokiLogo from "./DokiLogo.svelte";
</script>

<div class="container">
  <h1>The Doki Theme</h1>
  <DokiLogo size="145" />
  <h3 class="editor-accent-color">
    A large collection of themes built with love and care.
  </h3>
  <p>
    Build software, push boundaries, and deliver happiness along side your waifu.
  </p>
</div>

<!-- {@html marked(description)} -->
<style>
  h1 {
    font-size: 3rem;
    font-weight: 300;
  }

  h3 {
    padding-top: 1rem;
    font-weight: 500;
    font-size: 1.25rem;
    font-family: "Victor Mono", 'Courier New', Courier, monospace;
    font-style: italic;
  }

  .container {
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 1rem;
  }
</style>
