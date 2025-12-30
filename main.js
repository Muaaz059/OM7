console.log("LANG JS LOADED");

document.addEventListener("DOMContentLoaded", function () {

  if (window.__mainLoaded) return;
  window.__mainLoaded = true;

  // ===============================
  // SCROLL REVEAL
  // ===============================
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

  // ===============================
  // ACTIVE NAV LINK
  // ===============================
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // ===============================
  // DARK MODE
  // ===============================
  const darkToggle = document.getElementById("darkmode-toggle");

  if (darkToggle) {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark");
      darkToggle.checked = true;
    }

    darkToggle.addEventListener("change", function () {
      document.body.classList.toggle("dark", this.checked);
      localStorage.setItem("darkMode", this.checked ? "enabled" : "");
    });
  }

  // ===============================
  // MOBILE MENU
  // ===============================
  const menuBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // ===============================
  // ✅ LANGUAGE BUTTON (المكان الصحيح)
  // ===============================
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => {
      langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        langMenu.classList.remove("show");
      });
    });
  }

});
const translations = {
  ar: {
    // LANGUAGE BUTTON
    lang_btn: "العربية",

    // NAV
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_contact: "تواصل",
    nav_about: "من نحن",
    nav_portfolio: "أعمالنا",

    // HERO
    hero_title: "نصمّم ونطوّر مواقع احترافية تنمّي عملك",
    hero_desc: "نساعدك على بناء حضور قوي على الإنترنت",
    hero_btn_services: "اطلب موقعك الآن",
    hero_btn_contact: "تواصل معنا",

    // SERVICES
    services_title: "خدماتنا",
    services_desc: "نقدّم حلول ويب احترافية تساعدك على النمو",

    // ABOUT
    about_title: "من نحن",

    // PORTFOLIO
    portfolio_title: "أعمالنا",

    // CONTACT
    contact_title: "تواصل معنا",
    contact_desc: "أرسل لنا رسالة وسيتم الرد عليك في أقرب وقت",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_message: "اكتب رسالتك هنا...",
    contact_send: "إرسال الرسالة",

    // FOOTER
    footer_desc: "نصمّم ونطوّر مواقع احترافية تساعدك على بناء حضور قوي على الإنترنت.",
    footer_links_title: "روابط سريعة",
    footer_contact_title: "تواصل",

    footer_home: "الرئيسية",
    footer_services: "الخدمات",
    footer_portfolio: "أعمالنا",
    footer_about: "من نحن",
    footer_contact: "تواصل معنا",

    footer_rights: "© 2025 OM7 – جميع الحقوق محفوظة"
  },

  de: {
    // LANGUAGE BUTTON
    lang_btn: "Deutsch",

    // NAV
    nav_home: "Startseite",
    nav_services: "Leistungen",
    nav_contact: "Kontakt",
    nav_about: "Über uns",
    nav_portfolio: "Portfolio",

    // HERO
    hero_title: "Wir gestalten professionelle Websites",
    hero_desc: "Wir helfen Ihnen, online sichtbar zu sein",
    hero_btn_services: "Website anfragen",
    hero_btn_contact: "Kontaktieren Sie uns",

    // SERVICES
    services_title: "Unsere Leistungen",
    services_desc: "Professionelle Weblösungen für Ihr Wachstum",

    // ABOUT
    about_title: "Über uns",

    // PORTFOLIO
    portfolio_title: "Unsere Arbeiten",

    // CONTACT
    contact_title: "Kontaktieren Sie uns",
    contact_desc: "Senden Sie uns eine Nachricht, wir antworten schnell",
    contact_name: "Vollständiger Name",
    contact_email: "E-Mail-Adresse",
    contact_message: "Ihre Nachricht...",
    contact_send: "Nachricht senden",

    // FOOTER
    footer_desc: "Wir gestalten und entwickeln professionelle Websites.",
    footer_links_title: "Schnellzugriffe",
    footer_contact_title: "Kontakt",

    footer_home: "Startseite",
    footer_services: "Leistungen",
    footer_portfolio: "Portfolio",
    footer_about: "Über uns",
    footer_contact: "Kontakt",

    footer_rights: "© 2025 OM7 – Alle Rechte vorbehalten"
  },

  en: {
    // LANGUAGE BUTTON
    lang_btn: "English",

    // NAV
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_about: "About",
    nav_portfolio: "Portfolio",

    // HERO
    hero_title: "We design professional websites",
    hero_desc: "We help you build a strong online presence",
    hero_btn_services: "Request Your Website",
    hero_btn_contact: "Contact Us",

    // SERVICES
    services_title: "Our Services",
    services_desc: "Professional web solutions to grow your business",

    // ABOUT
    about_title: "About Us",

    // PORTFOLIO
    portfolio_title: "Our Work",

    // CONTACT
    contact_title: "Contact Us",
    contact_desc: "Send us a message and we will reply shortly",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_message: "Write your message here...",
    contact_send: "Send Message",

    // FOOTER
    footer_desc: "We design and develop professional websites.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact",

    footer_home: "Home",
    footer_services: "Services",
    footer_portfolio: "Portfolio",
    footer_about: "About",
    footer_contact: "Contact",

    footer_rights: "© 2025 OM7 – All rights reserved"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // النصوص
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang]?.[key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
}




