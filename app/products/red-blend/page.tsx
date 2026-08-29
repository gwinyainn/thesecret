import Link from "next/link";

export const metadata = { title: "THE SECRET | Red Blend", description: "THE SECRET Red Blend. Discovered after dark." };

export default function RedBlendPage() {
  return <main className="productPage">
    <header className="siteHeader"><Link className="brandLink" href="/"><span className="mark markReverse"><span className="markCut" /></span><span>THE SECRET</span></Link><nav><Link href="/">Home</Link><Link className="navCta" href="#buy">Buy</Link></nav></header>
    <section className="productHero">
      <div className="productHeroImage" style={{backgroundImage:"url('/images/red-blend-hero.png')"}} />
      <div className="productHeroCopy reveal"><p className="eyebrow burgundy">AFTER DARK / 2025</p><p className="productBrand">THE SECRET</p><h1>RED<br />BLEND</h1><p className="tagline">It’s in the taste.</p><Link className="buyLink" href="#buy">Enquire to buy</Link></div>
    </section>
    <section className="productDetails">
      <div><p className="eyebrow gold">THE STORY</p><h2>Made for the conversations that begin after dark.</h2></div>
      <div><p className="lead">Dark berry, black cherry and plum unfold into subtle spice, cocoa and a dry, polished finish. Structured enough for the table; smooth enough for the hours after it.</p><div className="facts"><div className="fact"><span>Origin</span><span>Wine of South Africa</span></div><div className="fact"><span>Vintage</span><span>2025</span></div><div className="fact"><span>Blend</span><span>Cellar finalisation pending</span></div><div className="fact"><span>Alcohol</span><span>XX.X% vol</span></div><div className="fact"><span>Serving</span><span>16-18 C</span></div><div className="fact"><span>Pairing</span><span>Charred beef, mushroom, lamb, mature cheese</span></div></div></div>
    </section>
    <section className="productLifestyle" style={{backgroundImage:"linear-gradient(0deg,rgba(0,0,0,.55),transparent),url('/images/red-blend-lifestyle.png')"}}><h2>AFTER DARK.</h2></section>
    <section className="productFooterCta" id="buy"><p className="eyebrow gold">DISCOVER THE SECRET</p><h2>Don’t ask. Taste.</h2><Link className="buyLink" href="mailto:hello@thesecret.wine">HELLO@THESECRET.WINE</Link></section>
  </main>;
}
