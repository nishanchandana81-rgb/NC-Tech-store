/* ============================================================
   NC GADGETS — Storefront application (vanilla JavaScript)
   ------------------------------------------------------------
   CONFIG — edit the values below to adapt the store.
   ============================================================ */
const CONFIG = {
  brandName: "NC GADGETS",
  currency: "LKR",
  whatsappNumber: "", // e.g. "94771234567" (country code + number, no +). Leave empty to show a contact notice.
  whatsappMessage: "Hello! I'm interested in your gadgets. Could you please share more details?",
  storeEmail: "hello@ncgadgets.lk",
};

/* ============================================================
   DEMO CATALOGUE — replace with real inventory data later.
   price / oldPrice are demo values in Sri Lankan Rupees.
   ============================================================ */
const CATEGORIES = [
  { id: "cases",      name: "Phone Back Covers",  desc: "Slim, tough & stylish protection.", img: "images/case-clear.jpg" },
  { id: "chargers",   name: "Chargers & Cables",  desc: "Fast, reliable power for every device.", img: "images/charger.jpg" },
  { id: "watches",    name: "Smart Watches",      desc: "Track fitness, calls & notifications.", img: "images/smartwatch.jpg" },
  { id: "earbuds",    name: "Wireless Earbuds",   desc: "Crystal-clear sound, all-day comfort.", img: "images/earbuds.jpg" },
  { id: "powerbanks", name: "Power Banks",        desc: "Never run out of battery on the go.", img: "images/powerbank.jpg" },
  { id: "protectors", name: "Screen Protectors",  desc: "9H tempered glass, bubble-free fit.", img: "images/glass.jpg" },
  { id: "speakers",   name: "Bluetooth Speakers", desc: "Big sound in a pocket-sized body.", img: "images/speaker.jpg" },
  { id: "gaming",     name: "Gaming Accessories", desc: "Low-latency gear for mobile gamers.", img: "images/gaming-earbuds.jpg" },
];

const PRODUCTS = [
  { id: 1,  name: "Transparent Shockproof Phone Case", category: "cases", price: 1490, oldPrice: 1990, img: "images/case-clear.jpg",
    colors: ["Clear", "Pink"], models: ["iPhone 13", "iPhone 14", "iPhone 15", "Samsung S23", "Samsung S24"],
    stock: "in", date: "2026-10-05", isNew: true,  isBestSeller: false,
    desc: "Crystal-clear hard case with shockproof corners. Show off your phone while keeping it safe from drops and scratches." },
  { id: 2,  name: "Premium Black Silicone Case", category: "cases", price: 1290, oldPrice: null, img: "images/case-black.jpg",
    colors: ["Black"], models: ["iPhone 13", "iPhone 14", "iPhone 15", "Samsung S23"],
    stock: "in", date: "2026-06-18", isNew: false, isBestSeller: true,
    desc: "Soft-touch matte silicone with a microfibre inner lining. Feels great in hand and resists fingerprints." },
  { id: 3,  name: "Marble Glitter Phone Case", category: "cases", price: 1690, oldPrice: null, img: "images/case-clear.jpg",
    colors: ["Pink Marble"], models: ["iPhone 13", "iPhone 14", "iPhone 15"],
    stock: "low", date: "2026-09-22", isNew: false, isBestSeller: false,
    desc: "Eye-catching marble glitter finish with raised camera protection. For those who like a little sparkle." },
  { id: 4,  name: "20W USB-C Fast Charger", category: "chargers", price: 2490, oldPrice: 3200, img: "images/charger.jpg",
    colors: ["White"], models: [],
    stock: "in", date: "2026-05-11", isNew: false, isBestSeller: true,
    desc: "Compact 20W USB-C wall adapter. Charges compatible phones to 50% in about 30 minutes. Includes 1m cable." },
  { id: 5,  name: "Braided Fast-Charging USB-C Cable", category: "chargers", price: 990, oldPrice: null, img: "images/cable.jpg",
    colors: ["Black"], models: [],
    stock: "in", date: "2026-04-02", isNew: false, isBestSeller: true,
    desc: "Double-braided nylon cable rated for fast charging and data sync. Tested to survive 30,000+ bends." },
  { id: 6,  name: "4-Port Multi Charging Adapter", category: "chargers", price: 3290, oldPrice: 4100, img: "images/charger.jpg",
    colors: ["White"], models: [],
    stock: "in", date: "2026-08-30", isNew: true, isBestSeller: false,
    desc: "Charge up to four devices at once with smart power distribution. Ideal for families and travel." },
  { id: 7,  name: "NC Air Wireless Earbuds", category: "earbuds", price: 6990, oldPrice: 8990, img: "images/earbuds.jpg",
    colors: ["White"], models: [],
    stock: "in", date: "2026-07-14", isNew: false, isBestSeller: true,
    desc: "True wireless earbuds with crisp sound, touch controls and a pocketable charging case. Up to 20 hours total playtime." },
  { id: 8,  name: "Premium Smart Watch", category: "watches", price: 12500, oldPrice: null, img: "images/smartwatch.jpg",
    colors: ["Black"], models: [],
    stock: "in", date: "2026-06-25", isNew: false, isBestSeller: false,
    desc: "Full-touch AMOLED display smartwatch with heart-rate tracking, sleep monitoring, Bluetooth calling and 7-day battery life." },
  { id: 9,  name: "10000mAh Portable Power Bank", category: "powerbanks", price: 4490, oldPrice: 5500, img: "images/powerbank.jpg",
    colors: ["Space Grey"], models: [],
    stock: "in", date: "2026-03-19", isNew: false, isBestSeller: false,
    desc: "Slim aluminium 10000mAh power bank with dual USB output. Charges most phones twice over." },
  { id: 10, name: "Slim 5000mAh Power Bank", category: "powerbanks", price: 2990, oldPrice: null, img: "images/powerbank2.jpg",
    colors: ["Silver"], models: [],
    stock: "in", date: "2026-10-12", isNew: true, isBestSeller: false,
    desc: "Credit-card-sized 5000mAh emergency charger that slips into any pocket or wallet." },
  { id: 11, name: "Tempered Glass Screen Protector", category: "protectors", price: 890, oldPrice: null, img: "images/glass.jpg",
    colors: ["Clear"], models: ["iPhone 13", "iPhone 14", "iPhone 15"],
    stock: "in", date: "2026-05-05", isNew: false, isBestSeller: true,
    desc: "9H hardness tempered glass with oleophobic coating. Bubble-free installation kit included." },
  { id: 12, name: "ESD Premium Glass — 2 Pack", category: "protectors", price: 1190, oldPrice: 1490, img: "images/glass2.jpg",
    colors: ["Clear"], models: ["iPhone 14", "iPhone 15"],
    stock: "low", date: "2026-10-08", isNew: true, isBestSeller: false,
    desc: "Two full-coverage ESD tempered glass protectors with camera lens films. Full glue, edge-to-edge fit." },
  { id: 13, name: "Portable Bluetooth Speaker", category: "speakers", price: 5990, oldPrice: null, img: "images/speaker.jpg",
    colors: ["Black/Red"], models: [],
    stock: "in", date: "2026-02-27", isNew: false, isBestSeller: true,
    desc: "Room-filling 360° sound with deep bass, TF card and USB playback. Up to 8 hours on a single charge." },
  { id: 14, name: "Adjustable Aluminium Phone Stand", category: "accessories", price: 2190, oldPrice: null, img: "images/stand.jpg",
    colors: ["Black"], models: [],
    stock: "in", date: "2026-10-15", isNew: true, isBestSeller: false,
    desc: "Height- and angle-adjustable desk stand for phones and tablets. Weighted anti-slip base, charging cut-out." },
  { id: 15, name: "RGB Gaming Earbuds", category: "gaming", price: 7490, oldPrice: 8990, img: "images/gaming-earbuds.jpg",
    colors: ["Black"], models: [],
    stock: "in", date: "2026-10-01", isNew: true, isBestSeller: false,
    desc: "Low-latency gaming earbuds with ENC mics and RGB charging case. Hear every footstep before your enemy moves." },
  { id: 16, name: "Pro Gaming Earbuds — Elite Edition", category: "gaming", price: 8990, oldPrice: null, img: "images/gaming-earbuds2.jpg",
    colors: ["Yellow/Black"], models: [],
    stock: "out", date: "2026-09-10", isNew: false, isBestSeller: false,
    desc: "Tournament-grade wireless gaming earbuds with 45ms ultra-low latency and dual-mode Bluetooth." },
];

/* "accessories" is rendered inside the stand card but not listed as a
   storefront category tile — map it to chargers for filtering purposes. */
const CATEGORY_ALIASES = { accessories: "chargers" };

/* ============================================================
   State + storage
   ============================================================ */
const STORE_KEYS = { cart: "ncg_cart_v1", wishlist: "ncg_wishlist_v1" };

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function saveJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

let cart = loadJSON(STORE_KEYS.cart, []);       // [{id, qty, model, color}]
let wishlist = loadJSON(STORE_KEYS.wishlist, []); // [id]

const filters = { search: "", category: "all", maxPrice: 15000, sort: "featured" };
let wishlistOnly = false;

/* ============================================================
   Helpers
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function formatLKR(amount) {
  return "Rs. " + Number(amount).toLocaleString("en-LK");
}
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function catName(id) {
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.name : id;
}
function discountPct(p) {
  return p.oldPrice && p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
}
function stockLabel(s) {
  return s === "in" ? "In Stock" : s === "low" ? "Low Stock — Order Soon" : "Out of Stock";
}
const FALLBACK_IMG = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='#F1F5F9'/><g fill='none' stroke='#CBD5E1' stroke-width='6'><rect x='130' y='110' width='140' height='180' rx='20'/><circle cx='200' cy='285' r='8'/></g><text x='200' y='340' font-family='sans-serif' font-size='18' fill='#94A3B8' text-anchor='middle'>Image coming soon</text></svg>`
);
function guardImage(img) {
  img.addEventListener("error", () => {
    if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
  }, { once: true });
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ============================================================
   Rendering — categories
   ============================================================ */
function renderCategories() {
  const grid = $("#categoryGrid");
  grid.innerHTML = CATEGORIES.map(c => `
    <button class="category-card reveal" data-category="${c.id}" aria-label="Shop ${escapeHTML(c.name)}">
      <img src="${c.img}" alt="${escapeHTML(c.name)}" loading="lazy">
      <div class="category-body">
        <h3>${escapeHTML(c.name)}</h3>
        <p>${escapeHTML(c.desc)}</p>
        <span class="category-arrow">EXPLORE
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </button>`).join("");
  $$("img", grid).forEach(guardImage);
  observeReveals(grid);
}

/* ============================================================
   Rendering — product cards (shared template)
   ============================================================ */
function productCardHTML(p) {
  const pct = discountPct(p);
  const wished = wishlist.includes(p.id);
  const dots = (p.colors || []).map(c =>
    `<span class="swatch-dot" title="${escapeHTML(c)}" style="background:${colorToHex(c)}"></span>`).join("");
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="product-media" data-action="view" role="button" tabindex="0" aria-label="View ${escapeHTML(p.name)} details">
      <img src="${p.img}" alt="${escapeHTML(p.name)}" loading="lazy">
      ${pct ? `<span class="badge-discount">-${pct}%</span>` : ""}
      ${p.isNew ? `<span class="badge-tag">NEW</span>` : p.isBestSeller ? `<span class="badge-tag">BEST SELLER</span>` : ""}
      <button class="wish-btn ${wished ? "active" : ""}" data-action="wish" aria-label="${wished ? "Remove from" : "Add to"} wishlist" aria-pressed="${wished}">
        <svg viewBox="0 0 24 24" fill="${wished ? "#EF4444" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </button>
      <button class="quick-view" data-action="view">QUICK VIEW</button>
    </div>
    <div class="product-info">
      <span class="product-cat">${escapeHTML(catName(CATEGORY_ALIASES[p.category] || p.category))}</span>
      <h3 class="product-name" data-action="view">${escapeHTML(p.name)}</h3>
      ${dots ? `<div class="product-colors">${dots}</div>` : ""}
      <span class="stock ${p.stock}">${stockLabel(p.stock)}</span>
      <div class="product-price-row">
        <span class="price">${formatLKR(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatLKR(p.oldPrice)}</span>` : ""}
      </div>
      <button class="add-cart" data-action="add" ${p.stock === "out" ? "disabled" : ""}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        ${p.stock === "out" ? "OUT OF STOCK" : "ADD TO CART"}
      </button>
    </div>
  </article>`;
}
function colorToHex(name) {
  const map = { "Black": "#111827", "White": "#F8FAFC", "Clear": "#E2E8F0", "Pink": "#F9A8D4", "Pink Marble": "#F5D0FE", "Silver": "#C0C6CE", "Space Grey": "#4B5563", "Black/Red": "#991B1B", "Yellow/Black": "#EAB308" };
  return map[name] || "#CBD5E1";
}

/* ============================================================
   Filtering / sorting / shop grid
   ============================================================ */
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (wishlistOnly) list = list.filter(p => wishlist.includes(p.id));
  if (filters.category !== "all") list = list.filter(p => (CATEGORY_ALIASES[p.category] || p.category) === filters.category);
  if (filters.search) {
    const q = filters.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || catName(p.category).toLowerCase().includes(q));
  }
  list = list.filter(p => p.price <= filters.maxPrice);
  switch (filters.sort) {
    case "price-asc":  list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "newest":     list.sort((a, b) => new Date(b.date) - new Date(a.date)); break;
  }
  return list;
}

function renderShop() {
  const grid = $("#productGrid");
  const list = getFilteredProducts();
  const empty = $("#emptyState");

  grid.innerHTML = list.map(productCardHTML).join("");
  $$("img", grid).forEach(guardImage);
  empty.hidden = list.length > 0;
  grid.hidden = list.length === 0;

  const scope = wishlistOnly ? "in your wishlist" : "match your filters";
  $("#resultCount").textContent = list.length
    ? `Showing ${list.length} product${list.length > 1 ? "s" : ""} ${scope}`
    : "";

  const filterActive = filters.category !== "all" || filters.search || filters.maxPrice < 15000 || wishlistOnly;
  $("#activeFilter").hidden = !filterActive;
  if (filterActive) {
    const parts = [];
    if (wishlistOnly) parts.push("Wishlist");
    if (filters.category !== "all") parts.push(catName(filters.category));
    if (filters.search) parts.push(`“${filters.search}”`);
    if (filters.maxPrice < 15000) parts.push(`under ${formatLKR(filters.maxPrice)}`);
    $("#activeFilterText").textContent = "Filtering: " + parts.join(" · ");
  }
}

function clearFilters() {
  filters.search = ""; filters.category = "all"; filters.maxPrice = 15000; wishlistOnly = false;
  $("#searchInput").value = "";
  $("#priceRange").value = 15000;
  $("#priceLabel").textContent = formatLKR(15000);
  renderShop();
}

/* ============================================================
   Deals / arrivals / best sellers
   ============================================================ */
function renderDeals() {
  const deals = PRODUCTS.filter(p => discountPct(p) > 0).slice(0, 4);
  $("#dealsGrid").innerHTML = deals.map(p => `
    <article class="deal-card reveal" data-id="${p.id}">
      <span class="deal-off">-${discountPct(p)}%</span>
      <div class="deal-media" data-action="view" role="button" tabindex="0" aria-label="View ${escapeHTML(p.name)}">
        <img src="${p.img}" alt="${escapeHTML(p.name)}" loading="lazy">
      </div>
      <div class="deal-info">
        <h3 data-action="view">${escapeHTML(p.name)}</h3>
        <div class="deal-prices">
          <span class="price">${formatLKR(p.price)}</span>
          <span class="price-old">${formatLKR(p.oldPrice)}</span>
        </div>
        <p class="deal-saves">You save ${formatLKR(p.oldPrice - p.price)}</p>
      </div>
    </article>`).join("");
  $$("#dealsGrid img").forEach(guardImage);
  observeReveals($("#dealsGrid"));
}
function renderRails() {
  const rail = (sel, items) => {
    const el = $(sel);
    el.innerHTML = items.map(productCardHTML).join("");
    $$("img", el).forEach(guardImage);
  };
  rail("#newArrivalsRail", PRODUCTS.filter(p => p.isNew));
  rail("#bestSellersRail", PRODUCTS.filter(p => p.isBestSeller));
}

/* ============================================================
   Cart
   ============================================================ */
const cartLineKey = (id, model, color) => `${id}::${model || ""}::${color || ""}`;

function addToCart(id, qty = 1, model = null, color = null) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product || product.stock === "out") return;
  qty = Math.max(1, Math.min(10, Math.floor(qty) || 1));

  if (product.models && product.models.length && !model) model = product.models[0];
  if (product.colors && product.colors.length && !color) color = product.colors[0];

  const key = cartLineKey(id, model, color);
  const existing = cart.find(item => cartLineKey(item.id, item.model, item.color) === key);
  if (existing) existing.qty = Math.min(10, existing.qty + qty);
  else cart.push({ id, qty, model, color });

  saveJSON(STORE_KEYS.cart, cart);
  updateCartUI();
  showToast(`${product.name} added to cart`);
  const badge = $("#cartCount");
  badge.classList.add("pop");
  setTimeout(() => badge.classList.remove("pop"), 350);
}

function setCartQty(key, delta) {
  const item = cart.find(i => cartLineKey(i.id, i.model, i.color) === key);
  if (!item) return;
  item.qty = Math.max(1, Math.min(10, item.qty + delta));
  saveJSON(STORE_KEYS.cart, cart);
  updateCartUI();
}
function removeFromCart(key) {
  cart = cart.filter(i => cartLineKey(i.id, i.model, i.color) !== key);
  saveJSON(STORE_KEYS.cart, cart);
  updateCartUI();
}
function cartTotals() {
  let subtotal = 0, count = 0;
  cart.forEach(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return;
    subtotal += p.price * item.qty;
    count += item.qty;
  });
  return { subtotal, count };
}

function updateCartUI() {
  const { subtotal, count } = cartTotals();
  const badge = $("#cartCount");
  badge.textContent = count;
  badge.hidden = count === 0;
  $("#drawerCount").textContent = count ? `(${count} item${count > 1 ? "s" : ""})` : "";

  const box = $("#cartItems");
  if (!cart.length) {
    box.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <h4>Your cart is empty</h4>
        <p>Add some gadgets and they will appear here.</p>
      </div>`;
  } else {
    box.innerHTML = cart.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return "";
      const key = cartLineKey(item.id, item.model, item.color);
      const variant = [item.model, item.color].filter(Boolean).join(" · ");
      return `
      <div class="cart-item">
        <img src="${p.img}" alt="${escapeHTML(p.name)}">
        <div>
          <h4>${escapeHTML(p.name)}</h4>
          ${variant ? `<p class="ci-variant">${escapeHTML(variant)}</p>` : ""}
          <p class="ci-price">${formatLKR(p.price)} × ${item.qty}</p>
        </div>
        <div class="ci-controls">
          <div class="qty-mini">
            <button data-cart="dec" data-key="${escapeHTML(key)}" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button data-cart="inc" data-key="${escapeHTML(key)}" aria-label="Increase quantity">+</button>
          </div>
          <button class="ci-remove" data-cart="remove" data-key="${escapeHTML(key)}">Remove</button>
        </div>
      </div>`;
    }).join("");
    $$("img", box).forEach(guardImage);
  }

  $("#cartSubtotal").textContent = formatLKR(subtotal);
  $("#cartTotal").textContent = formatLKR(Math.max(0, subtotal));
  $("#cartFooter").style.display = cart.length ? "" : "none";
}

function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  showOverlay();
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  hideOverlay();
}

/* ============================================================
   Wishlist
   ============================================================ */
function toggleWishlist(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    showToast(`${p.name} removed from wishlist`);
  } else {
    wishlist.push(id);
    showToast(`${p.name} saved to wishlist`);
  }
  saveJSON(STORE_KEYS.wishlist, wishlist);
  updateWishUI();
  renderShop(); renderRails();
  $$(`.wish-btn[data-action="wish"]`).forEach(btn => {
    const card = btn.closest("[data-id]");
    if (!card) return;
    const pid = Number(card.dataset.id);
    const active = wishlist.includes(pid);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active);
    $("svg", btn).setAttribute("fill", active ? "#EF4444" : "none");
  });
}
function updateWishUI() {
  const badge = $("#wishCount");
  badge.textContent = wishlist.length;
  badge.hidden = wishlist.length === 0;
}

/* ============================================================
   Product modal
   ============================================================ */
let modalState = { id: null, qty: 1, model: null, color: null };

function openModal(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  modalState = {
    id: p.id, qty: 1,
    model: p.models && p.models.length ? p.models[0] : null,
    color: p.colors && p.colors.length ? p.colors[0] : null,
  };
  const img = $("#modalImg");
  img.src = p.img;
  img.alt = p.name;
  guardImage(img);
  $("#modalCat").textContent = catName(CATEGORY_ALIASES[p.category] || p.category);
  $("#modalTitle").textContent = p.name;
  $("#modalPrice").innerHTML = `<span class="price">${formatLKR(p.price)}</span>` +
    (p.oldPrice ? `<span class="price-old">${formatLKR(p.oldPrice)}</span>` : "");
  $("#modalDesc").textContent = p.desc;

  // colours
  const colorsBox = $("#modalColors");
  if (p.colors && p.colors.length) {
    colorsBox.hidden = false;
    $("#modalSwatches").innerHTML = p.colors.map(c =>
      `<button class="swatch ${c === modalState.color ? "selected" : ""}" data-color="${escapeHTML(c)}"
        style="background:${colorToHex(c)}" aria-label="Colour ${escapeHTML(c)}" title="${escapeHTML(c)}"></button>`).join("");
  } else colorsBox.hidden = true;

  // compatible models
  const modelsBox = $("#modalModels");
  if (p.models && p.models.length) {
    modelsBox.hidden = false;
    $("#modalModelChips").innerHTML = p.models.map(m =>
      `<button class="model-chip ${m === modalState.model ? "selected" : ""}" data-model="${escapeHTML(m)}">${escapeHTML(m)}</button>`).join("");
  } else modelsBox.hidden = true;

  const stockEl = $("#modalStock");
  stockEl.textContent = stockLabel(p.stock);
  stockEl.className = "modal-stock stock " + p.stock;

  $("#qtyValue").textContent = modalState.qty;
  const addBtn = $("#modalAddToCart");
  addBtn.disabled = p.stock === "out";
  addBtn.textContent = p.stock === "out" ? "OUT OF STOCK" : "ADD TO CART";

  const backdrop = $("#modalBackdrop");
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add("show"));
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}
function closeModal() {
  const backdrop = $("#modalBackdrop");
  backdrop.classList.remove("show");
  setTimeout(() => { backdrop.hidden = true; }, 300);
  document.body.style.overflow = "";
}

/* ============================================================
   Overlay helper (shared by drawer)
   ============================================================ */
function showOverlay() {
  const o = $("#overlay");
  o.hidden = false;
  requestAnimationFrame(() => o.classList.add("show"));
  document.body.style.overflow = "hidden";
}
function hideOverlay() {
  const o = $("#overlay");
  o.classList.remove("show");
  setTimeout(() => { o.hidden = true; }, 300);
  if ($("#modalBackdrop").hidden) document.body.style.overflow = "";
}

/* ============================================================
   WhatsApp
   ============================================================ */
function openWhatsApp() {
  const num = CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  if (!num) {
    showToast(`WhatsApp number not configured yet — email us at ${CONFIG.storeEmail}`);
    return;
  }
  const url = `https://wa.me/${num}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  window.open(url, "_blank", "noopener");
}

/* ============================================================
   Scroll reveals + header state + active nav link
   ============================================================ */
let revealObserver;
function observeReveals(scope = document) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); revealObserver.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
  }
  $$(".reveal:not(.visible)", scope).forEach(el => revealObserver.observe(el));
}

function initHeader() {
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sections = ["home", "shop", "categories", "new-arrivals", "deals", "contact"];
  const links = $$(".nav-link");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });
}

/* ============================================================
   Events
   ============================================================ */
function initEvents() {
  // Mobile menu
  const burger = $("#hamburger"), mobileMenu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  $$(".mobile-link").forEach(a => a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  // Search: expand input focus on mobile, filter as you type
  $("#searchToggle").addEventListener("click", () => {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#searchInput").focus(), 500);
  });
  $("#searchInput").addEventListener("input", e => {
    filters.search = e.target.value.trim();
    renderShop();
  });
  $("#sortSelect").addEventListener("change", e => { filters.sort = e.target.value; renderShop(); });
  $("#priceRange").addEventListener("input", e => {
    filters.maxPrice = Number(e.target.value);
    $("#priceLabel").textContent = formatLKR(filters.maxPrice);
    renderShop();
  });
  $("#clearFilters").addEventListener("click", clearFilters);
  $("#emptyClear").addEventListener("click", clearFilters);

  // Global click delegation: product actions + category cards
  document.addEventListener("click", e => {
    const catCard = e.target.closest(".category-card");
    if (catCard) {
      filters.category = catCard.dataset.category;
      wishlistOnly = false;
      renderShop();
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;
    const card = actionEl.closest("[data-id]");
    if (!card) return;
    const id = Number(card.dataset.id);
    const action = actionEl.dataset.action;
    if (action === "wish") toggleWishlist(id);
    else if (action === "add") addToCart(id);
    else if (action === "view") openModal(id);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.matches('.product-media[role="button"], .deal-media[role="button"]')) {
      const card = e.target.closest("[data-id]");
      if (card) openModal(Number(card.dataset.id));
    }
  });

  // Footer category links
  $$("[data-cat-link]").forEach(a => a.addEventListener("click", () => {
    filters.category = a.dataset.catLink;
    wishlistOnly = false;
    renderShop();
  }));

  // Cart drawer
  $("#cartToggle").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  $("#overlay").addEventListener("click", closeCart);
  $("#checkoutBtn").addEventListener("click", () =>
    showToast("Demo checkout — connect a backend & payment gateway to accept real orders."));

  $("#cartItems").addEventListener("click", e => {
    const btn = e.target.closest("[data-cart]");
    if (!btn) return;
    const key = btn.dataset.key;
    if (btn.dataset.cart === "inc") setCartQty(key, 1);
    else if (btn.dataset.cart === "dec") setCartQty(key, -1);
    else if (btn.dataset.cart === "remove") removeFromCart(key);
  });

  // Wishlist toggle (nav) — shows wishlist-only view
  $("#wishlistToggle").addEventListener("click", () => {
    wishlistOnly = !wishlistOnly;
    renderShop();
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    showToast(wishlistOnly ? "Showing your wishlist" : "Showing all products");
  });

  // Modal
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (!$("#modalBackdrop").hidden) closeModal();
      else if ($("#cartDrawer").classList.contains("open")) closeCart();
    }
  });
  $("#modalSwatches").addEventListener("click", e => {
    const sw = e.target.closest(".swatch");
    if (!sw) return;
    modalState.color = sw.dataset.color;
    $$("#modalSwatches .swatch").forEach(s => s.classList.toggle("selected", s === sw));
  });
  $("#modalModelChips").addEventListener("click", e => {
    const chip = e.target.closest(".model-chip");
    if (!chip) return;
    modalState.model = chip.dataset.model;
    $$("#modalModelChips .model-chip").forEach(c => c.classList.toggle("selected", c === chip));
  });
  $("#qtyMinus").addEventListener("click", () => {
    modalState.qty = Math.max(1, modalState.qty - 1);
    $("#qtyValue").textContent = modalState.qty;
  });
  $("#qtyPlus").addEventListener("click", () => {
    modalState.qty = Math.min(10, modalState.qty + 1);
    $("#qtyValue").textContent = modalState.qty;
  });
  $("#modalAddToCart").addEventListener("click", () => {
    addToCart(modalState.id, modalState.qty, modalState.model, modalState.color);
    closeModal();
    setTimeout(openCart, 250);
  });

  // WhatsApp triggers
  $("#whatsappFloat").addEventListener("click", openWhatsApp);
  $("#contactWhatsApp").addEventListener("click", openWhatsApp);
  $("#footerWhatsApp").addEventListener("click", e => { e.preventDefault(); openWhatsApp(); });

  // Newsletter (frontend validation only)
  $("#newsletterForm").addEventListener("submit", e => {
    e.preventDefault();
    const input = $("#newsletterEmail");
    const note = $("#newsletterNote");
    const email = input.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    note.classList.remove("success", "error");
    if (!valid) {
      note.textContent = "Please enter a valid email address.";
      note.classList.add("error");
      input.focus();
      return;
    }
    note.textContent = `Thanks! "${email}" is valid — connect an email service to store real subscriptions.`;
    note.classList.add("success");
    input.value = "";
  });

  // "Shop all deals" scrolls to filtered deals (products with discounts)
  $("#shopAllDeals").addEventListener("click", () => {
    filters.sort = "featured";
    $("#sortSelect").value = "featured";
  });
}

/* ============================================================
   Init
   ============================================================ */
function init() {
  renderCategories();
  renderShop();
  renderDeals();
  renderRails();
  updateCartUI();
  updateWishUI();
  initHeader();
  initEvents();
  observeReveals();
  $$("img").forEach(guardImage);
}
document.addEventListener("DOMContentLoaded", init);