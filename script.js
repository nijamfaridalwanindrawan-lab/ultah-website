document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => nav?.classList.remove("open"));
  });
});