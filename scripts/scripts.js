"use strict";

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modalCloseButton");
const menuLinks = document.querySelectorAll(".smoothScroll");

const showHamburger = () => {
  hamburgerMenu.classList.remove("hidden");
};

hamburgerMenu.addEventListener("click", (event) => {
  modal.classList.remove("hidden");
  hamburgerMenu.classList.add("hidden");
  event.stopPropagation(); // prevent event bubbling up to window
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  showHamburger();
});

window.addEventListener("click", (event) => {
  // close the modal if it's currently visible and the click was outside the modal
  if (!modal.classList.contains("hidden") && !modal.contains(event.target)) {
    modal.classList.add("hidden");
    showHamburger();
  }
});

const clickHandler = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
  modal.classList.add("hidden");
  showHamburger();
};

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", clickHandler);
}