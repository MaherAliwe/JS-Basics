var div = document.querySelector(".div");
var input = document.getElementById("name");

function changeDiv() {


    div.innerHTML = input.value;

}

document.querySelector("#name").addEventListener("change", changeDiv);