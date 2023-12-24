// import {cart, removeFromCart, updateQuantity} from '../CartPage/Data/cart.js';
// import {products} from '../CartPage/Data/Homepage-Items.js';

import {renderOrderSummary} from '../CartPage/Backend/orderSummary.js';
import {renderPaymentSummary} from '../CartPage/Backend/paymentSummary.js';

renderOrderSummary();
renderPaymentSummary();


document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        // removeFromCart(productId);
        
       const container = document.querySelectorAll(`.itemsViewer`);
        container.forEach((element) => {
            element.remove();
        });       
    });  
});
















































// let cartSummaryHTML = '';

// carts.forEach((cartItem) => {
//     const productId = cartItem.product_id;
//     let matchingProduct;
    
//         products.forEach((product) => {
//             if (product.id === productId) {
//                 matchingProduct = product;
//             }
//         // console.log(matchingProduct);
//         cartSummaryHTML +=
//                 `
//                 <div class="itemsViewer js-cart-item-container-${matchingProduct.id}">
//                     <img src="">
//                     <div class="productInfo">
//                         <div class="item">name</div>
//                         <h4 class="price">1782</h4>
//                     </div>
//                     <div class="quantityChangingButton">
//                         <div class="minus-button js-decrease-item" data-product-id="${product.id}" ><img src="../minus sign.svg"></div>
//                         <div class="quantitynumber js-quantity-${product.id}">${cartItem.quantity}</div>
//                         <div class="plus-button js-increase-item" data-product-id="${product.id}"><img src="../plus sign.svg" ></div>
//                     </div>
//                 </div>
//                 `;
//             });
//         // console.log(cartSummaryHTML);

// });

// console.log(cartSummaryHTML);
// document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

// document.querySelectorAll('.js-delete-link').forEach((link) => {
//     link.addEventListener('click', () => {
//         const productId = link.dataset.productId;
//         removeFromCart(productId);
        
//        const container = document.querySelectorAll(`.itemsViewer`);
//         container.forEach((element) => {
            
//             element.remove();
        
//         });       
//     });  
// });

// document.querySelectorAll('.js-decrease-item').forEach((link) => {
//     link.addEventListener('click', () => {
//         const productId = link.dataset.productId;
//         updateQuantity(productId, 'decrease');
        
//        const container = document.querySelector(`.js-cart-item-container-${productId}`);
//         // container.remove();      
//     });  
// });
// document.querySelectorAll('.js-increase-item').forEach((link) => {
//     link.addEventListener('click', () => {
//         const productId = link.dataset.productId;
//         updateQuantity(productId, 'increase');
        
//        const container = document.querySelector(`.js-cart-item-container-${productId}`);
//         // container.remove();      
//     });  
// });


// const initApp = () => {
//     fetch('CartPage/HomepageContentDataItems.json').then(response => response.json()).then(data => {
//         products = data;
//         // addDataToHTML();

//         // if (localStorage.getItem('cart')) {
//         //     carts = JSON.parse(localStorage.getItem('cart'));
//         //     addCartToHTML();
//         // }
//     })

// };
// initApp();