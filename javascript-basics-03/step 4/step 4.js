var pssaword = document.querySelector("#password");
var confirmpassword = document.querySelector("#confirmation");
var button = document.querySelector("button");

button.addEventListener("click", () => {
    if (confirmpassword != password) {
        confirmpassword.style.border = "2px solid red";
        password.style.border = "2px solid red";
        alert("your password don't match");

    } else if (confirmpassword == password) {
        password.style.border = "2px solid geen";
        confirmpassword.style.border = "2px solid green";
        alert("your password was created successfully !!");
    }
})