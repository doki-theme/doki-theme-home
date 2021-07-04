<script lang="ts">
  import { useNavigate } from "svelte-navigator"
  import { tap } from '@sveltejs/gestures';;

  const navigate = useNavigate();

  export let to: string;
</script>

<fake-link use:tap on:tap={() => navigate(to)}>
  <slot />
</fake-link>
