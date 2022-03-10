const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function togggleMenu() {
    menu.classList.toggle("menu-opened")
}

openMenuBtn.addEventListener("click", togggleMenu);
closeMenuBtn.addEventListener("click", togggleMenu);



