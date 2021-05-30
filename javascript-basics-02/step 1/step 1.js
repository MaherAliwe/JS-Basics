 var img = document.querySelector("#image1");

 img.addEventListener("mouseover", () => {
     img.src = "images/image1_2.jpg";
 });

 img.addEventListener("mouseout", () => {
     img.src = "images/image1.jpg";
 })