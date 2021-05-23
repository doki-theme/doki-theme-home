<script>
  import { Router, Link, Route } from "svelte-routing";
  import Background from "./Background.svelte";
  import Home from "./Home.svelte";

  export let url = "";
</script>

<Background/>
<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div class="route-container">
    <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
    <Route path="*">
      <Home description="# BestGirl" 
      name="亚历二〇"></Home>
      </Route>
  </div>
</Router>

<style>
  .route-container {
    width: 100%;
    height: 100%;
  }
</style>