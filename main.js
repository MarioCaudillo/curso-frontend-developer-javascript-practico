const menuEmail =   document.querySelector('.navbar-email');
const desktopMenu =   document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggledesktopMenu);

function toggledesktopMenu(event){//función que permite desplegar nuestro menu al dar click en navbar email
    event.preventDefault();
    desktopMenu.classList.toggle('inactive');//metodo que permite el despliegue del menu
}