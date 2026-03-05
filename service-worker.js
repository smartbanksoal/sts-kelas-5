const CACHE_NAME = 'sts-kelas-5-v1';
const urlsToCache = [
 './index.html',
  './icon-512.png',
  './baner-sbs.png',
  
  // Daftar 11 file soal:
  '/soal/MTK-STS-K5-S2-HOTS.html',
  '/soal/ENG-STS-K5-S2-HOTS.html',
  '/soal/IPAS-STS-K5-S2-HOTS.html',
  '/soal/PJOK-STS-K5-S2-HOTS.html',
  '/soal/PNC-STS-K5-S2-HOTS.html',
  '/soal/IND-STS-K5-S2-HOTS.html',
  '/soal/JWA-STS-K5-S2-HOTS.html',
  '/soal/PAI-STS-K5-S2-HOTS.html',
  '/soal/gambar/soal11-analisis-segitiga.jpg',
  '/soal/gambar/soal2-segitiga-sudut.jpg',
  '/soal/gambar/soal4-tabel-sifat.jpg',
  '/soal/gambar/soal9-analisis-sudut.jpg',
  '/soal/gambar/soal10-kompas-sudut.jpg',
  '/soal/gambar/heart.jpg',
  '/soal/gambar/stomach.jpg',
  '/soal/gambar/giraffe.jpg',
  '/soal/gambar/lion_cat.jpg',
  '/soal/gambar/trees.jpg',
  '/soal/gambar/soal-pernapasan.jpg',
  '/soal/gambar/soal-pertumbuhan.jpg',
  '/soal/gambar/soal-fauna.jpg',
  '/soal/gambar/soal-nutrisi.jpg',
  '/soal/gambar/soal-peta.jpg',
  '/soal/gambar/soal4.jpg',
  '/soal/gambar/soal2.jpg',
  '/soal/gambar/soal5.jpg',
  '/soal/gambar/soal8.jpg',
  '/soal/gambar/soal1.jpg',
  '/soal/gambar/gamelan.jpg',
  '/soal/gambar/tari_saman.jpg',
  '/soal/gambar/rendang.jpg',
  '/soal/gambar/wayang.jpg',
  '/soal/gambar/gotong_royong.jpg',
  '/soal/gambar/iklan_sepatu.jpg',
  '/soal/gambar/siklus_air.jpg',
  '/soal/gambar/rambu_dilarang_parkir.jpg',
  '/soal/gambar/brosur_lomba_baca.jpg',
  '/soal/gambar/botol_obat.jpg',
  '/soal/gambar/jawa1.jpg',
  '/soal/gambar/jawa6.jpg',
  '/soal/gambar/jawa11.jpg',
  '/soal/gambar/jawa16.jpg',
  '/soal/gambar/jawa21.jpg',
  '/soal/gambar/gambar-toleransi1.jpg',
  '/soal/gambar/gambar-gotongroyong.jpg',
  '/soal/gambar/gambar-mizan.jpg',
  '/soal/gambar/gambar-menjenguk.jpg',
  '/soal/gambar/gambar-ibadah.jpg'
];

// Menyimpan file ke cache saat aplikasi pertama kali dibuka
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Mengambil file dari cache saat aplikasi berjalan offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Gunakan file dari cache
        }
        return fetch(event.request); // Ambil dari internet jika tidak ada di cache
      })
  );

});
