let dataBuku = [
  { judul: "MTK", deskripsi: "Matematika SMK", stok: 15 },
  { judul: "PAI", deskripsi: "Pendidikan Agama Islam", stok: 15 },
  { judul: "PJOK", deskripsi: "Pendidikan Jasmani Olahraga", stok: 15 },
  { judul: "KK", deskripsi: "Kejuruan Kompetensi", stok: 15 },
  { judul: "KKA", deskripsi: "Kejuruan Kelas Atas", stok: 15 },
  { judul: "PKK", deskripsi: "Produk Kreatif dan Kewirausahaan", stok: 15 },
  { judul: "B SUNDA", deskripsi: "Bahasa Sunda", stok: 15 },
  { judul: "B INDONESIA", deskripsi: "Bahasa Indonesia", stok: 14 },
  { judul: "B INGGRIS", deskripsi: "Bahasa Inggris", stok: 15 },
  { judul: "PKN", deskripsi: "Pendidikan Kewarganegaraan", stok: 14 },
  { judul: "SEJARAH", deskripsi: "Sejarah Indonesia", stok: 15 }
];
const daftarBuku = document.getElementById("daftarBuku");

function tampilkanBuku() {
  daftarBuku.innerHTML = "";

  dataBuku.forEach(buku => {
    daftarBuku.innerHTML += `
  <div class="card-buku">
    <h3>${buku.judul}</h3>
    <p>${buku.deskripsi}</p>
    <p class="stok">Stok: ${buku.stok}</p>
  </div>
`;
  });
}

tampilkanBuku();