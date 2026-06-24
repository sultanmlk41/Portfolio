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
    title: "Video",
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
    cover: "./assets/saintmoss/template.png",
    gallery: [
      "./assets/saintmoss/package.png",
      "./assets/saintmoss/paperbox.png",
      "./assets/saintmoss/botoldus.png",
      "./assets/saintmoss/hangtag.png",
      "./assets/saintmoss/botol.png",
      "./assets/saintmoss/box.png",
      "./assets/saintmoss/paperbag.png"
    ],
    description: "A collection of AI-assisted product visual explorations focused on art direction, material studies, lighting, and campaign-ready compositions."
  },
// DATA DESIGN PROJECTS
  {
    id: "kopi-tujuh",
    category: "design",
    title: "Kopi Tujuh",
    detail: "Branding & Packaging",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=88"
    ],
    description: "A complete identity and packaging direction for a contemporary Indonesian coffee brand, balancing an authentic local character with a refined, modern visual system."
  },
  {
    id: "duanyam",
    category: "design",
    title: "DUANYAM",
    detail: "Packaging Design",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88"
    ],
    description: "A packaging study built around natural materials, warm color, and thoughtful details that communicate craft, care, and cultural value."
  },
  {
    id: "timeless-heritage",
    category: "design",
    title: "Timeless Heritage",
    detail: "Editorial Design",
    year: "2024",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=88"
    ],
    description: "An editorial system that brings heritage stories into a contemporary reading experience through restrained typography, photography, and pacing."
  },
  {
    id: "tenun-nusantara",
    category: "design",
    title: "Tenun Nusantara Website",
    detail: "UI/UX Design",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=88"
    ],
    description: "A digital experience designed to introduce Indonesian weaving traditions through an immersive, elegant, and highly visual website."
  },
  {
    id: "kopi-tujuh-social",
    category: "design",
    title: "Kopi Tujuh Social Media",
    detail: "Digital Design",
    year: "2025",
    cover: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=88"
    ],
    description: "A flexible social media system that extends the Kopi Tujuh identity into campaign content, product stories, and everyday brand communication."
  },
// DATA VIDEO PROJECTS
  {
    id: "batas-bisik",
    category: "video",
    title: "Batas Bisik",
    detail: "Short Movie",
    year: "2024",
    cover: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    youtubeId: "aqz-KE-bpKQ",
    youtubeLabel: "YouTube Demo - Replace With Your Film",
    gallery: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=88"
    ],
    description: "A dark, atmospheric short film shaped through controlled pacing, restrained visual storytelling, and intimate character-driven moments."
  },
  {
    id: "jelajah",
    category: "video",
    title: "Jelajah",
    detail: "Award-winning Short Film",
    year: "2019",
    cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=88"
    ],
    description: "A national competition-winning short film developed through collaborative story building, scriptwriting, and scene-by-scene pre-production."
  },
  {
    id: "lerak",
    category: "video",
    title: "Lerak",
    detail: "Biodiversity Short Film",
    year: "2019",
    cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=88",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=88"
    ],
    description: "A second-place national competition film telling a biodiversity story through accessible narrative structure and purposeful visual direction."
  }
];

const portfolioView = document.querySelector("#portfolioView");

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
            <img src="${category.cover}" alt="">
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
    <div class="portfolio-toolbar">
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
              <img src="${project.cover}" alt="">
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
    <div class="portfolio-toolbar detail-toolbar">
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
              src="https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg"
              alt="${project.title} YouTube video preview"
            >
            <span class="video-shade"></span>

            <span class="video-content">
              <small>${project.youtubeLabel || "WATCH ON YOUTUBE"}</small>
              <b>PLAY VIDEO</b>
              <em>Click to load the YouTube player</em>
            </span>
          </button>
        </section>
      ` : `
        <figure class="project-cover-wide">
          <img src="${project.cover}" alt="${project.title} project cover">
        </figure>
      `}

      ${gallery.length ? `
        <div class="masonry-gallery">
          ${gallery.map((image, index) => `
            <figure class="masonry-item">
              <img
                src="${image}"
                alt="${project.title} detail ${index + 1}"
                loading="lazy"
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
    navigate(`project/${projectCard.dataset.project}`);
  }
});

// ============================================================
// UPDATE TAMPILAN SAAT URL PORTFOLIO BERUBAH
// ============================================================
window.addEventListener("hashchange", () => {
  render();
  window.requestAnimationFrame(() => alignPortfolioView());
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
