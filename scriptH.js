document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let total = 0;

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            const item = menuItem.parentElement;
            const itemName = item.querySelector(".item-name").textContent;
            const itemPrice = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
            
            const cartItem = document.createElement("li");
            cartItem.textContent = itemName;
            cartItems.appendChild(cartItem);

            total += itemPrice;
            cartTotal.textContent = total.toFixed(2);
        });
    });
});