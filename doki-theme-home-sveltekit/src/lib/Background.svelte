<script lang="ts">
  
  import { onMount, afterUpdate, tick, onDestroy } from "svelte";

  import { currentTheme } from "./ThemeStore";

  $: document.documentElement.style.setProperty(
    "--theme-wallpaper",
    `url("https://doki.assets.unthrottled.io/backgrounds/wallpapers/transparent/${
      $currentTheme.stickers.default.name
    }") ${$currentTheme.backgrounds?.default?.anchor || "center"} fixed`
  );

  let backgroundCanvas: HTMLCanvasElement;
  let width: number;
  let height: number;

  const drawBackground = () => {
    const ctx = backgroundCanvas.getContext("2d");

    if (!ctx) return;

    const w = width;
    const h = height;

    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.85);
    ctx.quadraticCurveTo(w / 1.85, h, w, h / 2);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fillStyle = $currentTheme.colors.headerColor;
    ctx.strokeStyle = $currentTheme.colors.headerColor;
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
  const unsubscribe = currentTheme.subscribe(() => {
    draw();
  });

  $: document.documentElement.style.setProperty(
    "--base-background",
    $currentTheme.colors.baseBackground
  ); 
  
  $: document.documentElement.style.setProperty(
    "--header-color",
    $currentTheme.colors.headerColor
  );

  onDestroy(unsubscribe);
</script>

<div id="main" style="position: fixed !important;" bind:clientWidth={width} bind:clientHeight={height}>
  <canvas bind:this={backgroundCanvas} id="backgroundImage" {width} {height} />
  <div class="wallpaper"/>
</div>

<style>
  #main {
    position: fixed !important;
    width: 100%;
    height: 100%;
    z-index: -3;
    background-color: var(--base-background);
  }

  .wallpaper {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    background: var(--theme-wallpaper);
    background-size: cover;
  }

  #backgroundImage {
    z-index: -2;
  }
</style>
