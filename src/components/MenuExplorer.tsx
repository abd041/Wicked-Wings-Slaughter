"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { business, menuCategoryVisuals, menuItems, type MenuCategory } from "@/lib/site";
import { SiteImage } from "./SiteImage";

const categories: { id: MenuCategory; title: string; subtitle: string }[] = [
  { id: "wings", title: "Wings & Chicken", subtitle: "The main event" },
  { id: "burgers", title: "Burgers", subtitle: "Big, bold bites" },
  { id: "starters", title: "Starters & Sides", subtitle: "Get things going" },
  { id: "pizza", title: "Pizza", subtitle: "Made for sharing" },
];

export function MenuExplorer() {
  const [category, setCategory] = useState<MenuCategory>("wings");
  const items = useMemo(() => menuItems.filter(item => item.category === category), [category]);
  const active = categories.find(item => item.id === category) ?? categories[0];
  const visual = menuCategoryVisuals[category];

  return (
    <section className="menu-section section-pad" id="menu" aria-labelledby="menu-heading">
      <div className="container">
        <div className="section-intro menu-intro">
          <div>
            <span className="eyebrow dark"><span className="mini-star">✳</span> MADE TO CRAVE</span>
            <h2 id="menu-heading" className="heading-xl">THE GOOD <em>STUFF.</em></h2>
          </div>
          <p>Hungry? Good. Here&apos;s a taste of what&apos;s cooking. Your full menu and current availability are just a click away.</p>
        </div>
        <div className="menu-panel">
          <div className="category-tabs" role="tablist" aria-label="Menu categories">
            {categories.map(({ id, title }) => (
              <button
                key={id}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-controls="menu-items"
                aria-selected={category === id}
                className={`category-tab ${category === id ? "active" : ""}`}
                onClick={() => setCategory(id)}
              >
                {title}
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="menu-content" role="tabpanel" id="menu-items" aria-labelledby={`tab-${category}`}>
            <div className="menu-content-head">
              <div>
                <span className="menu-kicker">ON THE MENU</span>
                <h3>{active.title}</h3>
              </div>
              <span className="menu-count">0{items.length} ITEMS</span>
            </div>
            {visual && (
              <div className="menu-visual">
                <SiteImage
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(max-width: 930px) 100vw, 520px"
                  className="menu-visual-img"
                />
              </div>
            )}
            <div className="menu-list">
              {items.map((item, index) => (
                <div className="menu-row" key={item.id}>
                  <span className="menu-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="menu-description">
                    <div className="menu-name-line">
                      <h4>{item.name}</h4>
                      {item.label && <span className="featured-badge">{item.label}</span>}
                    </div>
                    <p>{item.description}</p>
                  </div>
                  <span className="menu-price">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="menu-bottom">
              <span>Prices and availability are subject to change on Toast.</span>
              <a href={business.orderingUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                VIEW THE FULL MENU <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
