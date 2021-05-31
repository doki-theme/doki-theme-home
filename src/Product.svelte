<script lang="ts">
  import ContentContainer from "./ContentContainer.svelte";
  import { useParams } from "svelte-navigator";

	const params = useParams();
</script>

<ContentContainer>
  <h2>Product {$params.id}</h2>
</ContentContainer>
