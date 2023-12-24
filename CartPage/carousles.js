const slider = document.querySelector('.carousels-items');
let isDown = false;
let startX;
let scrollleft;

slider.addEventListener('mousedown', () => {
    isDown = true;
    // slider.classList.add('active');

});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    // slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    // slider.classList.add('active');
});
slider.addEventListener('mousemove', () => {
    if (!isDown) return;
    console.count(isDown);
    // console.log('it worked');
});