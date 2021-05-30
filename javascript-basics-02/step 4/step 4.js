var Name = document.querySelector("#name");
var surname = document.querySelector("#surname");
var city = document.querySelector("#city");
var reset = document.querySelector("#reset");

reset.addEventListener("click", function() {

    if (confirm("Are you sure do you want to reset?")) {
        Name.value = "";
        surname.value = "";
        city.value = "";
    }
});