// ============================================================
// DATA KATEGORI PORTFOLIO
// Tambah, hapus, atau ubah kategori di bagian ini.
// ============================================================
const categories = [
  {
    id: "ai-production",
    title: "AI Production",
    number: "01",
    description: "AI-assisted concept development, campaign imagery, and visual experimentation.",
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=88"
  },
  {
    id: "design",
    title: "Design",
    number: "02",
    description: "Brand identity, packaging, editorial systems, and digital experiences.",
    cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88"
  },
  {
    id: "video",
    title: "Photo & Video",
    number: "03",
    description: "Short films, branded stories, moving images, and visual direction.",
    cover: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=88"
  }
];

// ============================================================
// DATA PROJECT PORTFOLIO
// cover   = gambar kartu dan gambar utama project.
// gallery = gambar masonry khusus untuk project tersebut.
// Gunakan [] bila project tidak membutuhkan masonry.
// ============================================================
const projects = [
// DATA AI PROJECTS
  {
    id: "saintmoss",
    category: "ai-production",
    title: "Saint Moss Perfume",
    detail: "Logo & Branding",
    year: "2026",
    cover: "./assets/saintmoss/template-web.jpg",
    gallery: [
      "./assets/saintmoss/package-web.jpg",
      "./assets/saintmoss/paperbox-web.jpg",
      "./assets/saintmoss/botoldus-web.jpg",
      "./assets/saintmoss/hangtag-web.jpg",
      "./assets/saintmoss/botol-web.jpg",
      "./assets/saintmoss/box-web.jpg",
      "./assets/saintmoss/paperbag-web.jpg"
    ],
    description: "A collection of AI-assisted product visual explorations focused on art direction, material studies, lighting, and campaign-ready compositions."
  },
// DATA DESIGN PROJECTS
  {
    id: "1688",
    category: "video",
    title: "1688 Packaging",
    detail: "Product & Packaging Design",
    year: "2025",
    cover: "./assets/1688/sosissapi-web.jpg",
    gallery: [
      "./assets/1688/sosissapi-web.jpg",
      "./assets/1688/sosisayam-web.jpg",
      "./assets/1688/sosbak-web.jpg",
      "./assets/1688/kornetkotak-web.jpg",
      "./assets/1688/koin-web.jpg",
      "./assets/1688/burger-web.jpg",
      "./assets/1688/rounded.jpg",
      "./assets/1688/saikoro.jpg",
      "./assets/1688/slice1.jpg",
      "./assets/1688/slice2.jpg",
      "./assets/1688/slice3.jpg",
      "./assets/1688/slice4.jpg"
    ],
    description: "A portfolio selection for 1688 featuring product visuals, packaging mockups, and food brand presentation assets."
  },
  {
    id: "1688-ai",
    category: "ai-production",
    title: "1688 AI Product Visuals",
    detail: "AI Product Campaign Visuals",
    year: "2026",
    cover: "./assets/1688/ai/naget.png",
    gallery: [
      "./assets/1688/ai/naget.png",
      "./assets/1688/ai/flynaget.png",
      "./assets/1688/ai/sosissapi.png",
      "./assets/1688/ai/sosisayam.png",
      "./assets/1688/ai/sosisbakar.png",
      "./assets/1688/ai/daging.png"
    ],
    description: "AI-assisted 1688 product visuals for frozen food campaign assets, product presentation, and brand-ready compositions."
  },
  {
    id: "1688-blindvan",
    category: "design",
    title: "1688 Blind Van",
    detail: "Vehicle Branding Design",
    year: "2026",
    cover: "./assets/1688/blindvan/preview.jpg",
    gallery: [
      "./assets/1688/blindvan/preview.jpg",
      "./assets/1688/blindvan/mobil.png",
      "./assets/1688/blindvan/belakang.jpg",
      "./assets/1688/blindvan/kanan.jpg",
      "./assets/1688/blindvan/kiri.jpg"
    ],
    description: "1688 vehicle branding design exploration for blind van application, including side, rear, and full mockup views."
  },
  {
    id: "1688-design-assets",
    category: "design",
    title: "1688 Design Assets",
    detail: "Marketing & Brand Collateral",
    year: "2026",
    cover: "./assets/1688/desain/katalog.jpg",
    gallery: [
      "./assets/1688/desain/katalog.jpg",
      "./assets/1688/desain/brosur.jpg",
      "./assets/1688/desain/pricelog.jpg",
      "./assets/1688/desain/x-banner1.jpg",
      "./assets/1688/desain/2x1.jpg",
      "./assets/1688/desain/3x1.jpg",
      "./assets/1688/desain/4x1.jpg",
      "./assets/1688/desain/polofront.png",
      "./assets/1688/desain/poloside.png",
      "./assets/1688/desain/thermal.png"
    ],
    description: "A grouped 1688 collateral set covering catalog, brochure, price log, banner, apparel, and point-of-sale design assets."
  },
  {
    id: "1688-freezer",
    category: "design",
    title: "1688 Freezer Branding",
    detail: "Freezer Sticker & Mockup Design",
    year: "2026",
    cover: "./assets/1688/freezer/mockup1.jpg",
    gallery: [
      "./assets/1688/freezer/mockup1.jpg",
      "./assets/1688/freezer/mockup2.jpg",
      "./assets/1688/freezer/mockup3.jpg",
      "./assets/1688/freezer/desain1.jpg",
      "./assets/1688/freezer/desain2.jpg",
      "./assets/1688/freezer/desain3.jpg"
    ],
    description: "1688 freezer sticker design and mockup presentation set for retail freezer branding applications."
  },
  {
    id: "benefit",
    category: "design",
    title: "Benefit",
    detail: "Brand & Campaign Design",
    year: "2025",
    cover: "./assets/benefit/2.jpg",
    gallery: [
      "./assets/benefit/des2-web.jpg",
      "./assets/benefit/1-web.jpg",
      "./assets/benefit/des1.jpg",
      "./assets/benefit/2.jpg"
    ],
    description: "A compact brand and campaign visual set for Benefit, focused on clean presentation and polished product-driven layouts."
  },
  {
    id: "bravo",
    category: "design",
    title: "Bravo",
    detail: "Brand Identity & Visual Design",
    year: "2025",
    cover: "./assets/bravo/bravo1a-web.jpg",
    gallery: [
      "./assets/bravo/bravo1a-web.jpg",
      "./assets/bravo/bravo1.jpg",
      "./assets/bravo/bravo2.jpg",
      "./assets/bravo/bravo2a-web.jpg",
      "./assets/bravo/bravo3.jpg",
      "./assets/bravo/bravo4.jpg",
      "./assets/bravo/bravo5.jpg",
      "./assets/bravo/bravo5a.jpg",
      "./assets/bravo/bravo6.jpg",
      "./assets/bravo/bravo6a-web.jpg",
      "./assets/bravo/logo/1.jpg",
      "./assets/bravo/logo/10.jpg",
      "./assets/bravo/logo/11.jpg",
      "./assets/bravo/logo/12.jpg",
      "./assets/bravo/logo/13.jpg",
      "./assets/bravo/logo/14.jpg",
      "./assets/bravo/logo/15.jpg",
      "./assets/bravo/logo/2.jpg",
      "./assets/bravo/logo/3.jpg",
      "./assets/bravo/logo/4.jpg",
      "./assets/bravo/logo/5.jpg",
      "./assets/bravo/logo/6.jpg",
      "./assets/bravo/logo/7.jpg",
      "./assets/bravo/logo/8.jpg",
      "./assets/bravo/logo/9.jpg"
    ],
    description: "A complete Bravo visual selection covering brand assets, logo explorations, and product-facing design materials."
  },
  {
    id: "elena-di",
    category: "design",
    title: "Elena DI",
    detail: "Digital Imaging",
    year: "2025",
    cover: "./assets/elena/DI/1-web.jpg",
    coverPosition: "center 70%",
    gallery: [
      "./assets/elena/DI/1-web.jpg",
      "./assets/elena/DI/2-web.jpg",
      "./assets/elena/DI/3-web.jpg",
      "./assets/elena/DI/4-web.jpg",
      "./assets/elena/DI/5-web.jpg",
      "./assets/elena/DI/6-web.jpg",
      "./assets/elena/DI/7-web.jpg",
      "./assets/elena/DI/8-web.jpg",
      "./assets/elena/DI/9-web.jpg"
    ],
    description: "A dedicated Elena digital imaging gallery focused on polished product compositions and campaign visuals."
  },
  {
    id: "elena-lavender",
    category: "design",
    title: "Elena Lavender",
    detail: "SKU Product Visuals",
    year: "2025",
    cover: "./assets/elena/SKU/lavender/1-web.jpg",
    gallery: [
      "./assets/elena/SKU/lavender/1-web.jpg",
      "./assets/elena/SKU/lavender/2-web.jpg",
      "./assets/elena/SKU/lavender/3-web.jpg",
      "./assets/elena/SKU/lavender/4.png"
    ],
    description: "Elena Lavender SKU visuals grouped separately for clearer product variant presentation."
  },
  {
    id: "elena-red",
    category: "design",
    title: "Elena Red",
    detail: "SKU Product Visuals",
    year: "2025",
    cover: "./assets/elena/SKU/red/1-web.jpg",
    gallery: [
      "./assets/elena/SKU/red/1-web.jpg",
      "./assets/elena/SKU/red/2-web.jpg",
      "./assets/elena/SKU/red/3-web.jpg",
      "./assets/elena/SKU/red/4-web.jpg"
    ],
    description: "Elena Red SKU visuals grouped separately for clearer product variant presentation."
  },
  {
    id: "elena-vetiver",
    category: "design",
    title: "Elena Vetiver",
    detail: "SKU Product Visuals",
    year: "2025",
    cover: "./assets/elena/SKU/vetiver/1.jpg",
    gallery: [
      "./assets/elena/SKU/vetiver/2-web.jpg",
      "./assets/elena/SKU/vetiver/1.jpg",
      "./assets/elena/SKU/vetiver/3-web.jpg",
      "./assets/elena/SKU/vetiver/4.png"
    ],
    description: "Elena Vetiver SKU visuals grouped separately for clearer product variant presentation."
  },
  {
    id: "mbahman",
    category: "design",
    title: "Mbahman",
    detail: "Automotive Visual Design",
    year: "2025",
    cover: "./assets/mbahman/mobil1.jpg",
    gallery: [
      "./assets/mbahman/mobil1.jpg",
      "./assets/mbahman/mobil1a.jpg",
      "./assets/mbahman/mobil2.jpg",
      "./assets/mbahman/mobil2a.jpg"
    ],
    description: "A concise automotive visual set for Mbahman with clean presentation assets and vehicle-focused layouts."
  },
  {
    id: "mockup-1688",
    category: "design",
    title: "1688 Mockup",
    detail: "Packaging Mockup",
    year: "2026",
    cover: "./assets/mockup/1688/NAGET MODERATE 500gr-web.jpg",
    gallery: [
      "./assets/mockup/1688/SS SAPI 375-web.jpg",
      "./assets/mockup/1688/BURGER 250-web.jpg",
      "./assets/mockup/1688/CHICKEN ROUNDED-web.jpg",
      "./assets/mockup/1688/KORNET 450-web.jpg",
      "./assets/mockup/1688/KORNET KOTAK 450-web.jpg",
      "./assets/mockup/1688/NAGET MODERATE 500gr BACK-web.jpg",
      "./assets/mockup/1688/NAGET MODERATE 500gr-web.jpg",
      "./assets/mockup/1688/NAGET STICK 500gr BACK-web.jpg",
      "./assets/mockup/1688/NAGET STICK 500gr-web.jpg",
      "./assets/mockup/1688/ROUNDED-web.jpg",
      "./assets/mockup/1688/SAIKORO-web.jpg",
      "./assets/mockup/1688/SOSBAK 500 7-web.jpg",
      "./assets/mockup/1688/SS AYAM 375-web.jpg"
    ],
    description: "A dedicated 1688 packaging mockup collection showing product variants, back panels, and presentation-ready pack visuals."
  },
  {
    id: "naget",
    category: "video",
    title: "Naget",
    detail: "Product Visual Design",
    year: "2025",
    cover: "./assets/naget/naget1-web.jpg",
    gallery: [
      "./assets/naget/naget1-web.jpg",
      "./assets/naget/naget2-web.jpg",
      "./assets/naget/naget3-web.jpg",
      "./assets/naget/naget4-web.jpg",
      "./assets/naget/naget5-web.jpg",
      "./assets/naget/naget6-web.jpg"
    ],
    description: "A Naget product visual series built around food presentation, packaging clarity, and consistent brand-ready imagery."
  },
  {
    id: "nbs-aging",
    category: "design",
    title: "NBS Aging",
    detail: "Beauty Product Campaign",
    year: "2025",
    cover: "./assets/nbs/aging/aging1-web.jpg",
    gallery: [
      "./assets/nbs/aging/aging1-web.jpg",
      "./assets/nbs/aging/aging2-web.jpg",
      "./assets/nbs/aging/aging3-web.jpg"
    ],
    description: "Anti-aging product visuals and campaign-ready beauty layouts from the NBS Aging set."
  },
  {
    id: "nbs-campain",
    category: "design",
    title: "NBS Campaign",
    detail: "Beauty Campaign Design",
    year: "2025",
    cover: "./assets/nbs/campain/campain4-web.jpg",
    gallery: [
      "./assets/nbs/campain/campain4-web.jpg",
      "./assets/nbs/campain/campain1.jpg",
      "./assets/nbs/campain/campain2.jpg",
      "./assets/nbs/campain/campain2a.jpg",
      "./assets/nbs/campain/campain2b.jpg",
      "./assets/nbs/campain/campain2c.jpg",
      "./assets/nbs/campain/campain3.jpg"
    ],
    description: "Campaign visual explorations for NBS, separated into its own focused project gallery."
  },
  {
    id: "nbs-face",
    category: "ai-production",
    title: "NBS Face",
    detail: "Face Product Visual Design",
    year: "2025",
    cover: "./assets/nbs/face/face4.jpg",
    gallery: [
      "./assets/nbs/face/face2-web.jpg",
      "./assets/nbs/face/face1.jpg",
      "./assets/nbs/face/face3-web.jpg",
      "./assets/nbs/face/face4.jpg",
      "./assets/nbs/face/face5.jpg",
      "./assets/nbs/face/face6.jpg",
      "./assets/nbs/face/face7-web.jpg",
      "./assets/nbs/face/face8.jpg"
    ],
    description: "Face product visuals for NBS with dedicated beauty imagery and product presentation."
  },
  {
    id: "nbs-lash",
    category: "ai-production",
    title: "NBS Lash",
    detail: "Lash Product Visual Design",
    year: "2025",
    cover: "./assets/nbs/lash/produk2-web.jpg",
    gallery: [
      "./assets/nbs/lash/produk1-web.jpg",
      "./assets/nbs/lash/produk1a-web.jpg",
      "./assets/nbs/lash/produk1b.jpg",
      "./assets/nbs/lash/produk2-web.jpg",
      "./assets/nbs/lash/produk2a.jpg",
      "./assets/nbs/lash/produk2a1.jpg",
      "./assets/nbs/lash/produk2b.jpg"
    ],
    description: "Lash product visuals for NBS, focused on close-up beauty product presentation and variants."
  },
  {
    id: "nbs-lipstik",
    category: "design",
    title: "NBS Lipstik",
    detail: "Lip Product Visual Design",
    year: "2025",
    cover: "./assets/nbs/lipstik/produk1.jpg",
    gallery: [
      "./assets/nbs/lipstik/produk1.jpg",
      "./assets/nbs/lipstik/produk1a.jpg",
      "./assets/nbs/lipstik/produk1b.jpg"
    ],
    description: "Lipstik product visuals for NBS with a dedicated gallery for lip product assets."
  },
  {
    id: "nbs-masker",
    category: "ai-production",
    title: "NBS Masker",
    detail: "Masker Product Visual Design",
    year: "2025",
    cover: "./assets/nbs/masker/masker3-web.jpg",
    gallery: [
      "./assets/nbs/masker/masker2-web.jpg",
      "./assets/nbs/masker/masker1.jpg",
      "./assets/nbs/masker/masker3-web.jpg",
      "./assets/nbs/masker/masker4.jpg"
    ],
    description: "Masker product visuals for NBS, grouped separately for clearer portfolio browsing."
  },
  {
    id: "nbs-sosmed",
    category: "design",
    title: "NBS Social Media",
    detail: "Social Media Design",
    year: "2025",
    cover: "./assets/nbs/sosmed/sosmed1-web.jpg",
    coverPosition: "center 70%",
    gallery: [
      "./assets/nbs/sosmed/sosmed1-web.jpg",
      "./assets/nbs/sosmed/sosmed2-web.jpg",
      "./assets/nbs/sosmed/sosmed2.jpg",
      "./assets/nbs/sosmed/sosmed3.jpg",
      "./assets/nbs/sosmed/sosmed4-web.jpg",
      "./assets/nbs/sosmed/sosmed5.jpg",
      "./assets/nbs/sosmed/sosmed6.jpg",
      "./assets/nbs/sosmed/sosmed7.jpg",
      "./assets/nbs/sosmed/sosmed8-web.jpg",
      "./assets/nbs/sosmed/sosmed9-web.jpg"
    ],
    description: "NBS social media design assets grouped into a dedicated digital content project."
  },
  {
    id: "piket",
    category: "video",
    title: "Piket",
    detail: "Food Product Visual Design",
    year: "2025",
    cover: "./assets/piket/coktail1-web.jpg",
    gallery: [
      "./assets/piket/coktail1-web.jpg",
      "./assets/piket/coktail2-web.jpg",
      "./assets/piket/frankfurter.jpg",
      "./assets/piket/smoke1-web.jpg",
      "./assets/piket/smoke2-web.jpg"
    ],
    description: "A Piket food product visual set featuring cocktail, smoke, and frankfurter imagery for brand and menu presentation."
  },
  {
    id: "saturdayscent",
    category: "design",
    title: "Saturday Scent",
    detail: "Perfume Product Visual Design",
    year: "2025",
    cover: "./assets/saturdayscent/mock1-web.jpg",
    gallery: [
      "./assets/saturdayscent/mock1-web.jpg",
      "./assets/saturdayscent/mock2.jpg",
      "./assets/saturdayscent/mock3.jpg",
      "./assets/saturdayscent/mock4-web.jpg",
      "./assets/saturdayscent/mock5.jpg"
    ],
    description: "A Saturday Scent product visual set focused on perfume mockups, mood, material, and refined presentation."
  },
// DATA VIDEO PROJECTS
  {
    id: "udjang",
    category: "video",
    title: "UDJANG",
    detail: "Short Movie",
    year: "2024",
    cover: "https://i.ytimg.com/vi/iYHeSQokbng/hqdefault.jpg",
    youtubeId: "iYHeSQokbng",
    youtubeLabel: "WATCH SHORT MOVIE ON YOUTUBE",
    gallery: [],
    description: "A short movie project presented as part of the portfolio's film and video direction selection."
  },
  {
    id: "lerak-seasia",
    category: "video",
    title: "LERAK",
    detail: "Seasia Documentary Film",
    year: "2019",
    cover: "https://i.ytimg.com/vi/YnfTSernH-s/hqdefault.jpg",
    youtubeId: "YnfTSernH-s",
    youtubeLabel: "WATCH DOCUMENTARY ON YOUTUBE",
    gallery: [],
    description: "A documentary film project for Seasia, focused on cultural and environmental storytelling."
  },
  {
    id: "budak",
    category: "video",
    title: "BUDAK",
    detail: "Film Pendek Pentas Seni Sekolah",
    year: "2024",
    cover: "https://i.ytimg.com/vi/60oXX2cEpT4/hqdefault.jpg",
    youtubeId: "60oXX2cEpT4",
    youtubeLabel: "WATCH SHORT FILM ON YOUTUBE",
    gallery: [],
    description: "Film pendek pertama yang tayang di acara pentas seni sekolah, built around horror storytelling and school event screening."
  },
  {
    id: "ppatk-money-laundering",
    category: "video",
    title: "PPATK - Money Laundering",
    detail: "Campaign Short Video",
    year: "2024",
    cover: "https://i.ytimg.com/vi/ZrAdhJj-Wm0/hqdefault.jpg",
    youtubeId: "ZrAdhJj-Wm0",
    youtubeLabel: "WATCH CAMPAIGN VIDEO ON YOUTUBE",
    gallery: [],
    description: "A campaign-style short video project about money laundering awareness, produced with concise visual storytelling."
  },
  {
    id: "jelajah-im3",
    category: "video",
    title: "JELAJAH",
    detail: "Award-winning Short Film",
    year: "2019",
    cover: "https://i.ytimg.com/vi/HfuVv8PLJM0/hqdefault.jpg",
    youtubeId: "HfuVv8PLJM0",
    youtubeLabel: "WATCH AWARD-WINNING FILM ON YOUTUBE",
    gallery: [],
    description: "A national competition-winning short film project created for IM3 Ooredoo Digital Talent."
  },
  {
    id: "indosat-ekspresikan",
    category: "video",
    title: "INDOSAT - Ekspresikan",
    detail: "Brand Campaign Video",
    year: "2019",
    cover: "https://i.ytimg.com/vi/cRhQtSufY2Q/hqdefault.jpg",
    youtubeId: "cRhQtSufY2Q",
    youtubeLabel: "WATCH BRAND VIDEO ON YOUTUBE",
    gallery: [],
    description: "A brand campaign video for Indosat's Ekspresikan theme, focused on youthful expression and digital talent storytelling."
  }
];

const portfolioView = document.querySelector("#portfolioView");
const categoryScrollPositions = new Map();
let activeRoute = null;

// ============================================================
// ROUTING PORTFOLIO
// Membaca URL setelah tanda # untuk menentukan tampilan yang dibuka.
// ============================================================
function getRoute() {
  const route = window.location.hash.replace(/^#\/?/, "");
  const [type, id] = route.split("/");

  if (type === "category" && categories.some((category) => category.id === id)) {
    return { type: "category", id };
  }

  if (type === "project" && projects.some((project) => project.id === id)) {
    return { type: "project", id };
  }

  return { type: "categories" };
}

// ============================================================
// PENCARIAN DATA KATEGORI DAN PROJECT
// ============================================================
function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
}

// ============================================================
// TAMPILAN DAFTAR KATEGORI
// ============================================================
function renderCategories() {
  portfolioView.innerHTML = `
    <div class="explorer-heading">
      <p class="eyebrow">CHOOSE A DISCIPLINE</p>
      <h2>Explore by category.</h2>
    </div>

    <div class="category-grid">
      ${categories.map((category) => {
        const projectCount = projects.filter(
          (project) => project.category === category.id
        ).length;

        return `
          <button
            class="category-card"
            data-category="${category.id}"
            aria-label="Open ${category.title} projects"
          >
            <img src="${category.cover}" alt="" loading="lazy" decoding="async">
            <span class="category-shade"></span>

            <span class="category-number">${category.number}</span>

            <span class="category-content">
              <b>${category.title}</b>
              <small>${category.description}</small>
              <em>${projectCount} PROJECTS &nbsp;→</em>
            </span>
          </button>
        `;
      }).join("")}
    </div>

  `;
}

// ============================================================
// TAMPILAN DAFTAR PROJECT DALAM SATU KATEGORI
// ============================================================
function renderCategory(categoryId) {
  const category = getCategory(categoryId);
  const categoryProjects = projects.filter(
    (project) => project.category === categoryId
  );

  portfolioView.innerHTML = `
    <div class="portfolio-toolbar" hidden>
      <button class="portfolio-back" data-back="categories">
        <span>←</span> BACK TO CATEGORIES
      </button>

      <span>${String(categoryProjects.length).padStart(2, "0")} PROJECTS</span>
    </div>

    <div class="category-view-heading">
      <p class="eyebrow">${category.number} / CATEGORY</p>
      <h2>${category.title}</h2>
      <p>${category.description}</p>
    </div>

    <div class="project-grid explorer-project-grid">
      ${categoryProjects.map((project) => `
        <article
          class="project-card explorer-project-card"
          data-project="${project.id}"
        >
          <button class="project-open" aria-label="Open ${project.title}">
            <span class="project-image">
              <img src="${project.cover}" alt="" loading="lazy" decoding="async"${project.coverPosition ? ` style="--project-cover-position: ${project.coverPosition};"` : ""}>
              <span class="view-label">VIEW PROJECT ↗</span>
            </span>

            <span class="project-meta">
              <span>
                <b>${project.title}</b>
                <small>${project.detail}</small>
              </span>
              <em>${project.year}</em>
            </span>
          </button>

        </article>
      `).join("")}
    </div>

    <div class="detail-bottom-back">
      <button class="portfolio-back" data-back="categories">
        <span>←</span> BACK TO CATEGORIES
      </button>
    </div>
  `;
}

// ============================================================
// TAMPILAN DETAIL PROJECT
// Termasuk cover, gallery, dan video YouTube bila tersedia.
// ============================================================
function renderProject(projectId) {
  const project = getProject(projectId);
  const category = getCategory(project.category);
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];

  portfolioView.innerHTML = `
    <div class="portfolio-toolbar detail-toolbar" hidden>
      <button class="portfolio-back" data-back="${category.id}">
        <span>←</span> BACK TO ${category.title.toUpperCase()}
      </button>

      <span>${project.year}</span>
    </div>

    <article class="project-detail">
      <header class="project-detail-header">
        <div>
          <p class="eyebrow">${category.title} / ${project.detail}</p>
          <h2>${project.title}</h2>
        </div>

        <div class="project-description">
          <p>${project.description}</p>

          <dl>
            <div><dt>DISCIPLINE</dt><dd>${category.title}</dd></div>
            <div><dt>SCOPE</dt><dd>${project.detail}</dd></div>
            <div><dt>YEAR</dt><dd>${project.year}</dd></div>
          </dl>
        </div>
      </header>

      ${project.youtubeId ? `
        <section class="project-video" data-video-id="${project.youtubeId}">
          <button
            class="video-facade"
            data-play-video="${project.youtubeId}"
            aria-label="Play ${project.title} video"
          >
            <img
              src="${project.cover || `https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`}"
              alt="${project.title} YouTube video preview"
              loading="lazy"
              decoding="async"
            >
            <span class="video-shade"></span>

            <span class="video-content">
              <small>${project.youtubeLabel || "WATCH ON YOUTUBE"}</small>
              <b>PLAY VIDEO</b>
              <em>Click to load the YouTube player</em>
            </span>
          </button>
        </section>
      ` : ""}

      ${gallery.length ? `
        <div class="masonry-gallery">
          ${gallery.map((image, index) => `
            <figure class="masonry-item">
              <img
                src="${image}"
                alt="${project.title} detail ${index + 1}"
                loading="lazy"
                decoding="async"
              >
            </figure>
          `).join("")}
        </div>
      ` : ""}

      <div class="detail-bottom-back">
        <button class="portfolio-back" data-back="${category.id}">
          <span>←</span> BACK TO ${category.title.toUpperCase()}
        </button>
      </div>
    </article>
  `;
}

// ============================================================
// PENGATUR TAMPILAN UTAMA PORTFOLIO
// ============================================================
function render() {
  const route = getRoute();

  portfolioView.classList.remove("view-enter");

  if (route.type === "category") {
    renderCategory(route.id);
  } else if (route.type === "project") {
    renderProject(route.id);
  } else {
    renderCategories();
  }

  window.requestAnimationFrame(() => {
    portfolioView.classList.add("view-enter");
  });

  activeRoute = route;
  return route;
}

// ============================================================
// NAVIGASI DAN POSISI SCROLL PORTFOLIO
// ============================================================
function navigate(route) {
  const nextHash = `#${route}`;

  if (window.location.hash === nextHash) {
    render();
    window.requestAnimationFrame(() => alignPortfolioView());
    return;
  }

  window.location.hash = route;
}

function rememberCategoryScroll(categoryId) {
  categoryScrollPositions.set(categoryId, window.scrollY);
}

function restoreCategoryScroll(categoryId) {
  if (!categoryScrollPositions.has(categoryId)) {
    alignPortfolioView();
    return;
  }

  window.scrollTo({
    top: categoryScrollPositions.get(categoryId),
    behavior: "auto"
  });
}

function alignPortfolioView(behavior = "smooth") {
  const headerOffset = window.innerWidth <= 760 ? 72 : 86;
  const viewTop =
    portfolioView.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, viewTop),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : behavior
  });
}

// ============================================================
// AKSI KLIK PORTFOLIO
// Mengatur klik kategori, project, tombol kembali, dan play video.
// ============================================================
portfolioView.addEventListener("click", (event) => {
  const categoryCard = event.target.closest("[data-category]");
  const backButton = event.target.closest("[data-back]");
  const projectCard = event.target.closest("[data-project]");
  const videoButton = event.target.closest("[data-play-video]");

  if (videoButton) {
    const videoId = videoButton.dataset.playVideo;
    const videoContainer = videoButton.closest(".project-video");

    videoContainer.innerHTML = `
      <div class="video-player-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    `;
    return;
  }

  if (categoryCard) {
    navigate(`category/${categoryCard.dataset.category}`);
    return;
  }

  if (backButton) {
    const destination = backButton.dataset.back;
    navigate(destination === "categories" ? "categories" : `category/${destination}`);
    return;
  }

  if (projectCard) {
    const project = getProject(projectCard.dataset.project);

    if (project) {
      rememberCategoryScroll(project.category);
    }

    navigate(`project/${projectCard.dataset.project}`);
  }
});

// ============================================================
// UPDATE TAMPILAN SAAT URL PORTFOLIO BERUBAH
// ============================================================
window.addEventListener("hashchange", () => {
  const previousRoute = activeRoute;
  const route = render();

  window.requestAnimationFrame(() => {
    if (previousRoute?.type === "project" && route.type === "category") {
      restoreCategoryScroll(route.id);
      return;
    }

    alignPortfolioView();
  });
});

// ============================================================
// MENJALANKAN PORTFOLIO SAAT HALAMAN DIBUKA
// ============================================================
function initializePortfolio() {
  render();

  if (window.location.hash) {
    window.requestAnimationFrame(() => alignPortfolioView("auto"));
  }

}

initializePortfolio();
