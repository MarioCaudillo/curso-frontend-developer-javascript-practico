/*Desktop menu*/
const menuEmail =   document.querySelector('.navbar-email');
const desktopMenu =   document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggledesktopMenu);

/*Burger menu */
const menuBurgerIcon    =   document.querySelector('.menu');
const mobileMenu    =   document.querySelector('.mobile-menu');
menuBurgerIcon.addEventListener('click', togglemobilepMenu);

/* Aside Product Detail*/
const   asideProduct   =   document.querySelector('.product-detail');
const   carritoIconMenu =   document.querySelector('.navbar-shopping-cart');
carritoIconMenu.addEventListener('click', togglecarritoMenu);

function toggledesktopMenu(event){//función que permite desplegar nuestro menu al dar click en navbar email
    event.preventDefault();
    desktopMenu.classList.toggle('inactive');//metodo que permite el despliegue del menu
}

function togglemobilepMenu(event){
    event.preventDefault();
    const   isAsideClosed   =   asideProduct.classList.toggle('inactive');
    if (!isAsideClosed) {
        asideProduct.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoMenu(event){
    event.preventDefault();
    const   isMobileMenuClosed  =   mobileMenu.classList.toggle('inactive');
    const   isDesktopMenuClosed  =   desktopMenu.classList.toggle('inactive');
    if (!isMobileMenuClosed||!isDesktopMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }else{
        desktopMenu.classList.toggle('inactive');
    }
    asideProduct.classList.toggle('inactive');   
}