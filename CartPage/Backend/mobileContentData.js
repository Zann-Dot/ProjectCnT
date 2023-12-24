import {carts, addToCart, addCartToMemory} from '../Backend/Finalcart.js'

let listProductHTML = document.querySelector('.product-container');
let listCartHTML = document.querySelector('.container');
let cartView = document.querySelector('.cartView');
let products = [];

let listProducts = [];

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    let i =1;
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('js-item');
            newProduct.innerHTML = `
                <div class="container">
                    <img class="flyer-image" src="${product.image}">
                    <div class="item">
                        <div class="product-info-in-product-container">
                            <div class="menu-title">${product.name}</div> 
                            <div class="menu-pricebar">₹${product.price}</div>
                            <div class="quantityButton">
                                <div class="minus"><img class="minus-button" data-product-id ="${product.id}" src="minus sign.svg"></div>
                                <div class="quantitynumber"></div>
                                <div class="add-button" data-product-id ="${product.id}">
                                    <img class="add-button-img" data-product-id ="${product.id}" src="plus sign.svg">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            `;
            listProductHTML.appendChild(newProduct);
        })
        
    }
    // console.log(listProducts);
}
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus-button')){
        let product_id = positionClick.dataset.productId;
        let type = 'minus';
        if(positionClick.classList.contains('plus-button')){
            type = 'plus';
        }
        // console.log(product_id, type);
        changeQuantityCart(product_id, type);
    }
})

const changeQuantityCart = (product_id, type) => {
    
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        // let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = carts[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    carts[positionItemInCart].quantity = changeQuantity;
                }
                else{
                    carts.splice(positionItemInCart, 1);
                }

                if (carts.length === 0) {
                    whenCartisEmpty(); }
                break;
        }
    }
    addCartToMemory();
    // addCartToHTML();
    subtotalCartList();
}
const whenCartisEmpty = () => {
    const addInfoToViewCart = document.querySelector('.mobile-subTotal-category');
    addInfoToViewCart.style.display = 'none';

};
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('add-button') || positionClick.classList.contains('add-button-img') ) {
        let product_id = positionClick.dataset.productId;
        // const removeFromCart = document.querySelector('.js-cart-remove');
        // removeFromCart.style.display = 'none';
        const addInfoToViewCart = document.querySelector('.mobile-subTotal-category');
         addInfoToViewCart.style.display = 'flex';
        // console.log(product_id);
        addToCart(product_id);
        // addCartToHTML();
        subtotalCartList();
        }
})
export const subtotalCartList = () => {
    const addInfoToViewCart = document.querySelector('.mobile-subTotal-category');
    addInfoToViewCart.style.visibility = 'visible';
    let productPrice = 0;
    let totalQuantity = 0;
    let subtotalInfo = document.querySelector('.mobile-subTotal-category');

    carts.forEach((cart) => {
        totalQuantity += cart.quantity;
        let matchingProduct;
            listProducts.forEach((product) =>{
             if (product.id === cart.product_id) {
                matchingProduct = product;
                }
            });
        // console.log(matchingProduct);
            productPrice += matchingProduct.price * cart.quantity;
    });
    // console.log(totalQuantity);
    // console.log(productPrice);
        subtotalInfo.innerHTML = `
        <div class="subTotal-items">${totalQuantity}  Items</div>
        <div class="dividr">|</div>
        <div class="sub-total-price">₹${productPrice}</div>
        `;

}
const initApp = () => {
    fetch('CartPage/Data/mobileProductContainer.json').then(response => response.json()).then(data => {
        listProducts = data;
        addDataToHTML();

       
    })

};
initApp();