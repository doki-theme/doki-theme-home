<script>
  import DokiLogo from "./DokiLogo.svelte";
  import { navLinks } from "./Constants";
  import FakeLink from "./FakeLink.svelte";
</script>

<div class="menu">
  <nav class="nav-container">
    <div class="home-link">
      <DokiLogo size={25} />
      <div class="nav-links">
        {#each navLinks as navLink}
          <div class="nav-link">
            <FakeLink to={navLink.path}>{navLink.label}</FakeLink>
          </div>
        {/each}
      </div>
    </div>
  </nav>
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

  .home-link {
    display: flex;
    width: 100%;
  }

  .nav-links {
    display: flex;
    width: 100%;
    margin: auto 0 auto 1rem;
  }

  .nav-link {
    margin-right: 1rem;
  }
</style>
