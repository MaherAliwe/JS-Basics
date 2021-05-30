var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");


imageChangerMouseOn(img1, "./images/image1_2.jpg")
imageChangerMouseOn(img2, "./images/image2_2.jpg")
imageChangerMouseOn(img3, "./images/image3_2.jpg")
imageChangerMouseOn(img4, "./images/image4_2.jpg")
imageChangerMouseOn(img5, "./images/image5_2.jpg")

imageChangerMouseOut(img1, "./images/image1.jpg")
imageChangerMouseOut(img2, "./images/image2.jpg")
imageChangerMouseOut(img3, "./images/image3.jpg")
imageChangerMouseOut(img4, "./images/image4.jpg")
imageChangerMouseOut(img5, "./images/image5.jpg")



function imageChangerMouseOn(img, path) {
    img.onmouseover = function() {
        img.src = path;
    };
}

function imageChangerMouseOut(img, path) {
    img.onmouseout = function() {
        img.src = path;
    };
}