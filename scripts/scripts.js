// get the hamburger menu and modal
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modalCloseButton");

// add event listener to hamburger menu
hamburgerMenu.addEventListener("click", (event) => {
  modal.style.display = "block";
  event.stopPropagation(); // prevent event bubbling up to window
});

modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  // only close the modal if it's currently visible and the click was outside the modal
  if (modal.style.display === "block" && !modal.contains(event.target)) {
    modal.style.display = "none";
  }
});