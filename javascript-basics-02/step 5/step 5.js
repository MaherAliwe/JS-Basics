var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");


imageChanger(img1, "./images/image1_2.jpg")
imageChanger(img2, "./images/image2_2.jpg")
imageChanger(img3, "./images/image3_2.jpg")
imageChanger(img4, "./images/image4_2.jpg")
imageChanger(img5, "./images/image5_2.jpg")



function imageChanger(img, path) {
    img.onmouseover = function() {
        img.src = path;
    };
}