// Mengubah warna navbar saat di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.padding = '10px 10%';
    } else {
        nav.style.padding = '20px 10%';
    }
});

function reveal() {
    // Ambil semua elemen yang punya class 'reveal'
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; // Tinggi layar HP/Laptop
        var elementTop = reveals[i].getBoundingClientRect().top; // Jarak elemen dari atas
        var elementVisible = 150; // Jarak pemicu (elemen muncul setelah 150px terlihat)

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Opsional: hapus baris di bawah kalau mau animasinya cuma sekali pas scroll pertama
            reveals[i].classList.remove("active"); 
        }
    }
}

// Jalankan fungsi reveal setiap kali layar di-scroll
window.addEventListener("scroll", reveal);

// Jalankan sekali saat web baru dibuka (biar bagian atas langsung muncul)
reveal();

// Script untuk smooth scroll navbar (yang sebelumnya)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

// Ambil semua section yang punya ID dan link di navbar
const sections = document.querySelectorAll("section[id], header[id]");
const navLi = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    // Logika: Jika posisi scroll sudah melewati batas atas section dikurangi sedikit offset
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active"); // Hapus warna biru dari semua menu
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active"); // Tambahkan warna biru ke menu yang sesuai
    }
  });
});