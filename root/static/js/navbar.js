/* Shrink navbar on scroll */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

/* Theme toggle */
const body = document.body;
const toggle = document.getElementById("themeToggle");
const toggleMobile = document.getElementById("themeToggleMobile");

function toggleTheme() {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggle.textContent = "🌙";
    toggleMobile.textContent = "🌙 Dark Mode";
  } else {
    body.classList.replace("dark", "light");
    toggle.textContent = "☀️";
    toggleMobile.textContent = "☀️ Light Mode";
  }
}

toggle.addEventListener("click", toggleTheme);
toggleMobile.addEventListener("click", toggleTheme);

/* Mobile menu */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
