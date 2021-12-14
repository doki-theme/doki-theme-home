<script lang="ts">
	import { spring } from 'svelte/motion';
	import { currentThemeLite } from './ThemeStore';
	import { browser } from '$app/env';

	const defaultHeartSize = 15;
	const coords = spring(
		{ x: browser ? window.innerWidth - defaultHeartSize * 2 : 0, y: defaultHeartSize },
		{
			stiffness: 0.02
		}
	);
	const size = spring(defaultHeartSize);

	const move = (x, y, size) => {
		const xTransform = x - size / 2;
		const yTransform = y + size;

		return `transform: translate(${xTransform}px, ${yTransform}px); position: fixed; z-index: 2; pointer-events: none;`;
	};
</script>

<svelte:window on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })} />

<svg
	style={move($coords.x, $coords.y, $size)}
	height={defaultHeartSize}
	viewBox="0 0 2.1266 1.7328"
>
		<path
			d="m1.06 0.29c0.0448-0.0246 0.19603-0.12429 0.41693-0.17473 0.5093-0.1163 0.70508 0.44524 0.40475 0.86866-0.2683 0.30809-0.54679 0.44962-0.82168 0.63191-0.27488-0.18229-0.55338-0.32382-0.82168-0.63191-0.30032-0.42342-0.10454-0.98496 0.40476-0.86866 0.2209 0.0504 0.37208 0.1501 0.41692 0.17473"
			style="stroke-linecap:round;stroke-width:.19832"
			stroke={$currentThemeLite.a}
			fill={$currentThemeLite.a}
		/>
</svg>
