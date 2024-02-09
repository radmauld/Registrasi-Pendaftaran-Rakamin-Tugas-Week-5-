// OOP: Kelas Pendaftar
class Pendaftar {
  constructor(nama, umur, uangSangu) {
    this.nama = nama;
    this.umur = umur;
    this.uangSangu = uangSangu;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const pendaftarList = [];

  // DOM: Memasang event listener pada form
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value;
      const umur = parseInt(document.getElementById("umur").value);
      const uangSangu = parseInt(document.getElementById("uang-sangu").value);

      // Memeriksa kriteria
      if (
        nama.length >= 10 &&
        umur >= 25 &&
        uangSangu >= 100000 &&
        uangSangu <= 1000000
      ) {
        const newPendaftar = new Pendaftar(nama, umur, uangSangu);
        pendaftarList.push(newPendaftar);
        updateListAndResume();
      } else {
        nama.length <= 10 && alert("Karakter pada nama kurang dari 10.");
      }
    });

  // DOM: Fungsi untuk memperbarui tabel pendaftar dan resume
  function updateListAndResume() {
    const tableBody = document.getElementById("pendaftarTableBody");
    tableBody.innerHTML = "";

    let totalUmur = 0;
    let totalUangSangu = 0;

    pendaftarList.forEach((pendaftar) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${pendaftar.nama}</td>
                         <td>${pendaftar.umur}</td>
                         <td>${pendaftar.uangSangu}</td>
                         <td>Resume: ${pendaftar.nama} memiliki umur ${pendaftar.umur} dan uang sangu sebesar ${pendaftar.uangSangu} Rp</td>`;
      tableBody.appendChild(row);

      totalUmur += pendaftar.umur;
      totalUangSangu += pendaftar.uangSangu;
    });

    const averageUmur = totalUmur / pendaftarList.length;
    const averageUangSangu = totalUangSangu / pendaftarList.length;

    document.getElementById(
      "resumeText"
    ).textContent = `Rata-rata pendaftar memiliki uang sangu sebesar ${averageUangSangu} dengan rata-rata umur ${averageUmur}`;
  }

  // DOM: Memasang event listener untuk tab
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.getAttribute("href").substring(1);
      showTab(tabId);
    });
  });

  // DOM: Fungsi untuk menampilkan tab yang dipilih
  function showTab(tabId) {
    document.querySelectorAll(".tab-pane").forEach((tabPane) => {
      if (tabPane.id === tabId) {
        tabPane.classList.add("show", "active");
      } else {
        tabPane.classList.remove("show", "active");
      }
    });

    document.querySelectorAll(".nav-link").forEach((navLink) => {
      if (navLink.getAttribute("href") === `#${tabId}`) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  }
});
