// ============================================================
// ACTIVE PAGE DAN DAFTAR MENU NAVIGASI
// Ubah nama atau link menu website di bagian ini.
// ============================================================
const page = document.body.dataset.page || 'home'
const pages = [
  ['home', 'HOME', './index.html'],
  ['portfolio', 'PORTFOLIO', './portfolio.html'],
  ['about', 'ABOUT', './about.html'],
  ['contact', 'CONTACT', './contact.html'],
]
const header = document.querySelector('#site-header')
const footer = document.querySelector('#site-footer')

// ============================================================
// HEADER BERSAMA
// Header ini otomatis dipakai oleh Home, Portfolio, About, dan Contact.
// ============================================================
if (header) {
  header.innerHTML = `
  <header class="header">
    <a class="brand" href="./index.html" aria-label="Sultan Malik home">
      <span id="brandName">SULTAN<br>MALIK</span>
      <i>✳</i>
    </a>

    <button class="menu-button" id="menuButton" aria-expanded="false">
      MENU
    </button>

    <nav class="nav" id="nav" aria-label="Main navigation">
      ${pages
        .map(
          ([id, label, url]) => `
            <a class="${page === id ? 'active' : ''}" href="${url}">
              ${label}
            </a>
          `
        )
        .join('')}
    </nav>

    <div class="header-action"></div>
  </header>
`
}

// ============================================================
// FOOTER BERSAMA
// Ubah copyright dan alamat email footer di bagian ini.
// ============================================================
if (footer) {
  footer.innerHTML = `
  <footer>
    <span id="footerText">© 2026 SULTAN MALIK</span>
    <a href="mailto:sultanmlk41@gmail.com">EMAIL ME ↗</a>
  </footer>
`
}

const nav = document.querySelector('#nav')
const menuButton = document.querySelector('#menuButton')

// ============================================================
// MENU MOBILE
// Mengatur tombol MENU, tutup menu, tombol Escape, dan resize layar.
// ============================================================
function closeMenu() {
  if (!nav || !menuButton) return

  nav.classList.remove('open')
  menuButton.setAttribute('aria-expanded', 'false')
}

if (nav && menuButton) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open')

    menuButton.setAttribute('aria-expanded', String(open))
  })

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu()
  })
}
