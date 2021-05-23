<script lang="ts">
    import { onMount, afterUpdate, tick } from "svelte";

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

</style>