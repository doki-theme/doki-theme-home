<script lang="ts">
  import { spring } from "svelte/motion";
  import {currentTheme} from "./ThemeStore";

  const defaultHeartSize = 20;
  const coords = spring(
    { x: window.innerWidth - defaultHeartSize * 2, y: defaultHeartSize },
    {
      stiffness: 0.02,
    }
  );
  const bigHeartSize = 50;
  const size = spring(defaultHeartSize);

  const move = (x, y, size) =>
    `transform: translate(${x - size / 2}px, ${
      y - size / 2
    }px); position: fixed; z-index: 2;`;
</script>

<svelte:window
  on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
  on:mousedown={() => size.set(bigHeartSize)}
  on:mouseup={() => size.set(defaultHeartSize)}
/>

<svg
  style={move($coords.x, $coords.y, $size)}
  height={`${$size}px`}
  viewBox="0 0 2.1266 1.7328"
>
  <path
    d="m1.06 0.29c0.0448-0.0246 0.19603-0.12429 0.41693-0.17473 0.5093-0.1163 0.70508 0.44524 0.40475 0.86866-0.2683 0.30809-0.54679 0.44962-0.82168 0.63191-0.27488-0.18229-0.55338-0.32382-0.82168-0.63191-0.30032-0.42342-0.10454-0.98496 0.40476-0.86866 0.2209 0.0504 0.37208 0.1501 0.41692 0.17473"
    style="stroke-linecap:round;stroke-width:.19832"
    stroke={$currentTheme.colors.accentColor}
    fill={$currentTheme.colors.accentColor}
  />
</svg>
