document.addEventListener('DOMContentLoaded', function() {
    const detailPanel = document.getElementById('detail-panel');
    const detailTitle = document.getElementById('detail-title');
    const detailImage = document.getElementById('detail-image');
    const detailDescription = document.getElementById('detail-description');
    const closeBtn = document.getElementById('close-btn');

    // Data untuk semua area di Pokdarwis Kang Bejo (gabungan kotak dan titik)
    const areaData = {
        // --- Data untuk Area Kotak-Kotak Besar Sesuai Gambar ---
        'kangkung-atas': {
            title: "Area Kebun Kangkung A",
            image: "images/kangkung-atas.jpg",
            description: "Bagian atas kebun kangkung, tempat pembibitan awal dan penelitian varietas baru."
        },
        'kangkung-kiri-atas': {
            title: "Area Kebun Kangkung B",
            image: "images/kangkung-kiri-atas.jpg",
            description: "Area vertikal kebun kangkung yang menunjukkan metode tanam modern dan efisien lahan."
        },
        'kangkung-kanan-atas': {
            title: "Area Kebun Kangkung C",
            image: "images/kangkung-kanan-atas.jpg",
            description: "Hamparan luas kebun kangkung utama dengan jalur pengunjung, ideal untuk edukasi dan foto."
        },
        'kangkung-kanan-bawah': {
            title: "Area Kebun Kangkung D",
            image: "images/kangkung-kanan-bawah.jpg",
            description: "Zona budidaya kangkung dengan sistem pengairan khusus dan area panen."
        },
        'pujasera-utama': {
            title: "Pujasera Utama (Pusat Kuliner)",
            image: "images/pujasera-utama-full.jpg",
            description: "Pusat jajanan serba ada yang menyajikan berbagai hidangan lezat, termasuk olahan kangkung kreatif."
        },
        'homestay-kiri-atas-1': {
            title: "Unit Homestay A",
            image: "images/homestay-a.jpg",
            description: "Unit penginapan nyaman dengan pemandangan kebun kangkung, cocok untuk keluarga kecil."
        },
        'homestay-kiri-atas-2': {
            title: "Unit Homestay B",
            image: "images/homestay-b.jpg",
            description: "Unit homestay eksklusif dengan fasilitas lengkap untuk pengalaman menginap yang lebih privat."
        },
        'homestay-kiri-bawah': {
            title: "Unit Homestay C",
            image: "images/homestay-c.jpg",
            description: "Homestay dengan desain tradisional yang menawan, memberikan nuansa pedesaan asli Balikpapan."
        },
        'homestay-kanan': {
            title: "Homestay D (Unit Khusus)",
            image: "images/homestay-d.jpg",
            description: "Unit homestay di sisi timur, menawarkan ketenangan dan akses mudah ke area edukasi."
        },

        // --- Data untuk Titik-Titik Lingkaran (POIs Spesifik) ---
        'master-point': {
            title: "1. Kang Bejo Master Point",
            image: "images/1-master-point.jpg",
            description: "Titik pusat dan ikon utama Pokdarwis Kang Bejo. Area ini menjadi simbol komitmen kami terhadap wisata edukasi kangkung."
        },
        'pujasera-spesifik': { // Key disesuaikan agar unik dan tidak tumpang tindih dengan 'pujasera-utama'
            title: "2. Pojok Kuliner Spesial Pujasera",
            image: "images/2-pujasera.jpg",
            description: "Salah satu spot favorit di Pujasera, tempat Anda bisa menemukan hidangan khas unggulan yang wajib dicoba."
        },
        sekretariat: {
            title: "3. Ruang Sekretariat",
            image: "images/3-sekretariat.jpg",
            description: "Kantor pusat administrasi dan informasi Pokdarwis Kang Bejo. Hubungi staf kami untuk pertanyaan, pendaftaran kunjungan, atau kerjasama."
        },
        'toilet-umum': {
            title: "4. Toilet Umum",
            image: "images/4-toilet-umum.jpg",
            description: "Fasilitas toilet yang bersih dan terawat tersedia untuk kenyamanan seluruh pengunjung."
        },
        mading: {
            title: "5. Majalah Dinding (Mading)",
            image: "images/5-mading.jpg",
            description: "Informasi terbaru seputar kegiatan Pokdarwis, berita komunitas, dan jadwal acara dapat Anda temukan di mading ini."
        },
        'area-bermain': {
            title: "6. Area Bermain",
            image: "images/6-area-bermain.jpg",
            description: "Zona aman dan menyenangkan bagi anak-anak untuk bermain dan berinteraksi, dilengkapi dengan fasilitas permainan sederhana."
        },
        gazebo: {
            title: "7. Gazebo",
            image: "images/7-gazebo.jpg",
            description: "Gazebo-gazebo yang teduh dan nyaman tersedia untuk bersantai, piknik keluarga, atau sekadar menikmati suasana asri Pokdarwis."
        },
        'area-edukasi-kangkung': {
            title: "8. Area Edukasi Tanaman Kangkung",
            image: "images/8-edukasi-kangkung.jpg",
            description: "Pelajari seluk-beluk budidaya kangkung, dari proses penanaman hingga perawatan, dalam sesi edukasi interaktif di area ini."
        },
        aquaponik: {
            title: "9. Aquaponik",
            image: "images/9-aquaponik.jpg",
            description: "Saksikan sistem aquaponik inovatif kami, di mana ikan dan tanaman tumbuh bersinergi dalam lingkungan yang berkelanjutan."
        },
        'kebun-toga': {
            title: "10. Kebun Tanaman Obat Keluarga (Toga)",
            image: "images/10-kebun-toga.jpg",
            description: "Temukan beragam jenis tanaman obat tradisional dan pelajari manfaatnya untuk kesehatan keluarga di kebun Toga kami."
        },
        'kandang-pupuk': {
            title: "11. Kandang Pupuk",
            image: "images/11-kandang-pupuk.jpg",
            description: "Lihat langsung proses pengolahan limbah organik menjadi pupuk kompos berkualitas tinggi yang ramah lingkungan."
        },
        'kincir-ontel': {
            title: "12. Kincir Angin & Tempat Ontel Balikpapan Mania",
            image: "images/12-kincir-ontel.jpg",
            description: "Spot unik dengan kincir angin fungsional dan deretan sepeda ontel klasik, cocok untuk berfoto dan mengenang masa lalu."
        },
        'spot-amor-kangkung': {
            title: "13. Spot Amor Kangkung",
            image: "images/13-amor-kangkung.jpg",
            description: "Abadikan momen cinta Anda untuk kangkung di spot foto kreatif ini, simbol apresiasi terhadap hasil bumi lokal."
        },
        'spot-selamat-datang': {
            title: "14. Spot Foto Selamat Datang",
            image: "images/14-selamat-datang.jpg",
            description: "Titik pertama yang menyambut Anda di Pokdarwis Kang Bejo, area yang sempurna untuk foto perkenalan Anda dengan destinasi ini."
        },
        'kincir-psht': {
            title: "15. Kincir Angin PSHT",
            image: "images/15-kincir-psht.jpg",
            description: "Kincir angin yang melambangkan semangat persaudaraan Setia Hati Terate, menambah keunikan lansekap Pokdarwis."
        },
        'rumah-wonderful-indonesia': {
            title: "16. Rumah Wonderful Indonesia",
            image: "images/16-rumah-wonderful.jpg",
            description: "Paviliun yang menampilkan kekayaan budaya dan destinasi wisata 'Wonderful Indonesia', menginspirasi petualangan Anda selanjutnya."
        },
        'spot-sapta-pesona': {
            title: "17. Spot Foto Sapta Pesona",
            image: "images/17-sapta-pesona.jpg",
            description: "Area yang didesain sesuai tujuh unsur Sapta Pesona (Aman, Tertib, Bersih, Sejuk, Indah, Ramah, Kenangan) untuk pengalaman berfoto yang sempurna."
        },
        'petunjuk-arah': {
            title: "18. Petunjuk Arah",
            image: "images/18-petunjuk-arah.jpg",
            description: "Papan petunjuk yang jelas untuk membantu Anda menavigasi setiap area di Pokdarwis Kang Bejo."
        },
        'jalur-evakuasi': {
            title: "19. Jalur Evakuasi",
            image: "images/19-jalur-evakuasi.jpg",
            description: "Rute evakuasi darurat yang jelas ditandai untuk keselamatan semua pengunjung. Prioritas kami adalah keamanan Anda."
        },
        'area-parkir-spesifik': {
            title: "20. Titik Parkir Utama",
            image: "images/20-area-parkir.jpg",
            description: "Titik lokasi untuk area parkir utama di Pokdarwis Kang Bejo."
        },
        hidroponik: {
            title: "21. Hidroponik",
            image: "images/21-hidroponik.jpg",
            description: "Saksikan metode pertanian hidroponik modern yang efisien dan ramah lingkungan dalam budidaya berbagai jenis sayuran."
        },
        'budidaya-tauge': {
            title: "22. Budidaya Tauge",
            image: "images/22-budidaya-tauge.jpg",
            description: "Pelajari proses budidaya tauge segar dari kacang hijau hingga siap panen, sebuah kegiatan edukasi yang menarik."
        },
        'spot-foto-tulisan-love': {
            title: "23. Spot Foto Tulisan Love",
            image: "images/23-love-tulisan.jpg",
            description: "Abadikan momen romantis Anda dengan latar belakang tulisan 'LOVE' yang menjadi daya tarik visual."
        },
        'spot-foto-love': {
            title: "24. Spot Foto Love",
            image: "images/24-love-bentuk.jpg",
            description: "Berfoto di instalasi berbentuk hati yang ikonik, sempurna untuk pasangan, keluarga, atau teman-teman."
        },
        'spot-beranda-instagram': {
            title: "25. Spot Foto Beranda Instagram",
            image: "images/25-beranda-instagram.jpg",
            description: "Area yang didesain khusus agar foto-foto Anda tampil menawan di beranda Instagram. Jangan lupa tag Pokdarwis Kang Bejo!"
        },
        'homestay-spesifik': {
            title: "26. Unit Homestay Spesifik",
            image: "images/26-homestay.jpg",
            description: "Titik lokasi untuk salah satu unit homestay yang nyaman dan tersedia untuk disewa."
        },
        'produksi-keripik': {
            title: "27. Produksi Keripik Kangkung & Kue Sagu",
            image: "images/27-keripik-sagu.jpg",
            description: "Saksikan langsung proses pembuatan keripik kangkung renyah dan kue sagu tradisional, serta cicipi hasilnya!"
        },
        'produksi-bolu': {
            title: "28. Produksi Bolu & Cimi-Cimi Kangkung",
            image: "images/28-bolu-cimi.jpg",
            description: "Lihat bagaimana kangkung diolah menjadi bolu dan cimi-cimi yang lezat. Ide oleh-oleh unik dari Balikpapan."
        },
        gapura: {
            title: "29. Gapura",
            image: "images/29-gapura.jpg",
            description: "Gerbang utama yang megah menyambut kedatangan Anda di Pokdarwis Kang Bejo, penanda awal petualangan Anda."
        }
    };

    // Tangani klik pada setiap elemen yang memiliki kelas 'area' ATAU 'map-point'
    document.querySelectorAll('.area, .map-point').forEach(element => {
        element.addEventListener('click', function() {
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