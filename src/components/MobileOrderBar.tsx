import { ArrowUpRight } from "lucide-react";
import { brandImages, business } from "@/lib/site";
import { SiteImage } from "./SiteImage";

export function MobileOrderBar() {
  return (
    <div className="mobile-order-bar">
      <a href={business.orderingUrl} target="_blank" rel="noopener noreferrer">
        <SiteImage src={brandImages.logo.src} alt="" width={28} height={28} className="mobile-order-logo" />
        ORDER PICKUP <ArrowUpRight size={19}/>
      </a>
      <a href={`tel:${business.telephone}`} aria-label="Call Wicked Wings">CALL</a>
    </div>
  );
}
