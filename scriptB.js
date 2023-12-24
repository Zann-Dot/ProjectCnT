function generateAndRedirect() {
    const barcodeValue = generateUniqueBarcode();
    displayBarcode(barcodeValue);
    redirectToPaymentPage(barcodeValue);
}

function generateUniqueBarcode() {
    // In a real-world scenario, you would generate a unique barcode on the server
    // For simplicity, we'll generate a random barcode here
    const randomString = [...Array(10)].map(() => (Math.random() * 36 | 0).toString(36)).join('');
    return randomString;
}

function displayBarcode(barcodeValue) {
    const barcodeContainer = document.getElementById('barcode-container');
    barcodeContainer.innerHTML = '';

    const barcode = new window.zxing.BarcodeWriter();
    barcode.write(barcodeValue, barcodeContainer.clientWidth, barcodeContainer.clientHeight);
}

function redirectToPaymentPage(barcodeValue) {
    console.log('Redirecting to payment page with barcode:', barcodeValue);
    // In a real-world scenario, you would replace the following line with an actual redirection to the payment page
    // window.location.href = 'payment.html';
}