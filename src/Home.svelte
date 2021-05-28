<script lang="ts">
  // import marked from "marked";

  import ContentContainer from "./ContentContainer.svelte";
  import DokiLogo from "./DokiLogo.svelte";
</script>

<ContentContainer>
  <h1>The Doki Theme</h1>
  <DokiLogo size="145" />
  <h3 class="editor-accent-color">
    A large collection of themes built with love and care.
  </h3>
  <p>
    Build software, push boundaries, and deliver happiness along side your
    waifu.
  </p>
</ContentContainer>

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
    font-family: "Victor Mono", "Courier New", Courier, monospace;
    font-style: italic;
  }
</style>
