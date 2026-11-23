"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Instagram, X } from "lucide-react";
import { business, socialPhotos } from "@/lib/site";
import { SiteImage } from "./SiteImage";

export function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const change = useCallback((delta: number) => setSelected(value => value === null ? null : (value + delta + socialPhotos.length) % socialPhotos.length), []);
  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") change(-1);
      if (event.key === "ArrowRight") change(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [selected, change, close]);

  return <>
    <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery-heading-row">
          <div>
            <span className="eyebrow"><span className="mini-star">✳</span> INSIDE THE WICKED WORLD</span>
            <h2 id="gallery-heading" className="heading-xl">REAL PEOPLE.<br/><em>REAL GOOD TIMES.</em></h2>
          </div>
          <a className="gallery-social" href={business.facebookUrl} target="_blank" rel="noopener noreferrer">
            <Instagram size={17}/> FOLLOW THE FUN <ArrowRight size={16}/>
          </a>
        </div>
        <div className="gallery-grid">
          {socialPhotos.map((photo, index) => (
            <button
              type="button"
              key={photo.src + index}
              className={`gallery-photo gallery-photo-${index + 1}`}
              aria-label={`View photo: ${photo.caption}`}
              onClick={() => setSelected(index)}
            >
              <SiteImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1130px) 50vw, 40vw"
                style={{ objectPosition: photo.position }}
                className="gallery-photo-img"
              />
              <span className="gallery-photo-overlay">
                <span>{photo.caption}</span>
                <span className="gallery-zoom">↗</span>
              </span>
            </button>
          ))}
        </div>
        <p className="gallery-note">Photos from Wicked Wings Slaughter&apos;s public Facebook page. Check their page for the latest moments.</p>
      </div>
    </section>
    {selected !== null && (
      <div className="lightbox-backdrop" role="presentation" onClick={close}>
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Restaurant photo viewer" onClick={event => event.stopPropagation()}>
          <button autoFocus aria-label="Close gallery" className="lightbox-close" type="button" onClick={close}><X/></button>
          <button className="lightbox-arrow" aria-label="Previous photo" onClick={() => change(-1)}><ArrowLeft/></button>
          <figure>
            <SiteImage
              key={socialPhotos[selected].src}
              src={socialPhotos[selected].src}
              alt={socialPhotos[selected].alt}
              width={socialPhotos[selected].width}
              height={socialPhotos[selected].height}
              sizes="90vw"
              className="lightbox-img"
              priority
            />
            <figcaption>{socialPhotos[selected].caption} · {selected + 1}/{socialPhotos.length}</figcaption>
          </figure>
          <button className="lightbox-arrow" aria-label="Next photo" onClick={() => change(1)}><ArrowRight/></button>
        </div>
      </div>
    )}
  </>;
}
