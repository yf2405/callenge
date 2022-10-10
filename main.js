// funcionallidad en cantidaad de articulos entre + y -

let minusBtn =document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
     console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0 ){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;  
    console.log(userInputNumber);
});

// Agregar el total de productos cuando de hace click en add to cart

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let PreviousVlaue = parseInt(cartNotification.innerText);


addToCartBtn.addEventListener('click', ()=>{

     PreviousVlaue = PreviousVlaue + userInputNumber;
     
     cartNotification.innerText = PreviousVlaue;
     cartNotification.style.display = 'block';
     drawProducto()
     
     
     
});


//mostrar el modal dettalle del carrito
const CartIconBtn = document.querySelector('.header__cart');
const CartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const ProductContainer = document.querySelector('.cart-modal__chekout-container');
CartIconBtn.addEventListener('click', ()=>{
   
    CartModal.classList.toggle('show');
    if(PreviousVlaue == 0){
        ProductContainer.innerHTML= '<p class= "card-empty">You cart is empty</p>';
        
   }
   else{
    drawProducto()
   }
});

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
deleteProductBtn.addEventListener('click', () =>{
    ProductContainer.innerHTML= '<p class= "card-empty">You cart is empty</p>';
    PreviousVlaue = 0;
    cartNotification.innerText = PreviousVlaue;
});
}
// cambio de imagenes
const imageContainer = document.querySelector('.gallery__image-container');
const NextGalleryBtn = document.querySelector('.gallery__next');
const PreviusGalleryBtn = document.querySelector('.gallery__previus');
   let imgindex = 1;

NextGalleryBtn.addEventListener('click' , ()=>{ 
    changeNextImage(imageContainer);
   
});
PreviusGalleryBtn.addEventListener('click' , ()=>{ 
    changePreviusImage(imageContainer);
   
});

//Mostrar el modal de imagenes cuando haga click en la imagen principal
const imagenesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');
imageContainer.addEventListener('click' , ()=>{
    imagenesModal.style.display = 'grid';

});
//Cambiar las imagnes principales desde los thumbanils
closeModalBtn.addEventListener( 'click', ()=>{
    imagenesModal.style.display = 'none';
});

let thumbails = document.querySelectorAll('.gallery__thumail');
thumbails = [...thumbails]

thumbails.forEach(thumbail => {
    thumbail.addEventListener('click', event=>{
       
        imageContainer.style.backgroundImage = `url('../images/image-product-${ event.target.id}.jpg')`
    });
});
//Cambiar las imagnes principales desde los thumbanils en el modal
const modalthumbailsgallery = document.querySelector('.modal-gallery__image-container')
let modalthumbails = document.querySelectorAll('.modal-gallery__thumail');
modalthumbails = [...modalthumbails]

modalthumbails.forEach(modalthumbail => {
    modalthumbail.addEventListener('click', event =>{
        modalthumbailsgallery.style.backgroundImage = `url('../images/image-product-${ event.target.id.slice(-1)}.jpg')`
    });
});



//Ccambiar imagenes del modal principal con flechas
const PreviusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');


PreviusModalBtn.addEventListener('click' , ()=>{ 
    changeNextImage(modalthumbailsgallery);
   
});
nextModalBtn.addEventListener('click' , ()=>{ 
    changePreviusImage(modalthumbailsgallery);
   
});


//mostrar el navbar cuando presiono el menu de burger
const navbar = document.querySelector('.header__menu');
const navbarBacground = document.querySelector('.modal-navbar__background');
const navbarModal = document.querySelector('.modal-navbar');
const closeNavbar = document.querySelector('.modal-navbar__close-icon');
navbar.addEventListener('click', ()=>{
    navbarBacground.style.display = 'block';
    navbarModal.style.display = 'block';
});
closeNavbar.addEventListener('click',()=>{
    navbarBacground.style.display = 'none';
    navbarModal.style.display = 'none';
});




// functions


function drawProducto(){
    ProductContainer.innerHTML = `
    <div class="cart-modal__details-container">
    <img class="cart-modal__image" src="./images//image-product-1-thumbnail.jpg" alt="">
   <div>
    <p class="cart-modal__product">Auttum Limited Edition</p>
    <p class="cart-modal__price">$123x3<span>375.000</span></p>
  </div>
    <img class="cart-modal__delete"src="./images//icon-delete.svg" alt="icon-delete">
  </div>
  <button class="cart-modal__chekout">chekout</button>
  `
  deleteProduct()
  let priceModal = document.querySelector('.cart-modal__price');
  priceModal.innerHTML = `$125 x${PreviousVlaue}<span>$${PreviousVlaue*125}</span>`
}

function changeNextImage(imgContainer){
    if(imgindex == 4){
        imgindex = 1;
    }
    else{imgindex ++;}
    
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgindex}.jpg')`
}

function changePreviusImage(imgContainer){
    if(imgindex == 1){
        imgindex = 4;
    }
    else{imgindex --;}
    
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgindex}.jpg')`
}