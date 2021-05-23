<script>
  import { Router, Route } from "svelte-routing";
  import Background from "./Background.svelte";
  import Home from "./Home.svelte";
  import HeartFairy from "./HeartFairy.svelte";

  export let url = "";
</script>

<Background />
<HeartFairy />
<Router {url}>
  <div class="route-container">
    <!-- <Route path="blog/:id" component="{BlogPost}" /> -->
    <Route path="*">
      <Home description="# BestGirl" name="亚历二〇" />
    </Route>
  </div>
</Router>

<style>
  .route-container {
    width: 100%;
    height: 100%;
  }
</style>
