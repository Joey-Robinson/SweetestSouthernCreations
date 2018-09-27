// const imageArray = [
//   '../images/owl002.jpg',
//   '../images/owl001.jpg',
//   '../images/owl002.jpg',
//   '../images/owl001.jpg'
// ];

// imageArray.forEach((image) => {
//   const homeImages = document.getElementById('home');
//   const images = document.createElement('img');
//   images.src = image;
//   homeImages.appendChild(images);
// })

const changeFavIcon = img => {
  let favIcon = document.querySelector('link[rel="shortcut icon"]');
  if (!favIcon) {
    favIcon = document.createElement("link");
    favIcon.setAttribute("rel", "shortcut icon");
    const head = document.querySelector("head");
    head.appendChild(favIcon);
  }
  favIcon.setAttribute("type", "image/jpg");
  favIcon.setAttribute("href", img);
};
const favImage = "../images/sscfavicon.jpg";
changeFavIcon(favImage);

// const welcome = document.querySelector(".greeting");
// const welcomeImage = document.createElement("img");
// const welcomeImageSource = "../images/owl002.jpg";
// welcomeImage.src = welcomeImageSource;
// welcome.appendChild(welcomeImage);

const cta = document.querySelector(".cta");
const ctaImage = document.createElement("img");
const ctaImageSource = "../images/owl001.jpg";
ctaImage.src = ctaImageSource;
cta.appendChild(ctaImage);

const openUrl = url => {
  const newTab = window.open();
  newTab.opener = null;
  newTab.location = url;
};

const openSlide = document
  .getElementById("openSlideMenu")
  .addEventListener("click", () => {
    const slide = document.getElementById("slide");
    slide.style.width = "100vw";
  });

const closeSlide = document
  .getElementById("closeSlideMenu")
  .addEventListener("click", () => {
    const slide = document.getElementById("slide");
    slide.style.width = "0";
  });

// const greetingImageSource = "../images/owl001.jpg";
// const greeting = document.querySelector(".greeting");
// const greetingImage = document.createElement("img");
// greetingImage.src = greetingImageSource;
// greeting.appendChild(greetingImage);

// const hide = () => {
//   const hiddenDiv = document.getElementById("hiddenDiv");
//   const button = document.getElementById('hide');
//   if (button.innerHTML === 'Read') {
//     button.textContent = 'Play';
//   } else {
//     button.textContent = 'Read';
//   }
//   if (hiddenDiv.style.display === "none") {
//     hiddenDiv.style.display = "block";
//   } else {
//     hiddenDiv.style.display = "none";
//   }
// };

// const hidediv = document.getElementById("hide").addEventListener("click", hide);

var bubbles = document.getElementById("bubbles"),
  screenWidth = window.innerWidth,
  screenHeight = window.innerHeight,
  containerWidth = 100,
  marginWidth = (screenWidth - containerWidth - 100) / 2;
(totalCircles = 100), (svgNS = "http://www.w3.org/2000/svg");

//Set viewBox for bubble container
bubbles.setAttributeNS(null, "viewbox", `0 0 ${screenWidth} ${screenHeight}`);

// For total number of circles, create circles
for (let k = 0; k < totalCircles; k++) {
  createCircle();
}

// //Fill circle with color
// function createCircle() {
//   var circleXPos = getRandom(1, screenWidth);
//   var circleYPos = getRandom(
//     1,
//     (1 / Math.log(circleXPos)) * 8000 - screenHeight * 0.1
//   );
//   var circleRadius = getRandom(4, 30);
//   var circle = document.createElementNS(svgNS, "circle");

//   var rectArea = screenWidth * screenHeight;
//   // var ellipseArea = (screenWidth - 100) * (screenHeight - 100) * Math.PI;
//   // var remainingArea = rectArea - ellipseArea / 4;

//   console.log(rectArea);

//   circle.setAttributeNS(null, "cx", circleXPos);
//   circle.setAttributeNS(null, "cy", circleYPos);
//   circle.setAttributeNS(null, "r", circleRadius);

//   bubbles.appendChild(circle);
// }

// // Get Random Integer
// function getRandom(min, max) {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }

// var colors = [
//   "#a7c554",
//   "#bb523d",
//   "#cc7926",
//   "#da21b1",
//   "#4c528a",
//   "#be1ea4",
//   "#20079b",
//   "#7490a7",
//   "#770e31",
//   "#a52a2a",
//   "#663399",
//   "#8b4513",
//   "#ffc0cb",
//   "#b0e0e6",
//   "#d87093"
// ];

// function fillColor(e) {
//   e.setAttribute(
//     "style",
//     "fill:" + colors[Math.floor(Math.random() * colors.length)]
//   );
// }

// function bubbleHover() {
//   for (var e = document.querySelectorAll("circle"), t = 0; t < e.length; t++) {
//     e[t].addEventListener("mouseover", function () {
//       fillColor(this);
//     });
//   }
// }

// bubbleHover();