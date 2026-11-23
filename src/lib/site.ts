export const business = {
  name: "Wicked Wings Slaughter",
  shortName: "Wicked Wings",
  tagline: "Wings. Games. Good times.",
  telephone: "+15125208029",
  phoneDisplay: "(512) 520-8029",
  addressLine1: "615 W Slaughter Ln, Suite 108",
  addressLine2: "Austin, TX 78748",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=615+W+Slaughter+Ln+Suite+108+Austin+TX+78748",
  orderingUrl: "https://order.toasttab.com/online/wicked-wings-sports-bar-south-austin-615-w-slaughter-lane",
  facebookUrl: "https://www.facebook.com/profile.php?id=100063625898136",
  // Public listings show noon–2 AM daily; confirm these hours with the owner before production.
  hoursDisplay: "12 PM – 2 AM, every day",
};

export const brandImages = {
  logo: {
    src: "/images/wicked-wings-logo.webp",
    alt: "Wicked Wings official logo — devil chicken with pitchfork",
    width: 512,
    height: 512,
  },
  hero: {
    src: "/images/wicked-wings-hero.webp",
    alt: "Spread of Wicked Wings food on a red checkered tablecloth including wings, pizza, fries, and more",
    width: 1400,
    height: 1126,
  },
  interior: {
    src: "/images/restaurant-interior.webp",
    alt: "Guests celebrating inside Wicked Wings Slaughter with sports-bar neon and screens",
    width: 1400,
    height: 1400,
  },
  exterior: {
    src: "/images/restaurant-exterior.webp",
    alt: "Nighttime exterior of Wicked Wings Slaughter with seasonal decorations out front",
    width: 1400,
    height: 1400,
  },
  wings: {
    src: "/images/wings-platter.webp",
    alt: "Bone-in wings, fried chicken with fries, and pizza from Wicked Wings",
    width: 1100,
    height: 1100,
  },
  foodSpread: {
    src: "/images/burgers.webp",
    alt: "Philly-style sandwich, fried chicken, and appetizers from Wicked Wings",
    width: 1100,
    height: 990,
  },
} as const;

/** Local photos captured from the official Wicked Wings Slaughter Facebook page. */
export const socialPhotos = [
  {
    src: "/images/restaurant-interior.webp",
    alt: "Friends gathered for a celebration at Wicked Wings",
    caption: "The Wicked Wings crowd",
    position: "center",
    width: 1400,
    height: 1400,
  },
  {
    src: "/images/restaurant-gallery-01.webp",
    alt: "Draft taps and a football game on TV inside Wicked Wings",
    caption: "Game-day atmosphere",
    position: "center 35%",
    width: 1200,
    height: 1200,
  },
  {
    src: "/images/restaurant-gallery-02.webp",
    alt: "Guests at the draft beer bar inside Wicked Wings",
    caption: "Local faces, good times",
    position: "center 40%",
    width: 1200,
    height: 1200,
  },
  {
    src: "/images/food-gallery-01.webp",
    alt: "Full Wicked Wings food spread on a red checkered tablecloth",
    caption: "The full feast",
    position: "center",
    width: 1200,
    height: 2040,
  },
  {
    src: "/images/restaurant-exterior.webp",
    alt: "Wicked Wings Slaughter exterior at night",
    caption: "Find us on Slaughter",
    position: "center",
    width: 1400,
    height: 1400,
  },
  {
    src: "/images/wings-platter.webp",
    alt: "Wings, fried chicken, fries, and pizza from Wicked Wings",
    caption: "Wings & more",
    position: "center",
    width: 1100,
    height: 1100,
  },
  {
    src: "/images/patio-cornhole-01.webp",
    alt: "Guests on the Wicked Wings patio after a cornhole game",
    caption: "Patio nights",
    position: "center top",
    width: 1000,
    height: 1333,
  },
  {
    src: "/images/restaurant-gallery-03.webp",
    alt: "Bartender with bottles and a football game on TV at Wicked Wings",
    caption: "A neighborhood bar",
    position: "center 36%",
    width: 1200,
    height: 1200,
  },
] as const;

export type MenuCategory = "wings" | "burgers" | "starters" | "pizza";
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  featured?: boolean;
  label?: string;
};

/** Category visuals only when the photo clearly matches that category of food. */
export const menuCategoryVisuals: Partial<Record<MenuCategory, { src: string; alt: string; width: number; height: number }>> = {
  wings: {
    src: "/images/wings-platter.webp",
    alt: "Bone-in wings and fried chicken from Wicked Wings",
    width: 1100,
    height: 1100,
  },
  starters: {
    src: "/images/food-gallery-03.webp",
    alt: "Fried appetizers and dipping sauce from Wicked Wings",
    width: 1000,
    height: 875,
  },
  pizza: {
    src: "/images/food-gallery-04.webp",
    alt: "Pepperoni pizza with mushrooms and jalapeños from Wicked Wings",
    width: 1100,
    height: 715,
  },
  // No clean dedicated burger photo was available from the public Facebook feed.
};

/** Restaurant's publicly listed Toast pickup menu, checked 23 Nov 2026.
 *  These are display-only previews; always send orders to Toast for current availability & price.
 */
export const menuItems: MenuItem[] = [
  { id: "w12", name: "12 Bone-In Wings", description: "A dozen bone-in wings. Pick your sauce when you order.", price: "$19.99", category: "wings", featured: true, label: "FEATURED" },
  { id: "w6", name: "6 Bone-In Wings", description: "Crispy classics. Perfect for a quick wing fix.", price: "$12.99", category: "wings" },
  { id: "b8", name: "8 Boneless Wings", description: "All the bold flavor, without the bones.", price: "$14.99", category: "wings" },
  { id: "w24", name: "24 Bone-In Wings", description: "Bring the whole crew and share the goodness.", price: "$32.99", category: "wings" },
  { id: "pops", name: "Popcorn Chicken", description: "A small portion served with fries or tots.", price: "$9.99", category: "wings" },
  { id: "ko", name: "K.O. Burger", description: "Swiss, grilled onions, mushrooms, jalapeños, bacon, onion ring & fried egg.", price: "$15.99", category: "burgers", featured: true, label: "FEATURED" },
  { id: "buff", name: "Buffalo Burger", description: "Buffalo sauce and blue cheese bring the heat.", price: "$13.99", category: "burgers" },
  { id: "swiss", name: "Mushroom Swiss", description: "Swiss cheese, grilled mushrooms & onions.", price: "$13.99", category: "burgers" },
  { id: "byo", name: "Build Your Own Burger", description: "Make it your own — select toppings at checkout.", price: "$12.99", category: "burgers" },
  { id: "fries", name: "Loaded Waffle Fries", description: "Chili, queso, salsa, jalapeños, shredded cheese & sour cream.", price: "$8.99", category: "starters", featured: true },
  { id: "pickles", name: "Fried Pickle Chips", description: "A crunchy favorite for the table.", price: "$5.99", category: "starters" },
  { id: "queso", name: "Chips & Queso", description: "Chips and queso made for sharing.", price: "$7.99", category: "starters" },
  { id: "mush", name: "Fried Mushrooms", description: "Golden, crispy, and ready to dip.", price: "$6.99", category: "starters" },
  { id: "sticks", name: "Mozzarella Sticks", description: "Six pieces, served with marinara.", price: "$7.99", category: "starters" },
  { id: "meat", name: "Wicked Meat Pizza", description: "Large · Pepperoni, Canadian bacon, beef, sausage & cheese.", price: "$17.99", category: "pizza", featured: true },
  { id: "philly", name: "Philly Cheese Steak Pizza", description: "Large · Philly, mushrooms, onions, peppers & cheese.", price: "$18.99", category: "pizza" },
  { id: "veg", name: "Veggie Pizza", description: "Large · Onions, mushrooms, olives, peppers, tomato & cheese.", price: "$17.99", category: "pizza" },
  { id: "hawaiian", name: "Hawaiian Pizza", description: "Large · Canadian bacon, pineapple & cheese.", price: "$14.99", category: "pizza" },
  { id: "classic", name: "Classic Pizza", description: "Small pizza, ready for your favorite toppings.", price: "$9.99", category: "pizza" },
];

export const wingFlavors = [
  "Buffalo", "Garlic Parmesan", "Mango Habanero", "Lemon Pepper", "Hot Honey", "Wicked Hot", "Sweet Teriyaki", "Jamaican Jerk",
];
