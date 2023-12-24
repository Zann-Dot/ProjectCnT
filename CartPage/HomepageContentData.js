import {carts, addToCart, addCartToMemory} from '../CartPage/Backend/Finalcart.js'

let listProductHTML = document.querySelector('.placards');
let listCartHTML = document.querySelector('.js-item-placings');
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
            <div class="box${i} js-box" onclick="">
                <section>
                    <h3>${product.name}</h3>
                    <img src="rating-star.png" />4.2
                    <h2>₹${product.price}</h2>
                    <div class="addToCartButton js-add-to-cart" data-product-id ="${product.id}">Add <img class="add-button-img" src="🦆 icon _plus_.png" ></div>
                </section>
            </div>
            `;
            listProductHTML.appendChild(newProduct);
            i++;
            
        })
        
    }
}

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('js-add-to-cart') || positionClick.classList.contains('add-button-img')) {
        let product_id = positionClick.dataset.productId;
        const removeFromCart = document.querySelector('.js-cart-remove');
        removeFromCart.style.display = 'none';
        const addInfoToViewCart = document.querySelector('.subTotal-category');
         addInfoToViewCart.style.display = 'flex';

        addToCart(product_id);
        addCartToHTML();
        subtotalCartList();
        }
})
const addCartToHTML = () => {
    
    
    listCartHTML.innerHTML = '';
    
    if(carts.length > 0){
        
        carts.forEach(cart => {
            
            let newCart = document.createElement('div');
            newCart.classList.add('cart-item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
            let info = listProducts[positionProduct];
            
            newCart.innerHTML = `
                <div class="cart-info css-cart-list">
                    <div class="item-image"><img src="${info.image}"></div>
                    <div class="item-info">
                        <h4>${info.name}</h4>
                        <h2>₹${info.price * cart.quantity}</h2>
                    </div>
                    <div class="quantityChangingButton">
                        <div class="minus"><img class="minus-button" src="minus sign.svg"></div>
                        <div class="quantitynumber">${cart.quantity}</div>
                        <div class="plus"><img class="plus-button" src="plus sign.svg" ></div>
                    </div>
                </div>`;
                listCartHTML.appendChild(newCart);
                
        })
    }   
    
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus-button') || positionClick.classList.contains('plus-button')){
        let product_id = positionClick.parentElement.parentElement.parentElement.parentElement.dataset.id;
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
    addCartToHTML();
    subtotalCartList();
}
const whenCartisEmpty = () => {
    
        const removeFromCart = document.querySelector('.js-cart-remove');
    removeFromCart.style.display = 'initial';
    const addInfoToViewCart = document.querySelector('.subTotal-category');
    addInfoToViewCart.style.display = 'none';
    
    
};

const subtotalCartList = () => {
    const addInfoToViewCart = document.querySelector('.subTotal-category');
    addInfoToViewCart.style.visibility = 'visible';
    let productPrice = 0;
    let totalQuantity = 0;
    let subtotalInfo = document.querySelector('.subTotal-category');

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
    console.log(totalQuantity);
    console.log(productPrice);
        subtotalInfo.innerHTML = `
        <div class="subTotal-items">${totalQuantity}  Items</div>
        <div class="dividr">|</div>
        <div class="sub-total-price">₹${productPrice}</div>
        `;

}
document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        // removeFromCart(productId);
        
       const container = document.querySelectorAll(`.js-item-placings`);
        container.forEach((element) => {
            // element.remove();
            element.style.visibility = 'hidden';
            whenCartisEmpty();
        });       
        
    });  
    
});
const initApp = () => {
    fetch('CartPage/HomepageContentDataItems.json').then(response => response.json()).then(data => {
        listProducts = data;
        addDataToHTML();
        
       
    })

};
initApp();

