// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Data berita (bisa diganti atau diambil dari Google Sheets API nantinya)
const beritaData = [
    {
        title: "PPDB Tahun Ajaran 2025/2026 Dibuka",
        date: "15 Januari 2025",
        desc: "Pendaftaran Peserta Didik Baru SMAN 1 Gemilang telah dibuka. Pendaftaran online melalui website resmi sekolah.",
        image: "https://via.placeholder.com/400x200?text=PPDB+2025"
    },
    {
        title: "Siswa SMAN 1 Gemilang Raih Medali Emas OSN",
        date: "10 Januari 2025",
        desc: "Tim Olimpiade Sains SMAN 1 Gemilang berhasil meraih 3 medali emas di ajang OSN tingkat provinsi.",
        image: "https://via.placeholder.com/400x200?text=OSN+Juara"
    },
    {
        title: "Kegiatan Class Meeting Semester Ganjil",
        date: "5 Januari 2025",
        desc: "Setelah ujian semester, siswa-siswi mengikuti class meeting dengan berbagai perlombaan seru.",
        image: "https://via.placeholder.com/400x200?text=Class+Meeting"
    }
];

// Data galeri
const galeriData = [
    "https://via.placeholder.com/400x250?text=Kegiatan+1",
    "https://via.placeholder.com/400x250?text=Kegiatan+2",
    "https://via.placeholder.com/400x250?text=Kegiatan+3",
    "https://via.placeholder.com/400x250?text=Kegiatan+4",
    "https://via.placeholder.com/400x250?text=Kegiatan+5",
    "https://via.placeholder.com/400x250?text=Kegiatan+6"
];

// Load berita ke halaman berita
if (document.getElementById('berita-container')) {
    const beritaContainer = document.getElementById('berita-container');
    beritaData.forEach(berita => {
        const beritaCard = `
            <div class="berita-card">
                <img src="${berita.image}" alt="${berita.title}">
                <div class="content">
                    <div class="date">${berita.date}</div>
                    <h3>${berita.title}</h3>
                    <p>${berita.desc}</p>
                </div>
            </div>
        `;
        beritaContainer.innerHTML += beritaCard;
    });
}

// Load galeri ke halaman galeri
if (document.getElementById('galeri-container')) {
    const galeriContainer = document.getElementById('galeri-container');
    galeriData.forEach(img => {
        const galeriItem = `
            <div class="galeri-item">
                <img src="${img}" alt="Galeri">
            </div>
        `;
        galeriContainer.innerHTML += galeriItem;
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
        contactForm.reset();
    });
}

// Active navigation highlighting
const currentPage = window.location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        item.classList.add('active');
    }
});