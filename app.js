const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  root.classList.toggle("light");
});
