// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });
    
    // Tutup menu saat klik di luar
    document.addEventListener('click', function(event) {
        if (navLinks && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
        }
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

// Data berita (lebih lengkap)
const beritaData = [
    {
        title: "PPDB Tahun Ajaran 2025/2026 Dibuka",
        date: "15 Januari 2025",
        desc: "Pendaftaran Peserta Didik Baru SMAN 1 Gemilang telah dibuka. Pendaftaran online melalui website resmi sekolah. Segera daftarkan putra-putri Anda.",
        image: "https://placehold.co/400x200/3498db/white?text=PPDB+2025"
    },
    {
        title: "Siswa SMAN 1 Gemilang Raih Medali Emas OSN",
        date: "10 Januari 2025",
        desc: "Tim Olimpiade Sains SMAN 1 Gemilang berhasil meraih 3 medali emas di ajang OSN tingkat provinsi. Prestasi membanggakan!",
        image: "https://placehold.co/400x200/e74c3c/white?text=OSN+Juara"
    },
    {
        title: "Kegiatan Class Meeting Semester Ganjil",
        date: "5 Januari 2025",
        desc: "Setelah ujian semester, siswa-siswi mengikuti class meeting dengan berbagai perlombaan seru seperti futsal dan cerdas cermat.",
        image: "https://placehold.co/400x200/2ecc71/white?text=Class+Meeting"
    },
    {
        title: "Workshop Digital Marketing untuk Siswa",
        date: "20 Desember 2024",
        desc: "Siswa SMAN 1 Gemilang mengikuti workshop digital marketing untuk mempersiapkan karir di era digital.",
        image: "https://placehold.co/400x200/f39c12/white?text=Workshop"
    },
    {
        title: "Peringatan Hari Guru Nasional",
        date: "25 November 2024",
        desc: "Upacara dan acara syukur dalam rangka memperingati Hari Guru Nasional dengan penuh haru.",
        image: "https://placehold.co/400x200/9b59b6/white?text=Hari+Guru"
    },
    {
        title: "Kunjungan Studi Tiru ke Sekolah Unggulan",
        date: "15 November 2024",
        desc: "Guru dan staf SMAN 1 Gemilang melakukan kunjungan studi tiru ke sekolah unggulan.",
        image: "https://placehold.co/400x200/1abc9c/white?text=Studi+Tiru"
    }
];

// Data galeri
const galeriData = [
    "https://placehold.co/400x250/3498db/white?text=Kegiatan+1",
    "https://placehold.co/400x250/e74c3c/white?text=Kegiatan+2",
    "https://placehold.co/400x250/2ecc71/white?text=Kegiatan+3",
    "https://placehold.co/400x250/f39c12/white?text=Kegiatan+4",
    "https://placehold.co/400x250/9b59b6/white?text=Kegiatan+5",
    "https://placehold.co/400x250/1abc9c/white?text=Kegiatan+6",
    "https://placehold.co/400x250/e67e22/white?text=Kegiatan+7",
    "https://placehold.co/400x250/34495e/white?text=Kegiatan+8",
    "https://placehold.co/400x250/16a085/white?text=Kegiatan+9"
];

// Load berita ke halaman berita
if (document.getElementById('berita-container')) {
    const beritaContainer = document.getElementById('berita-container');
    beritaData.forEach(berita => {
        const beritaCard = `
            <div class="berita-card">
                <img src="${berita.image}" alt="${berita.title}">
                <div class="content">
                    <div class="date"><i class="far fa-calendar-alt"></i> ${berita.date}</div>
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
    galeriData.forEach((img, index) => {
        const galeriItem = `
            <div class="galeri-item" onclick="openImageModal('${img}')">
                <img src="${img}" alt="Galeri ${index + 1}">
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
        const name = this.querySelector('input[placeholder="Nama Lengkap"]').value;
        const email = this.querySelector('input[placeholder="Email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Mohon isi nama, email, dan pesan Anda!');
            return;
        }
        
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera di ${email}.`);
        this.reset();
    });
}

// Active navigation highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        item.classList.add('active');
    }
});

// Fungsi untuk modal gambar
window.openImageModal = function(imgSrc) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
};