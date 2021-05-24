<script>

import DokiLogo from "./DokiLogo.svelte";

</script>
<div class="menu">
  <div class="nav-container">
    <DokiLogo size=52 />
    <div class="logo-title">
      The Doki Theme
    </div>
    <div class="expando" />
  </div>
</div>

<style>
  .menu {
    height: 64px;
    width: 100%;
  }

  .nav-container {
    display: flex;
    padding: 1rem;
  }

  .logo-title {
    margin: auto 0 auto 0.5rem

  }

  .expando {
    flex-grow: 1;
  }
</style>