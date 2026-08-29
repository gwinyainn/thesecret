import Link from "next/link";

export const metadata = { title: "THE SECRET | MCC", description: "THE SECRET MCC. Step into the light." };

export default function MccPage() {
  return <main className="productPage lightProduct">
    <header className="siteHeader" style={{color:"#f3ebdd"}}><Link className="brandLink" href="/"><span className="mark markReverse"><span className="markCut" /></span><span>THE SECRET</span></Link><nav><Link href="/">Home</Link><Link className="navCta" href="#buy">Buy</Link></nav></header>
    <section className="productHero">
      <div className="productHeroImage" style={{backgroundImage:"url('/images/mcc-hero.png')"}} />
      <div className="productHeroCopy reveal"><p className="eyebrow burgundy">INTO THE LIGHT / NV</p><p className="productBrand">THE SECRET</p><h1>MCC</h1><p className="tagline">It’s in the taste.</p><Link className="buyLink" href="#buy">Enquire to buy</Link></div>
    </section>
    <section className="productDetails">
      <div><p className="eyebrow burgundy">THE STORY</p><h2>Light enters. The occasion begins.</h2></div>
      <div><p className="lead">Fine, persistent bubbles lift notes of citrus, white peach and brioche. The palate is poised and dry, with bright acidity and a clean mineral finish.</p><div className="facts"><div className="fact"><span>Origin</span><span>Wine of South Africa</span></div><div className="fact"><span>Vintage</span><span>NV / final cuvee pending</span></div><div className="fact"><span>Method</span><span>Traditional bottle fermentation</span></div><div className="fact"><span>Alcohol</span><span>XX.X% vol</span></div><div className="fact"><span>Serving</span><span>6-8 C</span></div><div className="fact"><span>Pairing</span><span>Oysters, tempura, soft cheese, roast chicken</span></div></div></div>
    </section>
    <section className="productLifestyle" style={{backgroundImage:"linear-gradient(0deg,rgba(0,0,0,.36),transparent),url('/images/mcc-lifestyle.png')"}}><h2>INTO THE LIGHT.</h2></section>
    <section className="productFooterCta" id="buy"><p className="eyebrow burgundy">DISCOVER THE SECRET</p><h2>Some secrets are worth sharing.</h2><Link className="buyLink" href="mailto:hello@thesecret.wine">HELLO@THESECRET.WINE</Link></section>
  </main>;
}
