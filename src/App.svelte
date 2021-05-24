<script>
  import { Router, Route } from "svelte-routing";
  import Background from "./Background.svelte";
  import Home from "./Home.svelte";
  import HeartFairy from "./HeartFairy.svelte";
  import { BEST_GIRL } from "./ThemeStore";
  import { themeId } from "./ThemeStore";

  export let url = "";

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  themeId.set(getParameterByName("themeId") || BEST_GIRL);
  
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
