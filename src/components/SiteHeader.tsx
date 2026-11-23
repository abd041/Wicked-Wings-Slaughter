"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { business, brandImages } from "@/lib/site";
import { SiteImage } from "./SiteImage";

const links = [
  { href: "#menu", text: "The Menu" },
  { href: "#experience", text: "The Vibe" },
  { href: "#gallery", text: "Gallery" },
  { href: "#visit", text: "Find Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="announcement">
        <SiteImage src={brandImages.logo.src} alt="" width={18} height={18} className="announcement-logo" />
        <span className="announcement-spark">✦</span> SOUTH AUSTIN&apos;S WICKED GOOD HANGOUT <span className="announcement-dot">•</span> 615 W SLAUGHTER LN <span className="announcement-spark">✦</span>
        <SiteImage src={brandImages.logo.src} alt="" width={18} height={18} className="announcement-logo" />
      </div>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#home" className="brand" aria-label="Wicked Wings Slaughter home" onClick={() => setOpen(false)}>
            <span className="brand-mark">
              <SiteImage
                src={brandImages.logo.src}
                alt={brandImages.logo.alt}
                width={56}
                height={56}
                className="brand-logo-img"
                priority
              />
            </span>
            <span className="brand-words"><strong>WICKED<span>WINGS</span></strong><small>SOUTH AUSTIN</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(link => <a key={link.href} href={link.href}>{link.text}</a>)}
          </nav>
          <div className="header-actions">
            <a className="order-button top-order" href={business.orderingUrl} target="_blank" rel="noopener noreferrer">ORDER ONLINE <ArrowUpRight size={18} aria-hidden="true" /></a>
            <button type="button" className="mobile-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)}>{open ? <X size={25} /> : <Menu size={25} />}</button>
          </div>
        </div>
        <div id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
          <nav aria-label="Mobile navigation">
            {links.map(link => <a href={link.href} onClick={() => setOpen(false)} key={link.href} tabIndex={open ? 0 : -1}>{link.text}<ArrowUpRight size={20} /></a>)}
            <a className="mobile-order" href={business.orderingUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>ORDER ONLINE <ArrowUpRight size={20}/></a>
          </nav>
        </div>
      </header>
    </>
  );
}
