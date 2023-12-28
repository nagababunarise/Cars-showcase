let prevArrow = document.getElementById("prevArrow");
let nextArrow = document.getElementById("nextArrow");

let thumbnailEle = document.getElementsByClassName("thumbnail-img");
let bgImageEl = document.getElementById("bgImage");

let backgroundImg = new Array(
  "images/2492653.webp",
  "images/car-image-2.webp",
  "images/car-image-3.webp",
  "images/car-image-4.jpg",
  "images/car-image-5.webp"
);
let i = 0;
nextArrow.onclick = function () {
  if (i < 4) {
    bgImageEl.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
    thumbnailEle[i + 1].classList.add("active");
    thumbnailEle[i].classList.remove("active");
    i++;
  }
};

prevArrow.onclick = function () {
  if (i > 0) {
    bgImageEl.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
    thumbnailEle[i - 1].classList.add("active");
    thumbnailEle[i].classList.remove("active");
    i--;
  }
};
