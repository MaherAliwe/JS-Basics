var show = document.getElementById("show");
var hide = document.getElementById("hide");
var text = document.getElementById("texte");

hideOrShow(show, hide, text);

function hideOrShow(visible, none, element) {
    none.addEventListener("click", function() {
        element.style.display = "none";
    });

    visible.addEventListener("click", function() {
        element.style.display = "block";
    });
}