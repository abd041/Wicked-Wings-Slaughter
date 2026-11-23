import type { Metadata, Viewport } from "next";
import "./globals.css";

const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE !== "false";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Wicked Wings Slaughter | Wings, Burgers & Good Times in South Austin",
  description: "Wings, burgers, pizza, games and late-night hangouts. Find Wicked Wings Slaughter at 615 W Slaughter Ln in South Austin. Explore the menu and order pickup online.",
  applicationName: "Wicked Wings Slaughter",
  metadataBase: publicSiteUrl ? new URL(publicSiteUrl) : undefined,
  robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/wicked-wings-logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    title: "Wicked Wings Slaughter | South Austin",
    description: "Wings. Games. Good times. Come get wicked in South Austin.",
    locale: "en_US",
    siteName: "Wicked Wings Slaughter",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Wicked Wings Slaughter logo" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080808" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
