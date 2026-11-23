import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const RAW = path.resolve("public/images/raw");
const OUT = path.resolve("public/images");
await fs.mkdir(RAW, { recursive: true });
await fs.mkdir(OUT, { recursive: true });

/** Public Facebook CDN URLs captured from the official Wicked Wings Slaughter page (logged-out view). */
const downloads = [
  {
    id: "cover-hero",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Page cover photo — food collage (wings + appetizers)",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/802821253_1655541909909990_10970244905623473_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1080x2340&ctp=s960x960&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=1thCUrxgyc4Q7kNvwHcLsDa&_nc_oc=AdoZqNR3Gl0cag9dRDq4KwW8Zvx29AP19sWANyUgzECPR-RxWaQVye5xZxOB6vs7RNM&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQSPuO0KirNlD4HT4sYh_JUhkqfWmpV96lwKnERYuibvvQ&oe=6B0A2736",
  },
  {
    id: "profile-logo",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Official profile picture / Wicked Wings logo",
    url: "https://scontent.flhe42-1.fna.fbcdn.net/v/t39.30808-1/913163700_1729801822483998_3678236848827262636_n.avif?stp=dst-jpg_tt6&cstp=mx1073x1074&ctp=s200x200&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=e9I3tFVIz1AQ7kNvwFdvlb6&_nc_oc=Adq-iR8uHY3JxYrTmoLtNSzpqaRx3I9CFW0xNJNUjCL-tSo880ZResoFBSnL4g9aoV8&_nc_zt=24&_nc_ht=scontent.flhe42-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQSjYPnZnJruGWnTZe0HLBU9F_DlEAzUJ8QoYtRv7Q5_pw&oe=6B0A40D3",
  },
  {
    id: "photo-01",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image (celebration / crowd)",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/866524752_1705234778274036_5300404331212172299_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_tt6&cstp=mx1536x1536&ctp=s160x160&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=QnJz6eowd_4Q7kNvwEHZXPl&_nc_oc=AdqC1C-lBxRJksxhwUpBt4-spsmCo7MKcoLbT_xg9yW_fJh12PfeAsBlF61nz8WCSNc&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQQIuR2dIW-65l3XCOmxWuBl93WohOgkoVQmQfhK88Uybw&oe=6B0A1B32",
  },
  {
    id: "photo-02",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image (bar / atmosphere)",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/864158585_1702848841845963_1082956853525198743_n.jpg?stp=c0.119.1086.1086a_dst-jpg_tt6&cstp=mx1086x1086&ctp=s160x160&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=VlWzQu6VRsMQ7kNvwH9uNYJ&_nc_oc=AdpeEiWO6tHZumKxQtaFJtscccijcZ-zYsdLn1MuF_N9xRCzRA4DdD2ynNMgHLublCo&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQQcLLQ72nZJNidr5FtqhndbeU63TUeomjDXlguDp30DRQ&oe=6B0A3F9A",
  },
  {
    id: "photo-03",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image (staff / interior)",
    url: "https://scontent.flhe42-1.fna.fbcdn.net/v/t39.30808-6/860072388_1701572861973561_6151101246603636805_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_tt6&cstp=mx1536x1536&ctp=s160x160&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=t182IDQ8ZXkQ7kNvwHhQv9_&_nc_oc=Ado5OwMfFwwRJGfA8-6M_xjhCJ_5yytboOE5a5H3rAsqCzuwnwvH1taENh9HmFXCCU4&_nc_zt=23&_nc_ht=scontent.flhe42-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQQOE0bT9kJ3-IZbc_izVLUqOetL4SK9cZT1SgLovk8HEg&oe=6B0A4567",
  },
  {
    id: "photo-04",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image (bartender / bottles)",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/855649714_1696584752472372_6786958378709396358_n.jpg?stp=c217.0.1103.1103a_dst-jpg_tt6&cstp=mx1103x1103&ctp=s160x160&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=YYSLhImG0MIQ7kNvwHwNc1k&_nc_oc=AdpJ_MeeV8K_ErDUbuS4E6W_fdsqkvak93gUOH-wQSwhad4U76XLd3lm7md1zDzibdU&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQQd3PFtz_vEipaHpv3cMCMOzi8bnzoPWl8o6JfVZSe3rw&oe=6B0A360B",
  },
  {
    id: "photo-05",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image (game-day promo poster)",
    url: "https://scontent.flhe42-2.fna.fbcdn.net/v/t39.30808-6/855503331_1694112079386306_4701759234965241885_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s160x160&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=nmrHJ7pKy2oQ7kNvwFB2fqQ&_nc_oc=Adp4jDCCOfQpbHN-5_JxqT6Fh3BCN6e7H1mdzAGMarrHFmaLQINcXOTPgklqGNL8EDs&_nc_zt=23&_nc_ht=scontent.flhe42-2.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQT5LIjnFncpBmarC6rDQjABYwyzB2fAjUfjAbvlgTCYFQ&oe=6B0A4384",
  },
  {
    id: "photo-06",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image",
    url: "https://scontent.flhe42-2.fna.fbcdn.net/v/t39.30808-6/836871446_1682512503879597_3469659436379655738_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s160x160&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=AY6hwSIjlNoQ7kNvwEyZ1ZX&_nc_oc=AdoEnfY6aOcEBqVwYF1GyjRnr2Qupv827pxVYfquLVDVOwWUJKOGRlLXkbgibMTwjeQ&_nc_zt=23&_nc_ht=scontent.flhe42-2.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQQRt1YYhZd7tUJDF30IvH9BxpaCx7Gwc30wenmHI9al5A&oe=6B0A37E4",
  },
  {
    id: "photo-07",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/825273621_1670598898404291_8746625405824557777_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s160x160&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=niBygpQXowEQ7kNvwE_moA8&_nc_oc=AdpPfIzKAloVBVCpIivjUxs06p10pcOcuTkuCO4LfoYQUCV0mlcOXEhdHAoySVsDIFs&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQRUj23Bn1c3z9M8WghD5hr_IlN5vRIZ5EFsS_L0DUT0Qw&oe=6B0A3E59",
  },
  {
    id: "photo-08",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid image",
    url: "https://scontent.flhe42-2.fna.fbcdn.net/v/t39.30808-6/799388106_1657389589725222_8340630652872750913_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s160x160&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=g_JIzOPOE_8Q7kNvwHCqSR7&_nc_oc=AdpTz5fQNIMTyuYHPo02ekuzbUv87OYvO0FGKzy7ZXy52JIRnhUGSSJwESnsXKHxp-8&_nc_zt=23&_nc_ht=scontent.flhe42-2.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQSUnxNhRyyiPGLEH0-zLZseViYDlyuOlqPd80SAu6a2UQ&oe=6B0A4374",
  },
  {
    id: "photo-09",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Photos grid / recent",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/926302077_1736545071809673_6896318874743256160_n.jpg?stp=dst-jpg_tt6&cstp=mx1254x1254&ctp=s160x160&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=8a6525&_nc_ohc=mQ5VA-L5TIUQ7kNvwHcQvqI&_nc_oc=Adpdmc43ZkZFyr4Z46lulUpwFffQXnvf2cYO-to9siuT-6uBRDL3PxMcki87Fmby-Fw&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=r9qDhE6ptqKfFXnGSHeb4w&_nc_ss=78289&oh=00_AQQQRAbEUv6Qt0lYeBQ7OBatoJEYB7GQxiOyTQ4XYSndfQ&oe=6B0A5070",
  },
  {
    id: "post-halloween",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Halloween event promotional graphic from posts feed",
    url: "https://scontent.flhe42-1.fna.fbcdn.net/v/t39.30808-6/859899495_1700546548742859_3009367004419454612_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1536&ctp=p526x296&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=75d36f&_nc_ohc=dB66Xds_1awQ7kNvwF-Y7Iw&_nc_oc=AdoIzyEF1kGw5B8pc2itsesml6MA-Nr7iryPe01FPwPcD-Kcw2MJkvnKbmG8tYZqen4&_nc_zt=23&_nc_ht=scontent.flhe42-1.fna&_nc_gid=5zGjJiGX1I2AJ86GF_G7qA&_nc_ss=78289&oh=00_AQRSh-x-NhTycC-k42d3G9VSlvfZ_n6AIFc0YmZFlibZBA&oe=6B0A3EAF",
  },
  {
    id: "post-food-a",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Post feed food / venue photo",
    url: "https://scontent.flhe42-2.fna.fbcdn.net/v/t39.30808-6/784782482_28714724541446741_2716935309379514992_n.jpg?stp=dst-jpg_tt6&cstp=mx1054x1492&ctp=s720x720&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FBfVRCLReUsQ7kNvwGfgPE8&_nc_oc=AdpJy1pqpGZJrZFOnhR5Qt4Prh7ED8imQ_bVEy0HUC3m2zpiIxRHEDy6SPkum6uZVwk&_nc_zt=23&_nc_ht=scontent.flhe42-2.fna&_nc_gid=RDNp1yMGbbG-3yiwgYxh9A&_nc_ss=7a289&oh=00_AQQ1dPs-zp74wpDskm9GaVjHaX54ByQQ8b_HuwQLx2WnVA&oe=6B0A2AEE",
  },
  {
    id: "post-food-b",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Post feed food / venue photo",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/773643415_1627519046045610_825055654774042738_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4ZBPeOOlkLsQ7kNvwFamny1&_nc_oc=Adpse_i70xZWHBr8LpgeCCne9c8IBNQ777yd3SPJ_75v_Q5qp7ZZi2xcHT-P2e2sphc&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=RDNp1yMGbbG-3yiwgYxh9A&_nc_ss=7a289&oh=00_AQR07OfMoQHHLOSkZip1Nf3hf7GCnBRrUgyumb2VxfHwHg&oe=6B0A4293",
  },
  {
    id: "post-food-c",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Post feed food / venue photo",
    url: "https://scontent.flhe42-2.fna.fbcdn.net/v/t39.30808-6/773810798_1627519106045604_8131820782282272767_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rNzn5se5B-sQ7kNvwFpAiE3&_nc_oc=AdounucKOPFIifz9-mlNaApdXRwZyLTKEf7yagf5ePAblzOlEP7zDhBenSOPf0wJZPA&_nc_zt=23&_nc_ht=scontent.flhe42-2.fna&_nc_gid=RDNp1yMGbbG-3yiwgYxh9A&_nc_ss=7a289&oh=00_AQSFhdTc3X0NsNfhxYq73WvKNs2Pcg4Ye2sywzzpNp22Eg&oe=6B0A338F",
  },
  {
    id: "post-food-d",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Post feed food / venue photo",
    url: "https://scontent.flhe42-2.fna.fbcdn.net/v/t39.30808-6/743876869_28318227477763118_3221826250796936413_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1110&ctp=s590x590&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p-kCM8rpACYQ7kNvwG96fRA&_nc_oc=AdrBDozUYpeeHKKUeHbrT_GoX9QADtXxdwsDgu6Zeh_ygdUb_vAtZPmQN0ZY3CuuZ6g&_nc_zt=23&_nc_ht=scontent.flhe42-2.fna&_nc_gid=SWMGbS02IcPyU6vMcLlxKA&_nc_ss=7a289&oh=00_AQRt56-W6cUs4tzdVRCi8Rgl8XkH09fl4TijzRIVLUq65A&oe=6B0A2388",
  },
  {
    id: "post-food-e",
    sourcePage: "https://www.facebook.com/people/Wicked-Wings-Slaughter/100063625898136/",
    note: "Post feed food / venue photo",
    url: "https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/741360804_28284259761159890_2244698705319539261_n.jpg?stp=dst-jpg_tt6&cstp=mx1220x1440&ctp=s590x590&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zfhXlK116EAQ7kNvwEbhqtN&_nc_oc=AdpuLvzqF0Q6H1zs7bK9KPaAL6cr3NHKgzzo5-TTqQXEqRbSl8Pracg8hORllkB8Rek&_nc_zt=23&_nc_ht=scontent.flhe5-1.fna&_nc_gid=SWMGbS02IcPyU6vMcLlxKA&_nc_ss=7a289&oh=00_AQTJCW6Pbcr4mEAoYrUSq0rurRyOPy4CY9ZwI__w4RNCmQ&oe=6B0A4C54",
  },
];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function fetchBuffer(url) {
  const candidates = [url];
  // Prefer largest available transform when Facebook returns a tiny thumb.
  try {
    const u = new URL(url);
    if (u.searchParams.get("ctp") === "s160x160") {
      const big = new URL(url);
      big.searchParams.set("ctp", "s960x960");
      candidates.unshift(big.toString());
    }
    if (u.searchParams.get("ctp") === "s200x200") {
      const big = new URL(url);
      big.searchParams.set("ctp", "s960x960");
      candidates.unshift(big.toString());
    }
    // Also try without ctp resize for originals when mx dimensions are present.
    if (u.searchParams.has("cstp")) {
      const full = new URL(url);
      const mx = full.searchParams.get("cstp")?.match(/mx(\d+)x(\d+)/);
      if (mx) {
        full.searchParams.set("ctp", `s${mx[1]}x${mx[2]}`);
        candidates.unshift(full.toString());
      }
    }
  } catch {
    /* keep original */
  }

  let lastErr;
  for (const candidate of candidates) {
    try {
      const res = await fetch(candidate, {
        headers: {
          "User-Agent": UA,
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
          Referer: "https://www.facebook.com/",
        },
      });
      if (!res.ok) {
        lastErr = new Error(`HTTP ${res.status} for ${candidate.slice(0, 80)}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 2000) {
        lastErr = new Error(`Too small (${buf.length}b)`);
        continue;
      }
      return { buf, usedUrl: candidate };
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr ?? new Error("Download failed");
}

const manifest = [];

for (const item of downloads) {
  process.stdout.write(`Downloading ${item.id}... `);
  try {
    const { buf, usedUrl } = await fetchBuffer(item.url);
    const rawPath = path.join(RAW, `${item.id}.bin`);
    await fs.writeFile(rawPath, buf);
    const meta = await sharp(buf).metadata();
    console.log(`${meta.width}x${meta.height} ${meta.format} (${buf.length} bytes)`);
    manifest.push({
      id: item.id,
      note: item.note,
      sourcePage: item.sourcePage,
      downloadUrl: usedUrl,
      width: meta.width,
      height: meta.height,
      format: meta.format,
      bytes: buf.length,
      ok: true,
    });
  } catch (err) {
    console.log(`FAILED: ${err.message}`);
    manifest.push({ id: item.id, note: item.note, sourcePage: item.sourcePage, ok: false, error: String(err.message) });
  }
}

await fs.writeFile(path.join(RAW, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("\nDone. Wrote public/images/raw/manifest.json");
