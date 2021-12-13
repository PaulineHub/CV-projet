const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

const education = document.getElementById("education");
const height = document.getElementById("height-grow");

menuIcon.addEventListener("click", function(){
    nav.classList.toggle("show-menu");
});