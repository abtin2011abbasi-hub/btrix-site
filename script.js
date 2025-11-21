// script.js
document.addEventListener("DOMContentLoaded", function() {
  // انیمیشن ورود کارت‌ها (صفحه اصلی)
  const cards = document.querySelectorAll(".feature-card, .product-hero, .product-details");
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(18px)";
    setTimeout(() => {
      card.style.transition = "all 450ms cubic-bezier(.2,.9,.2,1)";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 120 * i);
  });

  // منوی موبایل ساده
  const toggle = document.getElementById("mobile-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.querySelector(".main-nav").classList.toggle("open-mobile");
    });
  }

  // فعال‌سازی لینک فعال در نوار
  const path = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(a => {
    if (a.getAttribute("href") === path) {
      a.classList.add("active");
    }
  });
});
