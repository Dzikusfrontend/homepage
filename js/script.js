console.log("Witaj! na mojej stronie.")
let button = document.querySelector(".js-section__button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("white");
    themeName.innerText = body.classList.contains("white") ? "ciemny" : "jasny";
});