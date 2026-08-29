import Link from "next/link";

const Mark = ({ reverse = false }: { reverse?: boolean }) => (
  <span className={`mark ${reverse ? "markReverse" : ""}`} aria-hidden="true">
    <span className="markCut" />
  </span>
);

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brandLink" href="#top" aria-label="The Secret home">
          <Mark reverse />
          <span>THE SECRET</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="#story">The story</Link>
          <Link href="#wines">The wines</Link>
          <Link href="#stockists">Stockists</Link>
          <Link className="navCta" href="#join">Join The Secret</Link>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="heroImage" />
        <div className="heroShade" />
        <div className="heroCopy reveal">
          <p className="eyebrow">THE SECRET</p>
          <h1 id="hero-title">WHAT’S<br />THE SECRET?</h1>
          <p className="tagline">It’s in the taste.</p>
          <Link className="textLink" href="#story">Discover <span>↓</span></Link>
        </div>
        <p className="heroIndex">RED BLEND&nbsp;&nbsp; / &nbsp;&nbsp;MCC</p>
      </section>

      <section className="storySection darkSection" id="story">
        <div className="verticalRule" />
        <div className="storyCopy">
          <p className="eyebrow gold">DISCOVERED, NOT ADVERTISED</p>
          <h2>Some things reveal<br />themselves slowly.</h2>
          <p>
            A glance held a moment longer. A bottle emerging from shadow. The pause before the first taste.
            THE SECRET was created for that moment of discovery - rooted in South Africa, shaped with contemporary restraint.
          </p>
          <p className="whisper">We could tell you more. But some answers are better experienced.</p>
        </div>
        <div className="storyMark"><Mark reverse /></div>
      </section>

      <section className="wineSection redWine" id="wines">
        <div className="wineImage redBottle" role="img" aria-label="The Secret Red Blend bottle" />
        <div className="wineCopy">
          <p className="eyebrow burgundy">01 / AFTER DARK</p>
          <p className="productBrand">THE SECRET</p>
          <h2>RED BLEND</h2>
          <p className="tagline">It’s in the taste.</p>
          <p className="wineDescription">Dark berry, black cherry and plum unfold into subtle spice, cocoa and a dry, polished finish.</p>
          <Link className="textLink" href="/products/red-blend">Discover after dark <span>→</span></Link>
        </div>
      </section>

      <section className="threshold" aria-hidden="true">
        <div className="thresholdLine" />
        <p>DARK</p><span>THE REVEAL</span><p>LIGHT</p>
      </section>

      <section className="wineSection lightWine">
        <div className="wineCopy">
          <p className="eyebrow burgundy">02 / INTO THE LIGHT</p>
          <p className="productBrand">THE SECRET</p>
          <h2>MCC</h2>
          <p className="tagline">It’s in the taste.</p>
          <p className="wineDescription">Fine bubbles lift citrus, white peach and brioche into a poised, dry mineral finish.</p>
          <Link className="textLink darkLink" href="/products/mcc">Step into the light <span>→</span></Link>
        </div>
        <div className="wineImage mccBottle" role="img" aria-label="The Secret MCC bottle" />
      </section>

      <section className="familySection">
        <div className="familyImage" role="img" aria-label="The Secret Red Blend and MCC bottles together" />
        <div className="familyOverlay" />
        <div className="familyCopy">
          <p className="eyebrow">THE COLLECTION</p>
          <h2>TWO EXPRESSIONS.<br />ONE SECRET.</h2>
          <p>It’s in the taste.</p>
        </div>
      </section>

      <section className="shopSection">
        <div className="sectionIntro">
          <p className="eyebrow burgundy">THE WINES</p>
          <h2>Now you know.</h2>
        </div>
        <div className="shopGrid">
          <Link className="shopItem shopDark" href="/products/red-blend">
            <p>THE SECRET</p><h3>RED BLEND</h3><span>2025 / SOUTH AFRICA</span><b>Discover →</b>
          </Link>
          <Link className="shopItem shopLight" href="/products/mcc">
            <p>THE SECRET</p><h3>MCC</h3><span>NV / SOUTH AFRICA</span><b>Discover →</b>
          </Link>
          <div className="giftItem">
            <div className="giftImage" />
            <div><p>THE SIGNATURE GIFT BOX</p><h3>Some secrets are better shared.</h3><Link href="#join">Enquire →</Link></div>
          </div>
        </div>
      </section>

      <section className="stockistSection" id="stockists">
        <div>
          <p className="eyebrow gold">SELECTED PLACES</p>
          <h2>Find The Secret.</h2>
        </div>
        <div className="stockistCopy">
          <p>Restaurants, boutique hotels and private cellars.</p>
          <p className="muted">Stockist list launching soon.</p>
          <Link className="textLink" href="#join">Become a stockist <span>→</span></Link>
        </div>
      </section>

      <section className="journalSection">
        <p className="eyebrow burgundy">@THESECRET.WINE</p>
        <h2>Keep it between us.</h2>
        <div className="journalGrid">
          <div className="journalCard journalDark"><span>WHAT’S<br />THE SECRET?</span></div>
          <div className="journalCard journalRed" />
          <div className="journalCard journalLight"><span>DON’T ASK.<br />TASTE.</span></div>
          <div className="journalCard journalMcc" />
        </div>
      </section>

      <section className="joinSection" id="join">
        <Mark reverse />
        <p className="eyebrow gold">JOIN THE SECRET</p>
        <h2>Be the first to know.</h2>
        <p>Private releases. Tastings. Places worth discovering.</p>
        <form className="joinForm">
          <label className="srOnly" htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="EMAIL ADDRESS" required />
          <button type="submit">KEEP ME INFORMED</button>
        </form>
      </section>

      <footer>
        <div><Mark reverse /><p>THE SECRET</p><span>It’s in the taste.</span></div>
        <div><p>SOUTH AFRICA</p><p>© 2026 THE SECRET</p></div>
        <div><a href="#top">INSTAGRAM</a><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
