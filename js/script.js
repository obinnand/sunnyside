const btn = document.getElementById("menu-btn");
const meun = document.getElementById("menu");

btn.addEventListener("click", navToggle);

// Toggle mobile  menu
function navToggle() {
  btn.classList.toggle("open");
  meun.classList.toggle("flex");
  meun.classList.toggle("hidden");
}
