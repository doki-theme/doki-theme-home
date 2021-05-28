<script lang="ts">
  // import marked from "marked";

  import DokiLogo from "./DokiLogo.svelte";
</script>

<div class="container">
  <h1>The Doki Theme</h1>
  <DokiLogo size="145" />
  <p>
    A large collection of multi-platform themes built with love.
  </p>
</div>

<!-- {@html marked(description)} -->
<style>
  h1 {
    font-size: 3rem;
    font-weight: 300;
  }

  .container {
    max-width: 1200px;
    margin: auto;
    text-align: center;
    padding: 1rem;
  }
</style>
