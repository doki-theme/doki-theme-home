<script>
  import DokiLogo from "./DokiLogo.svelte";
  import { navLinks } from "../../common/src/Constants";
	import { goto } from '$app/navigation';

</script>

<div class="menu">
  <nav class="nav-container">
    <div class="home-link">
      <div class="nav-links">
        {#each navLinks as navLink}
          <div class="nav-link">
            <a on:mouseup={()=> goto(navLink.path)}>{navLink.label}</a>
          </div>
        {/each}
      </div>
    </div>
  </nav>
  <DokiLogo size={25} />
</div>

<style>
  .menu {
    text-align: center;
    height: 64px;
    width: 100%;
    padding-bottom: 3rem;
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
    justify-content: center;
    width: 100%;
    margin: auto 0 auto 1rem;
  }

  .nav-link {
    margin-right: 1rem;
  }
</style>
