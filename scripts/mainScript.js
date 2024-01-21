const btn = document.querySelector(".burger");
const menuHide = document.querySelector(".menu");
const body = document.querySelector("body");
const btnClose = document.querySelector(".btn-menu-close");

btn.addEventListener("click", () => {
  menuHide.classList.toggle("open");
  body.style.overflowY = "hidden";
});

btnClose.addEventListener("click", () => {
  menuHide.classList.toggle("open");
  body.style.overflowY = "visible";
});

const links = document.querySelectorAll(".menu-nav-text");
links.forEach((link) => {
    link.addEventListener("click", () => {
        menuHide.classList.toggle("open");
  body.style.overflowY = "visible";
    })
});