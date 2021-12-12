<script>
import Background from "$lib/Background.svelte";
import ContentContainer from "$lib/ContentContainer.svelte";
import Header from "$lib/Header.svelte";
import HeartFairy from "$lib/HeartFairy.svelte";

</script>

<main>
  <!-- <Background/> -->
  <!-- <HeartFairy/> -->
  <Header/>
  <ContentContainer>
    <slot></slot>
  </ContentContainer>
</main>