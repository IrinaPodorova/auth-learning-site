document.addEventListener("DOMContentLoaded", () => {

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");

  if (!burger || !nav) return;

  burger.addEventListener("click", () => {

    // Открываем / закрываем меню
    nav.classList.toggle("active");

    // Анимация крестика
    burger.classList.toggle("active");

    // ARIA доступность
    const expanded =
      burger.getAttribute("aria-expanded") === "true";

    burger.setAttribute("aria-expanded", !expanded);

  });

});