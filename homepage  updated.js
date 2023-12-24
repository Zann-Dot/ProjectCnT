// document.onreadystatechange = function () {
//     var loaderWrapper = document.getElementById('loader-wrapper');

//     if (document.readyState === 'complete') {
//         // Hide the loader when the page is fully loaded
//         loaderWrapper.style.display = 'none';
//     } else {
//         // Show the loader while the page is loading
//         loaderWrapper.style.display = 'flex';
//     }
// };
document.onreadystatechange = function () {
    var loaderWrapper = document.getElementById('loader-wrapper');

    if (document.readyState === 'complete') {
        // Hide the loader when the page is fully loaded
        loaderWrapper.style.display = 'none';
    } else {
        // Show the loader while the page is loading
        loaderWrapper.style.display = 'flex';
    }
};







// function toggleDropdown(index) {
//     var dropdownContent = document.getElementById('myDropdown' + index);

//     // Close all dropdowns
//     var allDropdowns = document.querySelectorAll('.dropdown-content');
//     allDropdowns.forEach(function(content) {
//         content.classList.remove('show');
//     });

//     // Open the clicked dropdown
//     dropdownContent.classList.toggle('show');
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     var dropdownContents = document.querySelectorAll('.dropdown-content');

//     // Close all dropdowns except the one clicked
//     dropdownContents.forEach(function(content) {
//         if (!event.target.matches('button') && event.target !== content.previousElementSibling) {
//             content.classList.remove('show');
//         }
//     });
// };





function openHTMLFile() {
        // Change "your-html-file.html" to the actual path of your HTML file
        window.location.href = "example.html";
    }

function templatesVisibility() {
    var images = document.querySelectorAll('.placards');

images.forEach(function(image) {
    image.style.display = (image.style.display === 'none' || image.style.display === '') ? 'flex' : 'none';
});
}


function buttonNameChange() {
    var button = document.getElementById('changeButton');
    var buttonName = document.getElementById('nameChangeOnSelection');
        if (button.innerText === 'West South') {
            buttonName.innerText = 'West South';
        } else {
            buttonName.innerText = 'Enter Your Region';
        }
    }
function buttonChange() {
    var button = document.getElementById('changeText');
    var buttonName = document.getElementById('nameChangeOnSelection');
        if (button.innerText === 'North East') {
            buttonName.innerText = 'North East';
        } else {
            buttonName.innerText = 'Enter Your Region';
        }
    }

function openRedeemPage() {
        // Change "your-html-file.html" to the actual path of your HTML file
        window.location.href = "Redeempage.html";
    }

    document.addEventListener('DOMContentLoaded', function openmore() {
        // Wait for the DOM to be fully loaded before interacting with it
    
        // Fetch elements with the class name 'example-class'
        var elements = document.getElementsByClassName('placards');
    
        // Iterate through the elements and log their content
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i].textContent);
        }
    });
    function moreOpen1(){
        window.location.href="Burger Menu.html";
    }
    function moreOpen2(){
        window.location.href="Pizza Menu.html";
    }
    function moreOpen3(){
        window.location.href="Pasta_Menu.html";
    }
    function moreOpen4(){
        window.location.href="Sandwich-Menu.html";
    }
    function moreOpen5(){
        window.location.href="Fries&Sides-Menu.html";
    }
    function moreOpen6(){
        window.location.href="Japanese.html";
    }
    function moreOpen7(){
        window.location.href="Meal For One.html";
    }
    function moreOpen8(){
        window.location.href="Coffee&Beverages-Menu.html";
    }
    function moreOpen9(){
        window.location.href="Desserts-Menu.html";
    }
    //add
    document.addEventListener('DOMContentLoaded', function () {
        var addItemButton = document.getElementsByClassName('addtocartButton');
        var itemList = document.getElementById('itemList');

        addItemButton.addEventListener('click', function () {
            // Create a new list item element
            var newItem = document.createElement('li');
            newItem.className = 'item';
            newItem.textContent = 'New Item';

            // Append the new item to the list
            itemList.appendChild(newItem);
        });
    });










    
    var cart = [];

    function addToCart(id, name, price) {
        cart.push({ id: id, name: name, price: price });
        updateCart();
    }

    function updateCart() {
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('cart-total');
        var total = 0;

        // Clear previous items
        cartItems.innerHTML = '';

        // Update cart items
        cart.forEach(function (item) {
            var cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItems.appendChild(cartItem);

            total += item.price;
        });

        // Update total
        cartTotal.textContent = 'Total: $' + total.toFixed(2);
    }
       


    var cart = [];

    function addToCart(id, name, price) {
        cart.push({ id: id, name: name, price: price });
        updateCart();
    }

    function removeFromCart(index) {
        // Remove the item at the specified index from the cart array
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('cart-total');
        var total = 0;

        // Clear previous items
        cartItems.innerHTML = '';

        // Update cart items
        cart.forEach(function (item, index) {
            var cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
                <button class="btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(cartItem);

            total += item.price;
        });

        // Update total
        cartTotal.textContent = 'Total: $' + total.toFixed(2);
    }

    function checkout() {
        alert('Thank you for your order!');
        // You can implement further actions like sending the order to a server/database
        // and resetting the cart.
        cart = [];
        updateCart();
    }

    // Function to open the cart box
    function viewCartPage() {
      //  var cartBox = document.getElementById('cartBox');
        cartBox.style.display = 'block';
        // addToCart();
    
        // removeFromCart();
        // updateCart();
        // checkout();
         //add
    }


    // Function to close the cart box
    function closeCartPage() {
        var cartBox = document.getElementById('cartBox');
        cartBox.style.display = 'none';
    }
    function cntCart(){
        window.location.href="CNTCART.html";
    }
   