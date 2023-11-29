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




function toggleDropdown(index) {
    var dropdownContent = document.getElementById('myDropdown' + index);

    // Close all dropdowns
    var allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(function(content) {
        content.classList.remove('show');
    });

    // Open the clicked dropdown
    dropdownContent.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    var dropdownContents = document.querySelectorAll('.dropdown-content');

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
        document.querySelectorAll('.offer .mobileSwitchIcon').forEach(img => {
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
        if (!event.target.closest('.offer')) {
            // Reset all images back to their initial state
            document.querySelectorAll('.offer .mobileSwitchIcon').forEach(img => {
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
        window.location.href = "example.html";
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


    function moreOpen1(){
        window.location.href="openmore.html";
    }
    function moreOpen2(){
        window.location.href="openmore2.html";
    }
    function moreOpen3(){
        window.location.href="openmore3.html";
    }
    function moreOpen4(){
        window.location.href="openmore4.html";
    }
    function moreOpen5(){
        window.location.href="openmore5.html";
    }
    function moreOpen6(){
        window.location.href="openmore6.html";
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