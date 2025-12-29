document.addEventListener("DOMContentLoaded", function () {

  // =====================================
  // SCHUTZ: Script nur einmal laden
  // =====================================
  if (window.__mainLoaded) return;
  window.__mainLoaded = true;

  // =====================================
  // SCROLL REVEAL ANIMATION
  // =====================================
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // =====================================
  // ACTIVE NAVBAR LINK
  // =====================================
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // =====================================
  // DARK MODE
  // =====================================
  const darkToggle = document.getElementById("darkmode-toggle");

  if (darkToggle) {

    // تحميل الوضع المحفوظ
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark");
      darkToggle.checked = true;
    }

    darkToggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark");
        localStorage.removeItem("darkMode");
      }
    });
  }

  // =====================================
  // MOBILE MENU
  // =====================================
  const menuBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

});
