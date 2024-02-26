
let pic = document.getElementsByName("slide")[0];
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
// Add more image URLs as needed...

function changeImg() {
  pic.src = img[i];

  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImg, 10000);
}

let animeNames = document.querySelector(".add-in-text");
let j = 0;
let aName = [];
aName[0]="The wind rises";
aName[1]="The Wind Rises";
aName[2]="Wishper of the heart";
aName[3]="Wishper of the heart";
aName[4]="Princess Mononoke";
aName[5]="Ponyo";
aName[6]="My neighbour Totoro";
aName[7]="Wishper of the heart";
aName[8]="Howl's moving castel";
aName[9]="Howl's moving castel";
aName[10]="Castel in the sky";
aName[11]="Spirited Away";
aName[12]="Spirited Away";
// Add more anime names as needed...

function changeAnimeName() {
  animeNames.innerText = aName[j];

  if (j < aName.length - 1) {
    j++;
  } else {
    j = 0;
  }
  setTimeout(changeAnimeName, 10000);
}

window.onload = function() {
  changeImg();
  changeAnimeName();
};
