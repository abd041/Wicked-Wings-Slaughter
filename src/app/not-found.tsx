import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { brandImages } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="not-found">
      <SiteImage
        src={brandImages.logo.src}
        alt={brandImages.logo.alt}
        width={110}
        height={110}
        className="not-found-logo"
        priority
      />
      <span>404 · WRONG TURN</span>
      <h1>NOTHING TO SEE HERE.<br/><em>BACK TO THE WINGS.</em></h1>
      <Link href="/">BACK HOME ↗</Link>
    </main>
  );
}
