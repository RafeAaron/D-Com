var about_link = document.getElementById("about");
var services_link = document.getElementById("services");
var browse_link = document.getElementById("browse");

about_link.addEventListener("click", ()=>{
    window.location = "../src/about.html"
})

services_link.addEventListener("click", ()=>{
    window.location = "../src/services.html"
})

browse_link.addEventListener("click", ()=>{
    window.location = "../src/browse.html"
})