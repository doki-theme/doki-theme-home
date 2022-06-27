<script>
  import Badge from "$lib/Badge.svelte";
import Crown from "$lib/Crown.svelte";
</script>

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
        >. Tell me about how these themes help your day better. Your gratitude and enthusiasm is enough for me.
      </p>
      <p>
        However, if you want it known that you are a serious hacker weeb. 
        Then you can send a few dollars my way. Let me know if you <strong><em>don't</em></strong> want your name displayed for others
        to see. Also tell me your favorite theme!
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
    <div class="s-tier">
      <p class="heading">S Tier</p>
      <p class="description">All other themes are obsolute, <em>just Doki. 50 USD</em></p>
      <ul>
        <li><img src="/supporterAssets/ram_spin.gif" alt="Ram Spin"/>  <span><span class="crown"><Crown /></span>Mikko Ohtamaa</span><img src="/supporterAssets/rem_spin.gif" alt="Rem Spin"/></li>
        <li><img src="/supporterAssets/just_zero_two.gif" alt="Head pats for Zero Two"/>  <span title="Yeah, I'm S-Tier, get at me.">Alex Simons</span><img src="/supporterAssets/zero_two_intensifies.gif" alt="Zero Two Intensifies"/></li>
      </ul>
      <ul>
      </ul>
    </div>
    <div class="professionals">
      <p class="heading">Professional Tier</p>
      <p class="description">True individuals of culture. <span class="bounds">20 USD</span></p>
      <ul>
        <li><span>Arimil</span></li>
      </ul>
    </div>
    <div class="hackers">
      <p class="heading">H4ck3r T13r</p>
      <p class="description">1337 h4x0rz w33bz. <em>10 USD</em></p>
      <ul>
        <li><span>Javier Garcia</span> <span class="badge"><Badge /></span></li>
        <li><span>Brandon Huang</span></li>
        <li><span>Frank Krissmann</span></li>
      </ul>
    </div>
    <div class="enthusiasts">
      <p class="heading">Enthusiast Tier</p>
      <p class="description">Your support is appreciated!</p>
      <ul>
        <li><span>George Kazanjian</span></li>
        <li><span>Paulo Roberto De Andrade Ferreira</span></li>
        <li><span>James Leung</span></li>
      </ul>
    </div>
  </div>
</div>

<style>
  .crown {
    position: absolute;
    margin-top: -0.75rem;
  }
  .badge{
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

  .bounds {
    font-style: italic;
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
    font-size: 1.05rem
  }

  .supporters > div {
    margin-bottom: 3rem;
  }

  .s-tier > ul > li  {
    margin-bottom: 0.5rem;
  }

  .s-tier > ul > li > span {
    color: var(--ansi-yellow);
    font-weight: 600;
    font-size: 1.15rem;
    margin: 0 0.5rem;
  }

  .s-tier img {
    vertical-align: text-bottom;
  }

  .enthusiasts > ul > li > span {
    color: var(--ansi-green);
    font-weight: 600;
    font-size: 0.95rem
  }

  .professionals > ul > li > span {
    color: var(--ansi-blue);
    font-weight: 600;
    font-size: 1.07rem
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
