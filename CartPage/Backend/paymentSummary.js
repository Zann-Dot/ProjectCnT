import {carts, addCartToMemory} from '../Backend/Finalcart.js';
import {getProduct} from '../Data/Homepage-Items.js';


export const renderPaymentSummary = () => {
    let products = [];
    fetch('HomepageContentDataItems.json').then(response => response.json()).then(data => {
        products = data;
        PaymentSummary();
    });
    const PaymentSummary = () => {
    let productPrice = 0;
        carts.forEach((cartItem) => {
            const productId = cartItem.product_id;
            const product = getProduct(productId);
            // console.log(product);
            productPrice += product.price * cartItem.quantity;
            
            
        });
        const totalPayable = productPrice + (8.96 + 8.96);
        // console.log(totalPayable);

        const paymentSummaryHTML = `
            <div class="count">
                <h3>Sub Total</h3>
                <h3>₹${productPrice}</h3>
            </div>
            <div class="count">
                <h3>SGST</h3>
                <h3>₹8.96</h3>
            </div>
            <div class="count">
                <h3>CGST</h3>
                <h3>₹8.96</h3>
            </div>
            <div class="priceDivider"></div>
            <div class="countTotal">
                <h3>Total Payable</h3>
                <h3>₹${totalPayable.toFixed(2)}</h3>
            </div>
        `;
        document.querySelector('.priceCount').innerHTML = paymentSummaryHTML;
        // passToConnectivity(totalPayable);
    }
     

};
    