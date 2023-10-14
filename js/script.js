const header = document.getElementsByTagName("header")[0];
const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const hamburgerIcon = document.querySelector("#hamburger-icon i");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.boxShadow = "0px 0px 10px 5px rgb(0 0 0 / 13%)";
    header.style.padding = "10px 15px";
    nav.style.top = header.height;
  } else {
    header.style.boxShadow = "none";
    header.style.padding = "15px";
  }
}

window.onscroll = function () {
  scrollFunction();
};

hamburgerIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
});
