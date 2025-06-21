document.addEventListener('DOMContentLoaded', function() {
    const detailPanel = document.getElementById('detail-panel');
    const detailTitle = document.getElementById('detail-title');
    const detailImage = document.getElementById('detail-image');
    const detailDescription = document.getElementById('detail-description');
    const closeBtn = document.getElementById('close-btn');

    // Data untuk setiap area di Pokdarwis Kang Bejo
    const areaData = {
        'kebun-kangkung': { // Gunakan ID atau data-area sebagai kunci
            title: "Hamparan Kebun Kangkung Edukatif",
            image: "images/kebun-kangkung.jpg", // Ganti dengan gambar kebun kangkung
            description: "Jelajahi luasnya perkebunan kangkung khas Sumber Rejo. Di sini Anda bisa belajar langsung tentang proses penanaman hingga panen kangkung segar."
        },
        homestay: {
            title: "Fasilitas Homestay Nyaman",
            image: "images/homestay.jpg", // Ganti dengan gambar homestay
            description: "Nikmati pengalaman menginap yang nyaman di homestay yang dikelola warga. Pilihan tepat untuk beristirahat sambil menikmati suasana pedesaan di tengah kota."
        },
        'food-court': {
            title: "Pusat Jajanan Serba Ada (PUJASERA)",
            image: "images/pujasera.jpg", // Ganti dengan gambar food court
            description: "Cicipi berbagai hidangan lezat, mulai dari olahan kangkung spesial hingga makanan tradisional dan cepat saji. Cocok untuk mengisi perut setelah berkeliling."
        },
        edukasi: {
            title: "Area Edukasi & Pelatihan",
            image: "images/area-edukasi.jpg", // Ganti dengan gambar area edukasi
            description: "Ikuti berbagai pelatihan menarik seperti menanam kangkung, hidroponik, atau membuat tauge. Pengalaman belajar yang menyenangkan untuk segala usia!"
        },
        'spot-foto': {
            title: "Spot Foto Instagramable",
            image: "images/spot-foto.jpg", // Ganti dengan gambar spot foto
            description: "Abadikan momen indah Anda di berbagai spot foto unik dan menarik, seperti 'I Love Kampung Kangkung' atau kincir angin."
        }
        // Tambahkan data untuk area lain yang Anda definisikan di HTML
    };

    // Tangani klik pada setiap area denah
    document.querySelectorAll('.area').forEach(areaDiv => {
        areaDiv.addEventListener('click', function() {
            const areaName = this.getAttribute('data-area');

            if (areaName && areaData[areaName]) {
                const data = areaData[areaName];
                detailTitle.textContent = data.title;
                detailImage.src = data.image;
                detailImage.alt = "Gambar " + data.title;
                detailDescription.textContent = data.description;
                
                detailPanel.classList.add('active');
            }
        });
    });

    // Tangani klik tombol tutup
    closeBtn.addEventListener('click', function() {
        detailPanel.classList.remove('active');
    });
});