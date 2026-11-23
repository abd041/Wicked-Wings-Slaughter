# Wicked Wings Slaughter — Next.js Restaurant Website

A premium, responsive **Next.js App Router + TypeScript** personalized restaurant website concept for Wicked Wings Slaughter in South Austin. Designed for a client preview, not represented as an official live website.

## Start the website

You need Node.js 20.9+ (Node 22 recommended), and internet access for the initial package install.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

Or import this folder into **Vercel**. Framework detection: Next.js. For a **private client preview**, use Vercel's deployment-protection feature if needed. `NEXT_PUBLIC_PREVIEW_MODE=true` adds `noindex` to avoid premature search indexing; it does not provide access control.

## What works

- Fully responsive landing page with sticky navbar, mobile menu and mobile pickup bar.
- Filterable, 4-category menu, with 19 real items and prices from the existing Toast listing (checked November 23, 2026).
- "Order Pickup" links point to the **restaurant's existing Toast ordering page** (no fabricated cart or payments).
- One-tap call, map/directions, Facebook, location and hours.
- Gallery featuring Facebook-post photos, with accessible lightbox/keyboard support and fallback images.
- Local SVG wings illustration, animated accents, reduced-motion support.
- Site metadata, Restaurant JSON-LD, robots and sitemap support.

## PHOTO LICENSING & RELIABILITY — important

The user stated the restaurant has given permission to use its Facebook page images. Facebook does not allow automated public access here, so the preview links to **publicly mirrored images from Wicked Wings Slaughter's own Facebook posts**, as located at `https://www.findglocal.com/US/Austin/231941207482671/Wicked-Wings-Slaughter`. These are not copied into the ZIP because the source CDN blocked file downloads in this environment. External images may break or block hotlinking; local SVG fallbacks are included.

**For delivery to the client, download the original, approved image files directly from the Facebook page, upload them into `public/images/`, then replace the `src` values in `src/lib/site.ts` with local image paths.** Example: `src: "/images/restaurant-crowd.jpg"`. This is the most dependable way to serve images. Also verify whether permission includes recognizable guests/staff in the photos.

The illustrative wings plate at `public/images/wings-illustration.svg` is a new, locally created SVG artwork (not claimed as a real restaurant photo). The visual brand motif is a text-based concept; use the restaurant's approved high-resolution official logo once supplied.

## Owner approval checklist before launch

- [ ] Approve final logo and photo files; replace hotlinks with local originals.
- [ ] Confirm exact opening hours (public listing shows daily **12 PM–2 AM**).
- [ ] Confirm the existing Toast ordering URL and whether pickup is enabled.
- [ ] Confirm phone number (**512-520-8029**) and physical address (**615 W Slaughter Ln #108, Austin, TX 78748**).
- [ ] Confirm menu items and current prices (they can change at Toast); the site states they are previews.
- [ ] Confirm whether all event details are current; the website intentionally avoids unverified day-specific schedules.
- [ ] Set `NEXT_PUBLIC_PREVIEW_MODE=false` only when authorized to publish.
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://your-real-domain.com` when the final domain is known.
- [ ] Remove the "concept preview" badge and TechDone attribution only if your agreement calls for it.
- [ ] Configure a custom domain and add legal/privacy information if collecting analytics or customer info later.

## Files you'll most often edit

- `src/lib/site.ts`: phone, address, Toast / Facebook links, images, menu, sauces.
- `src/app/page.tsx`: page sections/content.
- `src/app/globals.css`: brand colors, fonts and layout.
- `src/app/layout.tsx`: metadata and sharing info.

## Public sources checked

- Wicked Wings' existing Toast menu (current food menu and ordering): https://order.toasttab.com/online/wicked-wings-sports-bar-south-austin-615-w-slaughter-lane
- Public mirror of the restaurant's Facebook page and images: https://www.findglocal.com/US/Austin/231941207482671/Wicked-Wings-Slaughter
- Business location/hours cross-check: https://www.restaurantji.com/tx/austin/wicked-wings-/

**Technical limitation of this handoff:** Dependency download was blocked from this execution environment, so `npm install`/`next build` cannot be run here. Project source and links were statically checked; please run `npm install && npm run build` after extracting the ZIP in a normal connected environment.
