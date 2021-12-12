<script lang="ts">

  export let width: number = 1200

</script>
<div class="container" style={`--max-width: ${width}px`}>
  <slot/>
</div>

<style>
  .container {
    max-width: var(--max-width);
    margin: auto;
    text-align: center;
    padding: 1rem;
  }
</style>