const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("")) {
    menu.classList.remove("");
  } else {
    menu.classList.add("");
  }
});
