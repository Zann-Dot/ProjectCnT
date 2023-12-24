let products = [];
    fetch('HomepageContentDataItems.json').then(response => response.json()).then(data => {
        products = data;
        // console.log(products);
        
    });


export function getProduct(product_id) {
    let matchingProduct;
        products.forEach((product) =>{
            if (product.id === product_id) {
                matchingProduct = product;
            }
        });
        // console.log(matchingProduct);
        return matchingProduct;

};


export const letproducts = [
    {
        id: "ib8873b-d873gb8312",
        image: "../Veggie Burger.jpg",
        name: "Veggie Burger",
        price: 129
    },
    {
        id: "ib4473b-d873327312",
        image: "../Aloo Tikki Burger.jpg",
        name: "Aloo Tikki Burger",
        price: 79
    },
    {
        id: "ib3273b-dbfiw3gb8312",
        image: "../Chicken Burger.jpg'",
        name: "Chichken Burger",
        price: 179
    },
    {
        id: "ib88-d873gb8312",
        image: "../chessy Paneer Burger.jpg",
        name: "Chessy Paneer Burger",
        price: 229
    },
    {
        image: "../Mexican Bunger.jpg",
        id: "ib8873b-d8738312",
        name: "Mexican Burger",
        price: 189
    },
    {
        image: "../veg wrap.jpg",
        id: "igeg73b-d873gb8312",
        name: "Veg Wrap",
        price: 199
    },
    {
        image: "../Mexican Bunger.jpg",
        id: "ib8873b-d873as12",
        name: "BBQ Chichken Wrap",
        price: 239
    },
    {
        image: "../Mexican Bunger.jpg",
        id: "ib8873b-d853b8312",
        name: "Paneer Loaded Wrap",
        price: 249
    },
    {
        image: "../Mexican Bunger.jpg",
        id: "iss873b-d873nu8d312",
        name: "Crisp n' Twist Special Bull'ger",
        price: 339
    },
    {
        image: "../Mexican Bunger",
        id: "ib8873b-d87lode312",
        name: "Mushroom Pizza",
        price: 119
    },
    {
        image: "../Mexican Bunger",
        id: "ichut73b-d873gb8312",
        name: "Paneer Corn & Capsicum Pizza",
        price: 149
    },
    {
        image: "../Mexican Bunger",
        id: "ib8bb3b-d8gandub8312",
        name: "Veggie Cheesy Pizza",
        price: 189
    },
    {
        image: "../Mexican Bunger",
        id: "ib847hnjf3b-d873gb8312",
        name: "Classic Margherita Pizza",
        price: 109
    }
];