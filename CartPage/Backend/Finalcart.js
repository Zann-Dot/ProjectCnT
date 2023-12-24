
export let carts = [];


if (localStorage.getItem('cart')) {
    carts = JSON.parse(localStorage.getItem('cart'));
   
}

export const addToCart = (product_id) => {
    
    let positionThisProductInCart = carts.findIndex((value) => value.product_id === product_id);
    if (carts.length <= 0){
           carts = [{
                product_id: product_id,
                quantity: 1
            }];
           
    } else if(positionThisProductInCart < 0){
       carts.push({
           product_id: product_id,
           quantity: 1
       })
   }else {
       carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
   }
   
   console.log(carts);
   addCartToMemory();
   
}

export const addCartToMemory = () => {
   localStorage.setItem('cart', JSON.stringify(carts));
}
