<script lang="ts">
  import marked from "marked";

  export let name: string;
  export let description: string;
  
</script>


<main>
  <h1>{name}好!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  {@html marked(description)}

  <div style="align: center;">
    <img
      alt="Best Girl"
      src="https://doki.assets.unthrottled.io/backgrounds/zero_two_dark.png"
      height="512"
    />
  </div>
</main>

<style>
  main {
    text-align: center;
    width: 100%;
    height: 100%;
    background: url("https://doki.assets.unthrottled.io/backgrounds/wallpapers/transparent/zero_two_dark.png")
      center fixed;
    background-size: cover;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    margin: 0 auto;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
