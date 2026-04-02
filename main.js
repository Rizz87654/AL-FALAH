// TUNGGU SAMPAI DOM SELESAI DIMUAT
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== HAMBURGER MENU ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    console.log('Menu toggle ditemukan:', menuToggle); // Untuk debugging
    console.log('Nav links ditemukan:', navLinks);
    
    if (menuToggle && navLinks) {
        // Event klik untuk hamburger
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            navLinks.classList.toggle('active');
            console.log('Menu diklik, class active:', navLinks.classList.contains('active'));
        });
        
        // Tutup menu jika klik di luar
        document.addEventListener('click', function(event) {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    } else {
        console.error('Menu toggle atau nav links tidak ditemukan!');
    }
    
    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // ========== DATA BERITA ==========
    const beritaData = [
        {
            title: "PPDB Tahun Ajaran 2025/2026 Dibuka",
            date: "15 Januari 2025",
            desc: "Pendaftaran Peserta Didik Baru SMAN 1 Gemilang telah dibuka. Pendaftaran online melalui website resmi sekolah.",
            image: "https://placehold.co/400x200/3498db/white?text=PPDB+2025"
        },
        {
            title: "Siswa SMAN 1 Gemilang Raih Medali Emas OSN",
            date: "10 Januari 2025",
            desc: "Tim Olimpiade Sains SMAN 1 Gemilang berhasil meraih 3 medali emas di ajang OSN tingkat provinsi.",
            image: "https://placehold.co/400x200/e74c3c/white?text=OSN+Juara"
        },
        {
            title: "Kegiatan Class Meeting Semester Ganjil",
            date: "5 Januari 2025",
            desc: "Setelah ujian semester, siswa-siswi mengikuti class meeting dengan berbagai perlombaan seru.",
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
    
    // Load berita
    const beritaContainer = document.getElementById('berita-container');
    if (beritaContainer) {
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
    
    // ========== DATA GALERI ==========
    const galeriData = [
        "https://placehold.co/400x250/3498db/white?text=Kegiatan+1",
        "https://placehold.co/400x250/e74c3c/white?text=Kegiatan+2",
        "https://placehold.co/400x250/2ecc71/white?text=Kegiatan+3",
        "https://placehold.co/400x250/f39c12/white?text=Kegiatan+4",
        "https://placehold.co/400x250/9b59b6/white?text=Kegiatan+5",
        "https://placehold.co/400x250/1abc9c/white?text=Kegiatan+6"
    ];
    
    // Load galeri
    const galeriContainer = document.getElementById('galeri-container');
    if (galeriContainer) {
        galeriData.forEach((img, index) => {
            const galeriItem = `
                <div class="galeri-item" onclick="openImageModal('${img}')">
                    <img src="${img}" alt="Galeri ${index + 1}">
                </div>
            `;
            galeriContainer.innerHTML += galeriItem;
        });
    }
    
    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Nama Lengkap"]');
            const email = this.querySelector('input[placeholder="Email"]');
            const message = this.querySelector('textarea');
            
            if (!name.value || !email.value || !message.value) {
                alert('Mohon isi semua field yang wajib diisi!');
                return;
            }
            
            alert(`Terima kasih ${name.value}! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera di ${email.value}.`);
            this.reset();
        });
    }
    
    // ========== ACTIVE NAVIGATION ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
    
    console.log('JavaScript selesai dimuat!');
});

// ========== FUNGSI MODAL GAMBAR (GLOBAL) ==========
function openImageModal(imgSrc) {
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
        object-fit: contain;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}