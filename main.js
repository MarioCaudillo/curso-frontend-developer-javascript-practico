/*Desktop menu*/
const menuEmail =   document.querySelector('.navbar-email');
const desktopMenu =   document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggledesktopMenu);

/*Burger menu */
const menuBurgerIcon    =   document.querySelector('.menu');
const mobileMenu    =   document.querySelector('.mobile-menu');
menuBurgerIcon.addEventListener('click', togglemobilepMenu);

/* Aside Product Detail*/
const   asideProduct   =   document.querySelector('#shoppingCartContainer');
const   carritoIconMenu =   document.querySelector('.navbar-shopping-cart');
carritoIconMenu.addEventListener('click', togglecarritoMenu);

/*Product cart*/
const   cardsContainer  =   document.querySelector('.cards-container');

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

const productList   =   [];
productList.push({
    name:   'Bike',
    price:  120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',   
});
productList.push({
    name:   'Watch the Throne.- Album',
    price:  320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',   
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
function renderProduct(array){
    for(product of productList){
        const productcard   =   document.createElement('div');
        productcard.classList.add('product-card');
    
        const   productImg =   document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const  productInfo =   document.createElement('div');
        productInfo.classList.add('product-info');
    
        const   productInfoDiv  =   document.createElement('div');
    
        const   productPrice    =   document.createElement('p');
        productPrice.innerText  =   '$' + product.price;
        const   productName     =   document.createElement('p');
        productName.innerText   =   product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const   productFigure   =   document.createElement('figure');
        const   productImgCart  =   document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productInfo);
    
        cardsContainer.appendChild(productcard);
    }
}
renderProduct(productList);