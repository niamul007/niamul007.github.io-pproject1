let pic = document.querySelector(".hero-img-footer"); // Selecting the image element by its name

let i = 0;
let img = [];
img[0] = "pic5.jpg";
img[1] = "pic6.jpg";
img[2] = "princess1.jpg";
img[3] = "monoke2 (1).jpg";
img[4] ="mononoke3.jpg";
img[5] ="mononoke-1.jpg";



function changeImg() {
  pic.src = img[i]; // Setting the source of the image using the 'pic' reference

  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, 5000); // Passing the function directly to setTimeout instead of a string
}
window.onload = function() {
  var div = document.querySelector('.trailer');
  div.classList.add('visible');
};


window.onload = changeImg;
