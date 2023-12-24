
// cART fUNCTIONS
import {cart, addToCart} from '/CartPage/Data/cart.js';
import {products} from '/CartPage/Data/Homepage-Items.js';


let productHTML = '';
let i = 1;
products.forEach((product) => {
    productHTML += `
        <div class="box${i}" onclick="">
            <section>
                <h3>${product.name}</h3>
                <img src="rating-star.png" />4.2
                <h2>₹${product.price}</h2>
                <div class="addToCartButton js-add-to-cart" data-product-id="${product.id}">Add <img src="🦆 icon _plus_.png" ></div>
            </section>
        </div>
    `;
    i++;
});


// console.log(productHTML);
document.querySelector('.js-placards').innerHTML = productHTML;


function cartlistShow(productId){
    
    const removeFromCart = document.querySelector('.js-cart-remove');
    removeFromCart.style.display = 'none';
    

            // Constructing HTML for all selected items in the cart
            let cartItemsHTML = '';
            let totalQuantity = 0;
            let num = 1;
            
                products.forEach((item) => {
                    if (productId === item.id) {
                        
                        cartItemsHTML += `
                            <div class="cart-item${num}">
                                <div class="item-image"></div>
                                <div class="item-info">
                                    <h4>${item.name}</h4>
                                    <h2>₹${item.price}</h2>
                                </div>
                                <div class="quantityChangingButton">
                                    <div class="minus-button"><img src="minus sign.svg"></div>
                                    <div class="quantitynumber js-cart-quantity">1</div>
                                    <div class="plus-button"><img src="plus sign.svg"></div>
                                </div>
                            </div>
                        `;
                    }
                num++;
            });
    
            
    
            // Appending new cart items to js-item-placings
            document.querySelector('.js-item-placings').innerHTML += cartItemsHTML;
       
            console.log(cartItemsHTML);
  
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
       
        const productId= button.dataset.productId;
        addToCart(productId);
        cartlistShow(productId); 
    })
});