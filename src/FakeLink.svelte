<script lang="ts">
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  export let to: string;
</script>

<fake-link on:click={() => navigate(to)}>
  <slot />
</fake-link>
