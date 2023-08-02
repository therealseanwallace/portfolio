const hamburgerMenu = document.querySelector(".hamburgerMenu");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modalCloseButton");

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