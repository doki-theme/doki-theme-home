<script>
  import { Link } from "svelte-routing";
  import DokiLogo from "./DokiLogo.svelte";
</script>

<div class="menu">
  <nav class="nav-container">
    <div class="home-link">
      <DokiLogo size="25" />
      <div class="nav-links">
        <Link to="/">
          <div class="logo-title">The Doki Theme</div>
        </Link>
        <Link to="about">About</Link>
        <div class="expando" />
        <Link to="blog">Blog</Link>
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

  a {
    color: inherit;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    justify-content: space-between;
    width: 100% ;
    margin: auto 0 auto 0.5rem;
  }

  .expando {
    flex-grow: 1;
  }
</style>
