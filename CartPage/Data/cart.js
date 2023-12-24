export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 'ib8873b-d873gb8312',
        quantity: 1
    }, {
        productId: 'ib4473b-d873327312',
        quantity: 2
    }];
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }

    saveToStorage();
};

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
};

export function updateQuantity(itemId, action) {
    const quantityElement = document.querySelector(`.js-quantity-${itemId}`);
    // const priceElement = document.getElementById(`price-${itemId}`);

    let currentQuantity = parseInt(quantityElement.textContent);
    // let itemPrice = itemPrices[itemId];
    let matchingId;


        cart.forEach((cartItem) => {
            if (itemId === cartItem.productId) {
                matchingId = cartItem;
            }
        });
    

    if (matchingId) {
        if (action === 'increase') {
            currentQuantity += 1;
            matchingId.quantity += 1;
        } else if (action === 'decrease' && currentQuantity > 0) {
            currentQuantity -= 1;
            matchingId.quantity -= 1;
        }
    }

        if (currentQuantity < 1) {
            // const container = document.querySelector(`.js-cart-item-container-${itemId}`);
            // container.remove();
        }
            
        quantityElement.textContent = currentQuantity;
        saveToStorage();

    
    
    // priceElement.textContent = `₹${itemPrice * currentQuantity}`;
    
};
