import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_MODE !== "false";
  return { rules: { userAgent: "*", allow: isPreview ? undefined : "/", disallow: isPreview ? "/" : undefined }, ...(process.env.NEXT_PUBLIC_SITE_URL && !isPreview ? { sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml` } : {}) };
}
