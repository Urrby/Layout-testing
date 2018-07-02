
const navButton = document.querySelector(".menu_btn");
const phoneMenu = document.querySelector(".small_menu");
const wrapperMenu = document.querySelector(".menu");

navButton.addEventListener("click", function () {
    wrapperMenu.classList.toggle("small_menu");
});


