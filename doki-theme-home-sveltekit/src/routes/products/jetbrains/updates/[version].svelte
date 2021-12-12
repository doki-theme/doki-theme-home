<script lang="ts">
  import marked from "marked";
  import { getChanges } from "$lib/JetBrainsProductUpdate";
import Footer from "$lib/Footer.svelte";

const params = {
  version: '22.0.0',
}


  const changes = getChanges(params.version);
</script>

<div width={750}>
  <h1>The Doki Theme: JetBrains IDEs</h1>

  <h2>What's new in <code class="info-foreground italic">{params.version}</code> ?</h2>
  <div class="changes">
    {@html marked(changes)}
  </div>

  <p>
    For a full list of changes please see the <a
      href="https://github.com/doki-theme/doki-theme-jetbrains/blob/master/changelog/CHANGELOG.md"
      >changelog</a
    > for more details
  </p>
  <Footer/>
  <code style="opacity: 0; font-family: 'Victor Mono'">And his name is John Cena!</code>
</div>

<style>
  h1 {
    font-weight: 300;
  }
  .changes {
    text-align: left;
}
</style>
