// ============================================================
// ELEMEN HOME YANG DIKONTROL OLEH JAVASCRIPT
// ============================================================
const hero = document.querySelector('.hero-art')
const brandStrip = document.querySelector('.brand-strip')
const achievementCarousel = document.querySelector('#achievementCarousel')
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

const slides = [...document.querySelectorAll('.hero-slide')]
const brandTriggers = [...document.querySelectorAll('.brand-trigger')]
const achievementItems = [...document.querySelectorAll('.achievement-item')]

// ============================================================
// STATUS SLIDE DAN TIMER
// Menyimpan slide aktif serta timer untuk pergantian otomatis.
// ============================================================
let activeSlide = 0
let activeAchievement = 0
let projectTimer
let achievementTimer

// ============================================================
// MESIN DASAR PERGANTIAN SLIDE
// Memberi class "active" hanya pada item yang sedang ditampilkan.
// ============================================================
function showItem(items, index, activeClass = 'active') {
  if (!items.length) return 0

  const activeIndex = (index + items.length) % items.length

  items.forEach((item, itemIndex) => {
    const isActive = itemIndex === activeIndex

    item.classList.toggle(activeClass, isActive)
    item.setAttribute('aria-hidden', String(!isActive))
  })

  return activeIndex
}

// ============================================================
// SLIDE PROJECT HOME
// Menyamakan gambar aktif dengan tombol nama brand yang dipilih.
// ============================================================
function showProject(index) {
  activeSlide = showItem(slides, index)

  brandTriggers.forEach((trigger, triggerIndex) => {
    const isActive = triggerIndex === activeSlide

    trigger.classList.toggle('active', isActive)
    trigger.setAttribute('aria-pressed', String(isActive))
  })
}

// ============================================================
// SLIDE ACHIEVEMENT HOME
// ============================================================
function showAchievement(index) {
  activeAchievement = showItem(achievementItems, index)
}

// ============================================================
// AUTO SLIDE PROJECT HOME
// Angka 5000 berarti gambar berganti setiap 5 detik.
// ============================================================
function startProjectAutoplay() {
  window.clearInterval(projectTimer)

  if (prefersReducedMotion || slides.length < 2) return

  projectTimer = window.setInterval(() => {
    showProject(activeSlide + 1)
  }, 4000)
}

// ============================================================
// AUTO SLIDE ACHIEVEMENT
// Angka 4200 berarti achievement berganti setiap 4,2 detik.
// ============================================================
function startAchievementAutoplay() {
  window.clearInterval(achievementTimer)

  if (prefersReducedMotion || achievementItems.length < 2) return

  achievementTimer = window.setInterval(() => {
    showAchievement(activeAchievement + 1)
  }, 4500)
}

// ============================================================
// KLIK NAMA BRAND UNTUK MEMILIH SLIDE
// ============================================================
if (brandStrip) {
  brandStrip.addEventListener('click', (event) => {
    const trigger = event.target.closest('.brand-trigger')

    if (!trigger) return

    showProject(Number(trigger.dataset.slide))
    startProjectAutoplay()
  })
}

const projectHoverAreas = [hero, brandStrip].filter(Boolean)

// ============================================================
// PAUSE AUTO SLIDE SAAT MOUSE DI ATAS PROJECT
// ============================================================
projectHoverAreas.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    window.clearInterval(projectTimer)
  })

  element.addEventListener('mouseleave', startProjectAutoplay)
})

// ============================================================
// PAUSE AUTO SLIDE SAAT MOUSE DI ATAS ACHIEVEMENT
// ============================================================
if (achievementCarousel) {
  achievementCarousel.addEventListener('mouseenter', () => {
    window.clearInterval(achievementTimer)
  })

  achievementCarousel.addEventListener(
    'mouseleave',
    startAchievementAutoplay
  )
}

// ============================================================
// HEMAT TIMER SAAT TAB BROWSER TIDAK AKTIF
// ============================================================
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    window.clearInterval(projectTimer)
    window.clearInterval(achievementTimer)
    return
  }

  startProjectAutoplay()
  startAchievementAutoplay()
})

// ============================================================
// MENJALANKAN SLIDE SAAT HALAMAN PERTAMA DIBUKA
// ============================================================
showProject(0)
showAchievement(0)
startProjectAutoplay()
startAchievementAutoplay()
