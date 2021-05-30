var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue = document.querySelector(".blue");
var txt = document.querySelector("#text");

function myFunction() {
    red.addEventListener("click", () => {
        txt.style.color = "red";
    })

    green.addEventListener("click", () => {
        txt.style.color = "green";
    })
    blue.addEventListener("click", () => {
        txt.style.color = "blue";
    })
}
myFunction();