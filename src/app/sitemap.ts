import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin || process.env.NEXT_PUBLIC_PREVIEW_MODE !== "false") return [];
  return [{ url: origin, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
