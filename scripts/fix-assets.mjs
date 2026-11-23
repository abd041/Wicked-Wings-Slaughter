import fs from "node:fs";
import sharp from "sharp";

await sharp("public/images/raw/profile-logo.jpg")
  .resize({ width: 512, height: 512, fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .webp({ quality: 92 })
  .toFile("public/images/wicked-wings-logo.webp");

await sharp("public/images/raw/cover-food-full.jpg")
  .extract({ left: 20, top: 480, width: 500, height: 500 })
  .resize({ width: 1100 })
  .webp({ quality: 85 })
  .toFile("public/images/wings-platter.webp");

// Appetizer tray used as general food / starters visual (not labeled as a specific burger dish)
await sharp("public/images/raw/cover-food-full.jpg")
  .extract({ left: 480, top: 480, width: 500, height: 450 })
  .resize({ width: 1100 })
  .webp({ quality: 85 })
  .toFile("public/images/burgers.webp");

await sharp("public/images/raw/cover-food-full.jpg")
  .extract({ left: 30, top: 40, width: 470, height: 420 })
  .resize({ width: 1100 })
  .webp({ quality: 85 })
  .toFile("public/images/food-gallery-04.webp");

await sharp("public/images/raw/rj-panel-4.jpg")
  .resize({ width: 1100 })
  .webp({ quality: 85 })
  .toFile("public/images/wings-platter-alt.webp");

for (const f of [
  "wicked-wings-logo.webp",
  "wings-platter.webp",
  "burgers.webp",
  "food-gallery-04.webp",
  "wings-platter-alt.webp",
]) {
  const m = await sharp(`public/images/${f}`).metadata();
  console.log(f, `${m.width}x${m.height}`, fs.statSync(`public/images/${f}`).size);
}
