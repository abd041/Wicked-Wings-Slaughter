import {
  ArrowDownRight, ArrowUpRight, Clock3, Facebook, MapPin,
  Music2, Phone, RadioTower, Sparkles, Trophy, UtensilsCrossed,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { MenuExplorer } from "@/components/MenuExplorer";
import { PhotoGallery } from "@/components/PhotoGallery";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { SiteImage } from "@/components/SiteImage";
import { brandImages, business, wingFlavors } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  description: "Wings, burgers, pizza, sports and late-night bar and grill in South Austin.",
  servesCuisine: ["American", "Chicken Wings", "Burgers", "Pizza"],
  telephone: business.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "615 W Slaughter Ln #108",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78748",
    addressCountry: "US",
  },
  hasMenu: business.orderingUrl,
  image: brandImages.logo.src,
  logo: brandImages.logo.src,
  sameAs: [business.facebookUrl],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "12:00", closes: "02:00" },
  ],
};

export default function Home() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-grid-pattern" aria-hidden="true"/>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-topline"><span className="live-indicator"/><span>WHERE SOUTH AUSTIN GETS WICKED</span></div>
            <h1 id="hero-heading" className="hero-title">
              <span className="hero-title-red">BOLD WINGS.</span>
              <span className="hero-title-outline">WICKED GOOD TIMES.</span>
            </h1>
            <p>Big flavor, cold drinks, and good times in South Austin.</p>
            <div className="hero-cta-row">
              <a className="button button-primary" href={business.orderingUrl} target="_blank" rel="noopener noreferrer">ORDER ONLINE <ArrowUpRight size={20}/></a>
              <a href="#menu" className="button button-secondary">EXPLORE THE MENU <ArrowDownRight size={20}/></a>
            </div>
            <div className="hero-location"><MapPin size={17} fill="currentColor" strokeWidth={2}/><span>615 W SLAUGHTER LN, AUSTIN TX</span></div>
          </div>
          <div className="hero-art" aria-label="Real Wicked Wings food photography">
            <div className="hero-stage">
              <div className="hero-photo-frame">
                <SiteImage
                  className="hero-wing-img"
                  src={brandImages.hero.src}
                  alt={brandImages.hero.alt}
                  fill
                  sizes="(max-width: 930px) 92vw, 520px"
                  priority
                />
                <div className="hero-photo-caption">
                  <span>SOUTH AUSTIN</span>
                  <strong>WINGS · PIZZA · FRIES</strong>
                </div>
              </div>
              <div className="hero-stamp" aria-hidden="true">
                <SiteImage src={brandImages.logo.src} alt="" width={88} height={88} className="hero-stamp-logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottomline"><div className="container hero-bottomline-inner"><span>WINGS & BURGERS</span><i>✱</i><span>GAME DAY HANGOUTS</span><i>✱</i><span>LATE-NIGHT GOOD TIMES</span><i>✱</i><span>SOUTH AUSTIN, TEXAS</span></div></div>
      </section>

      <section className="about-section section-pad" id="about" aria-labelledby="about-heading">
        <div className="container about-layout">
          <div className="about-visual">
            <div className="about-img-frame">
              <SiteImage
                src={brandImages.interior.src}
                alt={brandImages.interior.alt}
                fill
                sizes="(max-width: 680px) 100vw, 48vw"
              />
            </div>
            <span className="photo-doodle" aria-hidden="true">GOOD TIMES<br/>LIVE HERE ↗</span>
            <div className="about-corner-label">THE SLAUGHTER CREW <span>✳</span></div>
          </div>
          <div className="about-copy">
            <span className="eyebrow"><span className="mini-star">✳</span> NOT YOUR AVERAGE WING JOINT</span>
            <h2 id="about-heading" className="heading-xl">GOOD FOOD.<br/>BETTER <em>VIBES.</em></h2>
            <p>Some places are for a quick bite. Others are where you stay for another round of stories. Wicked Wings Slaughter brings both together in the heart of South Austin.</p>
            <p>Whether you&apos;re grabbing wings, catching a game, or meeting up with the crew, there&apos;s always a reason to swing by.</p>
            <div className="about-pill-row"><span><Trophy size={18}/> BIG GAMES</span><span><Music2 size={18}/> GOOD NIGHTS</span><span><UtensilsCrossed size={18}/> BOLD WINGS</span></div>
            <a className="text-link light-link" href="#visit">COME FIND US <ArrowUpRight size={20}/></a>
          </div>
        </div>
      </section>

      <MenuExplorer />

      <section className="flavor-section" aria-labelledby="flavor-heading"><div className="container flavor-layout"><div className="flavor-copy"><span className="eyebrow"><span className="mini-star">✳</span> PICK YOUR HEAT</span><h2 id="flavor-heading">WHAT&apos;S YOUR<br/><em>WICKED?</em></h2><p>Keep it classic or turn up the heat. Explore the flavors available on the online menu.</p><a className="button button-cream" href={business.orderingUrl} target="_blank" rel="noopener noreferrer">PICK YOUR SAUCE <ArrowUpRight size={19}/></a></div><div className="flavor-tags" aria-label="Wing sauce flavors">{wingFlavors.map((flavor,index) => <div key={flavor} className={`flavor-pill flavor-pill-${index}`}><span>✳</span> {flavor}</div>)}</div></div><div className="flavor-bottom">MADE FOR THE HEAT <span>✷</span> MADE FOR THE CREW <span>✷</span> MADE FOR SOUTH AUSTIN</div></section>

      <section className="experience-section section-pad" id="experience" aria-labelledby="experience-heading"><div className="container"><div className="experience-heading"><div><span className="eyebrow dark"><span className="mini-star">✳</span> MORE THAN JUST WINGS</span><h2 className="heading-xl" id="experience-heading">THERE&apos;S ALWAYS<br/><em>SOMETHING ON.</em></h2></div><p>Bring your people, grab a seat, and make a night of it. Follow our Facebook for the latest event updates.</p></div><div className="experience-grid"><article className="experience-card game-card"><span className="experience-index">01 / THE GAMES</span><div className="experience-icon"><RadioTower size={33}/></div><h3>BIG GAME<br/><em>ENERGY.</em></h3><p>Catch the action, root for your team, and enjoy the atmosphere.</p><span className="experience-symbol"><Trophy size={90} strokeWidth={1}/></span></article><article className="experience-card music-card"><span className="experience-index">02 / THE NIGHTS</span><div className="experience-icon"><Music2 size={33}/></div><h3>GOOD<br/><em>NOISE.</em></h3><p>Karaoke and DJ nights keep the fun rolling. Check Facebook for schedules.</p><span className="experience-symbol"><Music2 size={90} strokeWidth={1}/></span></article><article className="experience-card late-card"><span className="experience-index">03 / THE HANGOUT</span><div className="experience-icon"><Clock3 size={33}/></div><h3>STAY A<br/><em>LITTLE.</em></h3><p>Wings, friends, and a spot to unwind in South Austin.</p><span className="experience-symbol"><UtensilsCrossed size={90} strokeWidth={1}/></span></article></div></div></section>

      <PhotoGallery />

      <section className="visit-section section-pad" id="visit" aria-labelledby="visit-heading">
        <div className="container visit-layout">
          <div className="visit-copy">
            <span className="eyebrow"><span className="mini-star">✳</span> DROP BY ANYTIME</span>
            <h2 className="heading-xl" id="visit-heading">YOUR SEAT&apos;S<br/><em>WAITING.</em></h2>
            <p>Right here on West Slaughter Lane. Bring your appetite, bring your crew — we&apos;ll see you at Wicked Wings.</p>
            <div className="visit-detail"><span className="visit-detail-icon"><MapPin size={23}/></span><div><strong>FIND US</strong><span>{business.addressLine1}<br/>{business.addressLine2}</span></div></div>
            <div className="visit-detail"><span className="visit-detail-icon"><Clock3 size={23}/></span><div><strong>OPEN LATE</strong><span>{business.hoursDisplay}<small>* Please confirm current hours before visiting.</small></span></div></div>
            <div className="visit-detail"><span className="visit-detail-icon"><Phone size={23}/></span><div><strong>GIVE US A CALL</strong><a href={`tel:${business.telephone}`}>{business.phoneDisplay}</a></div></div>
            <div className="visit-actions"><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="button button-red">GET DIRECTIONS <ArrowUpRight size={20}/></a><a href={`tel:${business.telephone}`} className="button button-line">CALL US <Phone size={18}/></a></div>
          </div>
          <div className="visit-map">
            <iframe title="Map showing Wicked Wings Slaughter in South Austin" src="https://maps.google.com/maps?q=615%20W%20Slaughter%20Ln%20Suite%20108%20Austin%20TX%2078748&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-label">
              <SiteImage src={brandImages.logo.src} alt="" width={40} height={40} className="map-logo" />
              <div><strong>WICKED WINGS</strong><small>615 W SLAUGHTER LN · AUSTIN</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="end-cta">
        <div className="container end-cta-inner">
          <div className="end-cta-brand">
            <SiteImage src={brandImages.logo.src} alt={brandImages.logo.alt} width={88} height={88} className="end-cta-logo" />
            <div>
              <span className="eyebrow"><Sparkles size={16}/> YOU KNOW YOU WANT SOME</span>
              <h2>LET&apos;S GET<br/><em>WICKED.</em></h2>
            </div>
          </div>
          <a href={business.orderingUrl} className="end-cta-button" target="_blank" rel="noopener noreferrer"><span>ORDER PICKUP<br/><small>GO STRAIGHT TO THE GOOD STUFF</small></span><ArrowUpRight size={32}/></a>
        </div>
        <div className="end-cta-accent" aria-hidden="true">
          <SiteImage src={brandImages.logo.src} alt="" width={420} height={420} className="end-cta-watermark" />
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container footer-upper">
        <div className="footer-brand">
          <div className="footer-logo">
            <SiteImage
              src={brandImages.logo.src}
              alt={brandImages.logo.alt}
              width={72}
              height={72}
              className="footer-logo-img"
            />
            <span>WICKED<br/><strong>WINGS.</strong></span>
          </div>
          <p>Wings. Games. Good times.<br/>Made for South Austin.</p>
        </div>
        <div className="footer-links"><strong>EXPLORE</strong><a href="#home">Home</a><a href="#menu">Menu</a><a href="#experience">The Vibe</a><a href="#gallery">Gallery</a></div>
        <div className="footer-links"><strong>GET IN TOUCH</strong><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">615 W Slaughter Ln, Austin TX <ArrowUpRight size={13}/></a><a href={`tel:${business.telephone}`}>{business.phoneDisplay}</a><a href={business.facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={16}/> Facebook <ArrowUpRight size={13}/></a></div>
        <div className="footer-action"><strong>HUNGRY YET?</strong><a href={business.orderingUrl} target="_blank" rel="noopener noreferrer">ORDER PICKUP <ArrowUpRight size={21}/></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} WICKED WINGS SLAUGHTER</span><span>PERSONALIZED WEBSITE CONCEPT <span className="dot">•</span> <a href="https://techdone.dev" target="_blank" rel="noopener noreferrer">CRAFTED BY TECHDONE <ArrowUpRight size={12}/></a></span></div>
    </footer>
    <MobileOrderBar />
    {process.env.NEXT_PUBLIC_PREVIEW_MODE !== "false" && <div className="preview-badge" title="Website concept — content and details require owner approval">CONCEPT PREVIEW</div>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </>;
}
