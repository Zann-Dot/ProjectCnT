import {carts, addToCart, addCartToMemory} from './CartPage/Backend/Finalcart.js';


let listProductHTML = document.querySelector('.product-container');

let listProducts =[];
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    let i =1;
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.dataset.id = product.id;
            newProduct.classList.add('js-item');
            newProduct.innerHTML = `
            <div class="product">
                <img class="product-image" src="${product.image}">
                <div class="product-info js-pInfo-${product.id}">
                    <div class="product-title">
                        <h4>${product.name}</h4>
                        <img src="${product.sign}" alt="">
                    </div>
                    <div class="product-price">₹${product.price}</div>
                    <div class="add-button js-add-button-${product.id}">
                        <h3 class="__add-button" data-product-id ="${product.id}">Add</h3> 
                        <img class="add-button-img" data-product-id ="${product.id}" src="plus sign.svg" alt="">
                    </div>
                </div>
            </div>
            `;
            listProductHTML.appendChild(newProduct);
        })
        
    }
};
let input = document.querySelector('#search-item'); 
input.addEventListener('keyup', (e) => {
    search();
});
const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementsByClassName('.product-container');
    const product = document.querySelectorAll('.js-item');
    const pName = document.getElementsByTagName("h4");

    for (let i = 0; i < pName.length; i++) {
        let match = product[i];

        if (match) {
                let textValue = match.textContent || match.innerHTML;
                if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                    product[i].style.display = "";
                    
                } else {
                    product[i].style.display = "none";
                    
                }
        }
        
    }
    
};


listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('__add-button') || positionClick.classList.contains('add-button-img') ) {
        let product_id = positionClick.dataset.productId;
            const removeFromHTML = document.querySelector(`.js-add-button-${product_id}`);
            removeFromHTML.style.display = 'none';
            addButtonToHTML(product_id);
        const addInfoToViewCart = document.querySelector('.mobile-subTotal-category');
         addInfoToViewCart.style.display = 'flex';
        // console.log(product_id);
            addToCart(product_id);
//         // addCartToHTML();
            subtotalCartList();
        }
})

const addButtonToHTML = (product_id) => {
    let addButtonHTML = document.querySelector(`.js-pInfo-${product_id}`);
    
    if(listProducts.length > 0){
        let newButton = document.createElement('div');
        newButton.dataset.id = product_id;
        newButton.classList.add(`new-add-Button-${product_id}`);
        listProducts.forEach(product => {   
            newButton.innerHTML = `
            <button class="minus">
                <img class="minus-button" data-product-id ="${product_id}" src="minus sign.svg">
            </button>
            <button class="plus">
                <img class="plus-button" data-product-id ="${product_id}" src="plus sign.svg" >
            </button>
            `;
              
        });     
        addButtonHTML.appendChild(newButton);
        // console.log(newButton.dataset.id);
        
    }
}



listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus-button') || positionClick.classList.contains('plus-button')){
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
                    whenCartisEmpty(product_id);
                    
                 }
                break;
        }
    }
    addCartToMemory();
    // addCartToHTML();
    subtotalCartList();
}
const whenCartisEmpty = (product_id) => {
    listProducts.forEach(product => {
        const addInfoToViewCart = document.querySelector('.mobile-subTotal-category');
        addInfoToViewCart.style.display = 'none';
    let removeAddMinusButtons = document.querySelector(`.new-add-Button-${product_id}`);
        removeAddMinusButtons.style.display = 'none';
    let addFromHTML = document.querySelector(`.js-add-button-${product_id}`);
        addFromHTML.style.display = 'flex';
    })
    

};
const subtotalCartList = () => {
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
    fetch('CartPage/HomepageContentDataItems.json').then(response => response.json()).then(data => {
        listProducts = data;
        addDataToHTML();    
    })

};
initApp();
