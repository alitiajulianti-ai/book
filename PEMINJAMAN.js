
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
let dataPeminjaman = JSON.parse(localStorage.getItem("dataPeminjaman")) || [];

const selectBuku = document.getElementById("buku");
const tabel = document.getElementById("tabelPeminjaman");

// =======================
// TAMPILKAN PILIHAN BUKU
// =======================
function tampilkanPilihanBuku() {
    selectBuku.innerHTML = "";

    dataBuku.forEach((buku, index) => {
        if (buku.stok > 0) {
            selectBuku.innerHTML += `
                <option value="${index}">
                    ${buku.judul} (Stok: ${buku.stok})
                </option>
            `;
        }
    });
}

// =======================
// TAMPILKAN TABEL
// =======================
function tampilkanTabel() {
    tabel.innerHTML = "";

    dataPeminjaman.forEach((item, i) => {
        tabel.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${item.nama}</td>
                <td>${item.buku}</td>
                <td>${item.tglPinjam}</td>
                <td>${item.tglKembali}</td>
            </tr>
        `;
    });
}

// =======================
// PROSES PINJAM
// =======================
document.getElementById("formPeminjaman").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const indexBuku = document.getElementById("buku").value;
    const tglPinjam = document.getElementById("tglPinjam").value;
    const tglKembali = document.getElementById("tglKembali").value;

    if (dataBuku[indexBuku].stok > 0) {
        dataBuku[indexBuku].stok--;

        dataPeminjaman.push({
            nama: nama,
            buku: dataBuku[indexBuku].judul,
            tglPinjam: tglPinjam,
            tglKembali: tglKembali
        });

        localStorage.setItem("dataBuku", JSON.stringify(dataBuku));
        localStorage.setItem("dataPeminjaman", JSON.stringify(dataPeminjaman));

        tampilkanPilihanBuku();
        tampilkanTabel();
        this.reset();

        alert("Buku berhasil dipinjam!");
    } else {
        alert("Stok habis!");
    }
});

// =======================
// RESET DATA
// =======================
function resetData(){
    if(confirm("Yakin mau reset semua data?")){

        // hapus data peminjaman
        localStorage.removeItem("dataPeminjaman");

        // reset stok ke awal
        dataBuku = [
            {judul:"Matematika", stok:5},
            {judul:"Bahasa Indonesia", stok:3},
            {judul:"IPA", stok:4},
            {judul:"Sejarah", stok:6},
            {judul:"Geografi", stok:5},
            {judul:"Ekonomi", stok:4},
            {judul:"Fisika", stok:3},
            {judul:"Kimia", stok:4},
            {judul:"Biologi", stok:5},
            {judul:"Seni Budaya", stok:6},
            {judul:"Olahraga", stok:7},
            {judul:"Bahasa Inggris", stok:5}
        ];

        localStorage.setItem("dataBuku", JSON.stringify(dataBuku));

        // kosongin tabel
        dataPeminjaman = [];
        tabel.innerHTML = "";

        tampilkanPilihanBuku();

        alert("Data berhasil direset!");
    }
}

// =======================
// LOAD AWAL
// =======================
tampilkanPilihanBuku();
tampilkanTabel();