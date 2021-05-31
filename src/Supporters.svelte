<script>
  import ContentContainer from "./ContentContainer.svelte";

  let buttonText = "Donate";

  const donateAction = () => {
    window.open("https://paypal.me/alexsimons9999?locale.x=en_US", "_blank");
  };
</script>

<ContentContainer>
  <h2>About</h2>
  <blockquote>
    This <a href="https://monokai.pro/" target="_blank">Monokai theme</a> is
    pretty cool, but you know what would be cooler? A
    <a
      href="https://doki-doki-literature-club.fandom.com/wiki/Monika"
      target="_blank">Monika Theme...</a
    >
  </blockquote>

  <div class="preachy-speachy">
    <p>
      Nothing like taking inspiration from a late 2017 internet meme and running
      with it for more than three years.
    </p>

    <p>
      What you have stumbled across, friend, is my passion project. As long as I
      am alive (and coding), I <em>will</em>
      find the time to continually improve my theme suite.
    </p>

    <p>
      However, I also recognize that I have built something that others enjoy as
      well. So, if you want it known that you are a serious hacker weeb or if
      you just want to feel good. Then you can send a few dollars my way. Let me
      know if you want your name and pretty face displayed for others to see.
    </p>

    <div style="padding: 1rem 0; width: 100%;">- Alex</div>
  </div>

  <button class="donate-button" on:click={donateAction}>
    {buttonText}
  </button>
</ContentContainer>

<style>
  .donate-button {
    margin: 0 auto;
  }

  button {
    border-radius: 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 2px solid var(--accent-color);
    background-color: var(--button-color);
    color: var(--button-font);
  }

  button:active {
    background-color: var(--selection-background);
    color: var(--selection-foreground);
  }

  blockquote {
    color: var(--info-foreground);
    border-left: 4px solid var(--editor-accent-color);
    padding-left: 1rem;
    font-size: 18px;
    letter-spacing: -1px;
    line-height: 1.75rem;
    font-style: italic;
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
  }

  .preachy-speachy {
    max-width: 500px;
    margin: 0 auto;
  }

  p {
    padding-top: 1rem;
  }
</style>
