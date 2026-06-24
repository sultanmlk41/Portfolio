# Sultan Malik Portfolio

Website portfolio statis dengan tampilan dark editorial. Tidak memerlukan npm,
Python, database, atau CMS.

## Preview di VS Code

1. Buka folder `portfolio-website` di VS Code.
2. Buka `index.html`.
3. Klik **Go Live** di pojok kanan bawah.
4. Setelah mengedit file, simpan dengan `Ctrl + S`.

Live Server biasanya membuka website di `http://127.0.0.1:5500` dan me-refresh
preview secara otomatis.

## Halaman

- `index.html` — Home.
- `portfolio.html` — Portfolio interaktif.
- `about.html` — Profil dan pengalaman.
- `contact.html` — Kontak dan layanan.

## Mengedit konten

- Teks, gambar, dan link halaman diedit langsung di file HTML terkait.
- Isi carousel Home diedit di `index.html`.
- Kategori dan project Portfolio diedit pada data di bagian atas
  `src/portfolio.js`. Setiap project memiliki `cover` untuk kartu/gambar utama
  dan `gallery` untuk masonry detailnya sendiri.
- Navigasi dan footer bersama diedit di `src/common.js`.

## Struktur

- `assets/` — Foto profil dan file CV.
- `src/styles.css` — Seluruh tampilan desktop dan mobile.
- `src/common.js` — Navigasi, menu mobile, dan footer.
- `src/index.js` — Carousel Home dan rotasi achievement.
- `src/portfolio.js` — Data serta interaksi Portfolio.
