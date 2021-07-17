<script>
  import Badge from "./Badge.svelte";
  import ContentContainer from "./ContentContainer.svelte";
</script>

<ContentContainer>
  <div class="container">
    <div class="about">
      <h2>About</h2>
      <blockquote>
        This <a href="https://monokai.pro/">Monokai theme</a> is pretty cool,
        but you know what would be cooler? A
        <a href="https://doki-doki-literature-club.fandom.com/wiki/Monika">
          Monika Theme...
        </a>
      </blockquote>

      <div class="preachy-speachy">
        <p>
          Nothing like taking inspiration from a late 2017 internet meme and a
          bit of dyslexia, then running with that idea for more than three
          years.
        </p>

        <p>
          What you have stumbled across, friend, is my passion project. As long
          as I am alive (and coding), I <em>will</em>
          find the time to continually improve my theme suite.
        </p>

        <p>
          I also recognize that I have built something that others enjoy as
          well. You can always just send me a <a
            href="mailto:alexsimons9999@gmail.com?subject=Thanks for weebifying my development tools!"
            >nice thank you message</a
          >, your gratitude is enough for me.
        </p>
        <p>
          However, if you want it known that you are a serious hacker weeb or if
          you just got spare cash to burn. Then you can send a few dollars my
          way. Let me know if you <em>don't</em> want your name displayed for others
          to see.
        </p>

        <div style="padding: 1rem 0; width: 100%;">- Alex</div>
      </div>

      <div style="padding: 0.5rem" />
      <a
        class="donate-button"
        href="https://paypal.me/alexsimons9999?locale.x=en_US"
      >
        Donate
      </a>
    </div>
    <div class="supporters">
      <h2>Supporters</h2>
      <div class="hackers">
        <p class="heading">Hackers</p>
        <p class="description">Can't work without their Waifu.</p>
        <ul>
          <li>
            <span>Javier Garcia</span> <span class="badge"><Badge /></span>
          </li>
        </ul>
      </div>
      <div class="enthusiasts">
        <p class="heading">Enthusiasts</p>
        <p class="description">Love their Waifu.</p>
        <ul>
          <li><span>George Kazanjian</span></li>
        </ul>
      </div>
    </div>
  </div>
</ContentContainer>

<style>
  .badge {
    position: absolute;
  }
  .container {
    display: flex;
    width: 100%;
  }

  .heading {
    font-weight: bold;
    font-size: 1.15rem;
  }

  .donate-button {
    margin: 0 auto;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .heading {
    margin-bottom: 0;
  }

  .about {
    margin-left: 1rem;
  }

  .hackers > ul > li > span {
    color: var(--ansi-cyan);
    font-weight: 600;
  }

  .hackers {
    margin-bottom: 3rem;
  }

  .enthusiasts > ul > li > span {
    color: var(--ansi-green);
    font-weight: 600;
  }

  .donate-button {
    border-radius: 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 2px solid var(--accent-color);
    background-color: var(--button-color);
    color: var(--button-font);
  }

  .donate-button:hover {
    background-color: var(--selection-background);
    color: var(--selection-foreground);
  }

  .donate-button::after {
    display: none;
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
    text-align: left;
  }

  .about p {
    padding-top: 1rem;
  }

  .supporters {
    flex-grow: 1;
  }
</style>
