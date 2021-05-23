<script lang="ts">
  import marked from "marked";
  import { onMount, afterUpdate, tick } from "svelte";

  export let name: string;
  export let description: string;

  // let backgroundCanvas: HTMLCanvasElement;
  let width: number;
  let height: number;

  const drawBackground = () => {
    const backgroundCanvas = document.getElementById(
      "backgroundImage"
    ) as HTMLCanvasElement;
    const ctx = backgroundCanvas.getContext("2d");
    console.log(ctx);

    if (!ctx) return;

    const w = width;
    const h = height;

    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.85);
    ctx.quadraticCurveTo(w / 1.85, h, w, 0);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = "#363b3d";
    ctx.strokeStyle = "#363b3d";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  };

  const draw = async () => {
    await tick();
    drawBackground();
  };
  afterUpdate(draw);
  onMount(draw);
</script>

<div id="main" bind:clientWidth={width} bind:clientHeight={height}>
  <canvas id="backgroundImage" {width} {height} />
</div>

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
  #main {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  #backgroundImage {
    z-index: -1;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
