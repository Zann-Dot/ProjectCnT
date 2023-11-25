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