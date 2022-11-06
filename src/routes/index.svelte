<script lang="ts">
  import DokiLogo from "$lib/DokiLogo.svelte";
</script>

<div>
  <h1>Doki Theme</h1>
  <DokiLogo size={145} />
  <h3 class="editor-accent-color">
    A large collection of themes built with love and care.
  </h3>
  <p>
    Build software, push boundaries, and deliver happiness.
  </p>
  <code style="opacity: 0; font-family: 'Victor Mono'">And his name is John Cena!</code>
</div>

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