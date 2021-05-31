<script lang="ts">
  import marked from "marked";
  import ContentContainer from "./ContentContainer.svelte";
  import { useParams } from "svelte-navigator";
  import { getChanges } from "./JetBrainsProductUpdate";

  const params = useParams();

  const changes = getChanges($params.version);
</script>

<ContentContainer width={750}>
  <h1>The Doki Theme: JetBrains IDEs</h1>

  <h2>What's new in <code class="info-foreground italic">{$params.version}</code> ?</h2>
  <div class="changes">
    {@html marked(changes)}
  </div>

  <p>
    For a full list of changes please see the <a
      href="https://github.com/doki-theme/doki-theme-jetbrains/blob/master/changelog/CHANGELOG.md"
      target="_blank"
      >changelog</a
    > for more details
  </p>
</ContentContainer>

<style>
  h1 {
    font-weight: 300;
  }
  .changes {
    text-align: left;
}
</style>
