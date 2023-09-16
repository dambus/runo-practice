const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const burger = document.getElementById("burger-menu");
const meny = document.getElementById("menu");

window.onscroll = function () {
  let top = window.scrollY;
  top > 600 ? navbar.classList.add("black") : navbar.classList.remove("black");
};

burger.addEventListener("click", function () {
  this.classList.toggle("close");
  meny.classList.toggle("overlay");
});
