let pic = document.getElementsByName("slide")[0]; // Selecting the image element by its name

let i = 0;
let img = [];
img[0] = "pic1.webp";
img[1] = "pic2.jpg";
img[2] = "pic3.jpg";
img[3] = "pic4.jpg";
img[4] = "pic5.jpg";
img[5] = "pic6.jpg";
img[6] = "pic7.jpg";
img[7] = "pic8.jpg";
img[8] = "pic9.jpg";
img[9] = "pic10.jpg";
img[10] = "pic11.jpg";
img[11] = "pic12.jpg"; // Added entry for index 11
img[12] = "pic13.jpg";

function changeImg() {
  pic.src = img[i]; // Setting the source of the image using the 'pic' reference

  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, 10000); // Passing the function directly to setTimeout instead of a string
}

window.onload = changeImg;
