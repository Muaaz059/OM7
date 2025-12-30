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

  // ✅ إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

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

    service_design: "تصميم واجهة الموقع",
    service_design_desc: "تصميم واجهات عصرية وجذابة، متوافقة مع جميع الأجهزة وتركّز على تجربة المستخدم.",
    service_full: "موقع متكامل",
    service_full_desc: "تطوير موقع كامل من التصميم إلى الإطلاق، جاهز للاستخدام ويخدم أهدافك التجارية.",
    service_support: "الدعم والتطوير",
    service_support_desc: "صيانة، تحسين الأداء، ودعم فني مستمر بعد تسليم الموقع.",
    order_service: "اطلب الخدمة",
    order_website: "اطلب الموقع",

    // ABOUT
    about_title: "من نحن",
    about_desc: "نعمل على إنشاء مواقع حديثة، سريعة، ومتوافقة مع جميع الأجهزة مع التركيز على تجربة المستخدم والأداء العالي.",
    about_desc_2: "نعمل على إنشاء مواقع حديثة، سريعة، ومتوافقة مع جميع الأجهزة مع التركيز على تجربة المستخدم والأداء العالي.",

    about_services_title: "ماذا نقدم",
    about_services_desc_1: "نقدم حلول ويب متكاملة تشمل تصميم واجهات المواقع (Frontend) وتطوير مواقع كاملة (Full Stack) تلبي احتياجات عملك.",
    about_services_desc_2: "نهتم بالتفاصيل، الجودة، والاحترافية لنقدّم مواقع تساعدك على جذب العملاء وزيادة المبيعات.",

    about_why_title: "لماذا نحن",
    about_why_desc_1: "نؤمن أن الموقع هو واجهة عملك الرقمية، لذلك نحرص على أن يكون سريعًا، آمنًا، وسهل الاستخدام.",
    about_why_desc_2: "نلتزم بالمواعيد، نقدم دعماً بعد التسليم، ونعمل دائماً على رضا العميل قبل كل شيء.",

    team_dev: "مطور ويب",
    team_designer: "مصمم مواقع",

    // PORTFOLIO
    portfolio_title: "أعمالنا",
    project_company: "موقع شركة",
    testimonials_title: "آراء عملائنا",

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
    lang_btn: "Deutsch",

    nav_home: "Startseite",
    nav_services: "Leistungen",
    nav_contact: "Kontakt",
    nav_about: "Über uns",
    nav_portfolio: "Portfolio",

    hero_title: "Wir gestalten professionelle Websites",
    hero_desc: "Wir helfen Ihnen, online sichtbar zu sein",
    hero_btn_services: "Website anfragen",
    hero_btn_contact: "Kontaktieren Sie uns",

    services_title: "Unsere Leistungen",
    services_desc: "Professionelle Weblösungen für Ihr Wachstum",

    service_design: "UI/UX Design",
    service_design_desc: "Moderne, responsive Designs mit Fokus auf Benutzerfreundlichkeit.",
    service_full: "Komplette Website",
    service_full_desc: "Von Design bis Launch – eine vollständige Website für Ihr Business.",
    service_support: "Support & Weiterentwicklung",
    service_support_desc: "Wartung, Performance-Optimierung und technischer Support.",
    order_service: "Service anfragen",
    order_website: "Website bestellen",

    about_title: "Über uns",
    about_desc: "Wir erstellen moderne, schnelle und responsive Websites mit Fokus auf Benutzererfahrung und Performance.",
    about_desc_2: "Wir erstellen moderne, schnelle und responsive Websites mit Fokus auf Benutzererfahrung und Performance.",

    about_services_title: "Was wir anbieten",
    about_services_desc_1: "Komplette Weblösungen von Frontend-Design bis Full-Stack-Entwicklung.",
    about_services_desc_2: "Wir achten auf Details, Qualität und Professionalität, um Kunden zu gewinnen.",

    about_why_title: "Warum wir",
    about_why_desc_1: "Eine Website ist das digitale Gesicht Ihres Unternehmens – schnell, sicher und benutzerfreundlich.",
    about_why_desc_2: "Wir halten Termine ein und bieten Support nach der Übergabe.",

    team_dev: "Webentwickler",
    team_designer: "Webdesigner",

    portfolio_title: "Unsere Arbeiten",
    project_company: "Unternehmenswebsite",
    testimonials_title: "Kundenbewertungen",

    contact_title: "Kontaktieren Sie uns",
    contact_desc: "Senden Sie uns eine Nachricht, wir antworten schnell",
    contact_name: "Vollständiger Name",
    contact_email: "E-Mail-Adresse",
    contact_message: "Ihre Nachricht...",
    contact_send: "Nachricht senden",

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
    lang_btn: "English",

    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_about: "About",
    nav_portfolio: "Portfolio",

    hero_title: "We design professional websites",
    hero_desc: "We help you build a strong online presence",
    hero_btn_services: "Request Your Website",
    hero_btn_contact: "Contact Us",

    services_title: "Our Services",
    services_desc: "Professional web solutions to grow your business",

    service_design: "Website UI Design",
    service_design_desc: "Modern, responsive designs focused on user experience.",
    service_full: "Complete Website",
    service_full_desc: "From design to launch – a full website tailored to your needs.",
    service_support: "Support & Maintenance",
    service_support_desc: "Ongoing maintenance, performance optimization and support.",
    order_service: "Order Service",
    order_website: "Order Website",

    about_title: "About Us",
    about_desc: "We create modern, fast and responsive websites focused on performance and UX.",
    about_desc_2: "We create modern, fast and responsive websites focused on performance and UX.",

    about_services_title: "What We Offer",
    about_services_desc_1: "Complete web solutions including frontend and full-stack development.",
    about_services_desc_2: "We focus on quality and details to help you attract clients.",

    about_why_title: "Why Choose Us",
    about_why_desc_1: "Your website is your digital identity – fast, secure and easy to use.",
    about_why_desc_2: "We respect deadlines and provide post-launch support.",

    team_dev: "Web Developer",
    team_designer: "Web Designer",

    portfolio_title: "Our Work",
    project_company: "Company Website",
    testimonials_title: "Client Testimonials",

    contact_title: "Contact Us",
    contact_desc: "Send us a message and we will reply shortly",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_message: "Write your message here...",
    contact_send: "Send Message",

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
  if (translations[lang]?.contact_title) {
  document.title = translations[lang].contact_title;
}


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

// تحميل اللغة المحفوظة عند فتح الصفحة
const savedLang = localStorage.getItem("lang") || "ar";
setLanguage(savedLang);




