document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.querySelector(".subscribe-form[data-demo]");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const emailInput = form.querySelector("#email");
      const email = emailInput?.value.trim();

      if (!email) {
        alert("Введите email перед отправкой 📧");
        return;
      }

      alert(`Спасибо за подписку, ${email}! ✅`);
      form.reset();
    });
  }

  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".header__nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
