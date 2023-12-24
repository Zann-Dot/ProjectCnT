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
window.onload = function () {
    // Get the target element by ID
    var scrollTarget = document.getElementById('scrollTarget');

    // Scroll to the top of the target element
    if (scrollTarget) {
        scrollTarget.scrollIntoView();
    }
};



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





function goToDealsPage() {
    window.location.href = 'CNT 1st.html';
}





function toggleDropdown(index) {
    let dropdownContent = document.getElementById('myDropdown' + index);

    // Close all dropdowns
    let allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(content) {
        content.classList.remove('show');
    });

    // Open the clicked dropdown
    dropdownContent.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    let dropdownContents = document.querySelectorAll('.dropdown-content');

    // Close all dropdowns except the one clicked
    dropdownContents.forEach(function(content) {
        if (!event.target.matches('button') && event.target !== content.previousElementSibling) {
            content.classList.remove('show');
        }
    });
};





//mobile icon colour swapping function
let initialImageSources = {};
    let lastClickedDivId = null;

    function initializeInitialImageSources() {
        document.querySelectorAll('.merge .offer .mobileSwitchIcon').forEach(img => {
            const divId = img.parentElement.id;
            initialImageSources[divId] = img.src;
        });
    }

    function changeImage(divId, newImagePath) {
        // Reset the previously clicked image back to its initial state
        if (lastClickedDivId !== null) {
            const lastClickedImg = document.getElementById(lastClickedDivId).querySelector('img');
            lastClickedImg.src = initialImageSources[lastClickedDivId];
        }

        // Get the image element inside the clicked div
        const imgElement = document.getElementById(divId).querySelector('img');

        // Change the source of the image to a new image
        imgElement.src = newImagePath;

        // Update the last clicked div ID
        lastClickedDivId = divId;
    }

    document.body.addEventListener('mousedown', function (event) {
        // Check if the click is not on an image-div
        if (!event.target.closest('.merge .offer')) {
            // Reset all images back to their initial state
            document.querySelectorAll('.merge .offer .mobileSwitchIcon').forEach(img => {
                const divId = img.parentElement.id;
                img.src = initialImageSources[divId];
            });

            // Reset the last clicked div ID
            lastClickedDivId = null;
        }
    });
    // Initialize the initial image sources when the page loads
    window.onload = initializeInitialImageSources;

    
    
    function goToPage2() {
        // Get the input value
        var inputValue = document.getElementById('i101').value;

        // Encode the input value and append it as a query parameter to the URL
        var encodedValue = encodeURIComponent(inputValue);
        window.location.href = 'viewCartPage.html?value=' + encodedValue;
    }




function openHTMLFile() {
        // Change "your-html-file.html" to the actual path of your HTML file
        window.location.href = 'http://localhost/signup/signup1.html';
        
    }

function openAddressFile(){
    window.location.href = "restaurant selection.html"
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
        window.location.href="Pasta-Menu.html";
    }
    function moreOpen4(){
        window.location.href="Sandwich-Menu.html";
    }
    function moreOpen5(){
        window.location.href="Fries&Sides-Menu.html";
    }
    function moreOpen6(){
        window.location.href="Japanese-Menu.html";
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


function goToHomePage() {
    window.location.href = 'afterscanpage.html';
    }
function goToHomePageFromCheckout() {
        window.location.href = '../afterscanpage.html';
}
function goToCheckoutPage() {
    window.location.href = 'CartPage/checkout.html';
}
function goToMenuPage() {
    window.location.href = 'MobileMenuPage.html';
}
// function goToMenuPage() {
//     window.location.href = '../MobileMenuPage.html';
// }
function goToSearchPage() {
    window.location.href = 'search.html';
}
function goToAccountPage() {
    window.location.href = 'Myaccount.html';
}


let input = document.querySelector('#search-item'); 
input.addEventListener('keyup', (e) => {
    search();
});
const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementsByClassName('.js-placards');
    const product = document.querySelectorAll('.js-item');
    const pName = document.getElementsByTagName("h3");

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

function goToPay() {
    window.location.href = '../payment portal/paycnt.html';
}
