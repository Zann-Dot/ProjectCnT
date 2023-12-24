const sidenav = document.getElementById("sidenav");
const menuIcon = document.getElementById("menu-icon");
const closebtn = document.getElementById("closebtn");

menuIcon.addEventListener("click", () => {
    sidenav.style.width = "250px";
});

closebtn.addEventListener("click", () => {
    sidenav.style.width = "0";
});