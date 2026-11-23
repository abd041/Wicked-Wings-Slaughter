import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = "public/images";

async function toWebp(input, output, transform = (p) => p, quality = 82) {
  const pipeline = transform(sharp(input));
  const dest = path.join(OUT, output);
  await pipeline.webp({ quality }).toFile(dest);
  const m = await sharp(dest).metadata();
  console.log(output, `${m.width}x${m.height}`, fs.statSync(dest).size);
}

async function logoTransparent() {
  const { data, info } = await sharp("public/images/raw/profile-logo.jpg")
    .resize({ width: 512, height: 512, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 245 && g > 245 && b > 245) data[i + 3] = 0;
    else if (r > 230 && g > 230 && b > 230) {
      data[i + 3] = Math.round(255 - ((r + g + b) / 3 - 230) * (255 / 25));
    }
  }

  const dest = path.join(OUT, "wicked-wings-logo.webp");
  await sharp(data, { raw: info }).webp({ quality: 90, alphaQuality: 100 }).toFile(dest);
  const m = await sharp(dest).metadata();
  console.log("wicked-wings-logo.webp", `${m.width}x${m.height}`, fs.statSync(dest).size);
}

await logoTransparent();

await toWebp("public/images/raw/cover-food-full.jpg", "wicked-wings-hero.webp", (p) =>
  p.extract({ left: 0, top: 200, width: 1000, height: 900 }).resize({ width: 1600 }),
);

await toWebp("public/images/raw/cover-food-full.jpg", "wings-platter.webp", (p) =>
  p.extract({ left: 40, top: 700, width: 520, height: 520 }).resize({ width: 1000 }),
  84,
);

await toWebp("public/images/raw/cover-food-full.jpg", "burgers.webp", (p) =>
  p.extract({ left: 500, top: 1180, width: 460, height: 380 }).resize({ width: 1000 }),
  84,
);

await toWebp("public/images/raw/photo-01.jpg", "restaurant-interior.webp", (p) => p.resize({ width: 1400 }));
await toWebp("public/images/raw/photo-07.jpg", "restaurant-exterior.webp", (p) => p.resize({ width: 1400 }));
await toWebp("public/images/raw/cover-food-full.jpg", "food-gallery-01.webp", (p) => p.resize({ width: 1200 }));

await toWebp("public/images/raw/photo-08.jpg", "food-gallery-02.webp", (p) =>
  p.extract({ left: 20, top: 900, width: 520, height: 340 }).resize({ width: 1000 }),
  84,
);

await toWebp("public/images/raw/photo-02.jpg", "restaurant-gallery-01.webp", (p) => p.resize({ width: 1200 }));
await toWebp("public/images/raw/photo-03.jpg", "restaurant-gallery-02.webp", (p) => p.resize({ width: 1200 }));
await toWebp("public/images/raw/photo-04.jpg", "restaurant-gallery-03.webp", (p) => p.resize({ width: 1200 }));
await toWebp("public/images/raw/photo-07.jpg", "restaurant-gallery-04.webp", (p) => p.resize({ width: 1400 }));
await toWebp("public/images/raw/post-food-b.jpg", "patio-cornhole-01.webp", (p) => p.resize({ width: 1000 }));
await toWebp("public/images/raw/post-halloween.jpg", "promo-halloween.webp", (p) => p.resize({ width: 1000 }), 80);
await toWebp("public/images/raw/photo-05.jpg", "promo-gameday.webp", (p) => p.resize({ width: 1000 }), 80);
await toWebp("public/images/raw/crop-apps.jpg", "food-gallery-03.webp", (p) => p.resize({ width: 1000 }), 84);
await toWebp("public/images/raw/crop-pizza.jpg", "food-gallery-04.webp", (p) => p.resize({ width: 1000 }), 84);
await toWebp("public/images/raw/rj-panel-3.jpg", "restaurant-exterior-day.webp", (p) => p.resize({ width: 900 }));
await toWebp("public/images/raw/rj-panel-4.jpg", "wings-platter-alt.webp", (p) => p.resize({ width: 900 }), 84);
await toWebp("public/images/raw/rj-panel-2.jpg", "restaurant-bar.webp", (p) => p.resize({ width: 900 }));
await toWebp("public/images/raw/rj-panel-1.jpg", "restaurant-tv.webp", (p) => p.resize({ width: 900 }));

console.log("\nDone optimizing images.");
