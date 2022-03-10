const menu = document.querySelector("#menu");
const openMenuBtn = document.querySelector("#open-menu");
const closeMenuBtn = document.querySelector("#close-menu");

const toggleMenu = () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }else{
        menu.classList.add('active')
    }

    
}

const toggleElement = (element, nameclass)=>{
    element.classList.toggle(nameclass)
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);