<script lang="ts">
  import marked from "marked";
  import Background from "./Background.svelte";
  import { spring } from "svelte/motion";

  const coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.02,
    }
  );
  const size = spring(15);

  export let name: string;
  export let description: string;

  const move = (x, y, size) =>
    `transform: translate(${x - size / 2}px, ${
      y - size / 2
    }px); position: fixed`;
</script>

<div
  style="position: absolute; width: 100%; height: 100%"
  on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
  on:mousedown={() => size.set(40)}
  on:mouseup={() => size.set(15)}
>
  <svg
    style={move($coords.x, $coords.y, $size)}
    height={`${$size}px`}
    viewBox="0 0 2.1266 1.7328"
  >
    <path
      d="m1.06 0.29c0.0448-0.0246 0.19603-0.12429 0.41693-0.17473 0.5093-0.1163 0.70508 0.44524 0.40475 0.86866-0.2683 0.30809-0.54679 0.44962-0.82168 0.63191-0.27488-0.18229-0.55338-0.32382-0.82168-0.63191-0.30032-0.42342-0.10454-0.98496 0.40476-0.86866 0.2209 0.0504 0.37208 0.1501 0.41692 0.17473"
      style="fill:none;stroke-linecap:round;stroke-width:.19832;stroke:#6ee4f8"
    />
  </svg>
</div>

<Background />
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
