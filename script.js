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


    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search-input");
        const searchButton = document.getElementById("search-button");

        searchButton.addEventListener("click", function () {
            const searchQuery = searchInput.value.trim().toLowerCase();

            // Replace with your own logic to handle search results (e.g., filter items, redirect to a search results page, etc.)
            if (searchQuery.length > 0) {
                // Example: Redirect to a search results page with the query as a parameter
                window.location.href = "search-results.html?query=" + encodeURIComponent(searchQuery);
            }
        });

        // Handle Enter key press to trigger search
        searchInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                searchButton.click();
            }
        });
    });

