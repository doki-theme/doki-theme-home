<script lang="ts">
  import marked from "marked";
  import ContentContainer from "./ContentContainer.svelte";
  import { useParams } from "svelte-navigator";
  import { getChanges } from "./JetBrainsProductUpdate";

  const params = useParams();

  const version = "v15.3.0";

  const changes = getChanges(version);
</script>

<ContentContainer>
  <h2>What's new in <code class="info-foreground italic">{version}</code> ?</h2>
  <p>
    For a full list of changes please see the <a
      href="https://github.com/doki-theme/doki-theme-jetbrains/blob/master/changelog/CHANGELOG.md"
      >changelog</a
    > for more details
  </p>

  {@html marked(changes)}
</ContentContainer>
