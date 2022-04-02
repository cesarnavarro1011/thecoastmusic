const navBoton = document.querySelector(".nav-boton");
const navMenu = document.querySelector(".nav-menu");

navBoton.addEventListener("click", ()  => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav.menu_visible")){
        navBoton.setAttribute("aria-label", "Cerrar menú");
    }else  {
        navBoton.setAttribute("aria-label","Abrir menú")
    }
});