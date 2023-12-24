


function openoffer(){

    window.location.href="openoffer.html";
}
function openupi(){
    window.location.href="openupi.html";
}
function opencash(){
    window.location.href="opencash.html";
}
function applied(){
    alert("coupan applied");
}
function generateQRCode() {
    const QrCode = document.querySelector('.scaning');
    QrCode.style.display = "initial";
}



function verifyAndPay() {
    const verifyAnimation = document.querySelector('.verifyed');
    let verifyButton = document.querySelector('.verifyAndPay');
    verifyButton.innerText = "Pay";
    verifyAnimation.style.display = "flex";  


    verifyButton.addEventListener('click', (e) => {
    positionClicked = e.target;
    if (verifyButton.innerText === "Pay") {
        openPaySuccessful();
        }
    })
}

function openPaySuccessful() {
    window.location.href="final.html";
}

function displayPayButton() {
    const payFinal = document.querySelector('.payfinal');
    payFinal.style.display = "initial";
}

function displayUpi() {
    const upiContent = document.querySelector('.upi-option');
    upiContent.style.display = "flex";
}
function goToCart() {
    window.location.href="../CartPage/checkout.html";
}