import {carts, addCartToMemory} from '../Backend/Finalcart.js';
import {getProduct} from '../Data/Homepage-Items.js';
import {renderPaymentSummary} from '../Backend/paymentSummary.js';

export function renderOrderSummary() {
let itemsViewer = document.querySelector('.js-order-summary');
let products = [];
    fetch('HomepageContentDataItems.json').then(response => response.json()).then(data => {
        products = data;
        displayItemsOnCart();
    });  
let cartSummaryHTML = '';

const displayItemsOnCart = () => {
    itemsViewer.innerHTML = '';

    carts.forEach((cartItem) => {
        let newCart = document.createElement('div');
        newCart.classList.add('cart-item');
        newCart.dataset.id = cartItem.product_id;

        const product_id = cartItem.product_id;
        const matchingProduct = getProduct(product_id);
        // console.log(matchingProduct);
        newCart.innerHTML =
        `
            <div class="itemsViewer">
                <img src="${matchingProduct.image}">
                <div class="display-between">
                    <div class="productInfo">
                        <div class="item">${matchingProduct.name}
                        <img src="${matchingProduct.sign}">
                        </div>
                        <h4>₹${matchingProduct.price * cartItem.quantity}</h4>
                    </div>
                    <div class="quantityChangingButton">
                        <div class="minus"><img class="minus-button" data-product-id="${matchingProduct.id}" src="../minus sign.svg"></div>
                        <div class="quantitynumber">${cartItem.quantity}</div>
                        <div class="plus"><img class="plus-button" data-product-id="${matchingProduct.id}" src="../plus sign.svg" ></div>
                    </div>
                </div>
            </div> 
        `;
        itemsViewer.appendChild(newCart);
        
    })
    // console.log(cartSummaryHTML);
    // itemsViewer.innerHTML = cartSummaryHTML;
}

itemsViewer.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus-button') || positionClick.classList.contains('plus-button')){
        let product_id = positionClick.dataset.productId;
        let type = 'minus';
        if(positionClick.classList.contains('plus-button')) {
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
                     }
                break;
        }
    }
   
    addCartToMemory();
    displayItemsOnCart();
    renderPaymentSummary();
    }
}