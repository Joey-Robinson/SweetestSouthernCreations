"use strict";

var observer = lozad(); // lazy loads elements with default selector as '.lozad'

var changeFavIcon = function changeFavIcon(img) {
  var favIcon = document.querySelector('link[rel="shortcut icon"]');
  if (!favIcon) {
    favIcon = document.createElement("link");
    favIcon.setAttribute("rel", "shortcut icon");
    var head = document.querySelector("head");
    head.appendChild(favIcon);
  }
  favIcon.setAttribute("type", "image/jpg");
  favIcon.setAttribute("href", img);
};
var favImage = "../images/sscfavicon.jpg";
changeFavIcon(favImage);

// const welcome = document.querySelector(".greeting");
// const welcomeImage = document.createElement("img");
// const welcomeImageSource = "../images/owl002.jpg";
// welcomeImage.src = welcomeImageSource;
// welcome.appendChild(welcomeImage);
var ctaTwoImages = function ctaTwoImages() {
  var ctaTwo = document.getElementById('ctaImage');
  var ctaImageTwo = document.createElement("img");
  var ctaImageTwoSource = "../images/ssc046.jpg";
  ctaImageTwo.dataset.src = ctaImageTwoSource;
  ctaImageTwo.alt = "Sweetest Southern Creations - Call to Action Image One";
  ctaImageTwo.classList.add('lozad');
  ctaTwo.appendChild(ctaImageTwo);
};

var additionalImageFunction = function additionalImageFunction() {
  var additional = document.querySelector('.additionalImage');
  var additionalImage = document.createElement('img');
  var additionalImageSource = '../images/ssc041.jpg';
  additionalImage.dataset.src = additionalImageSource;
  additionalImage.alt = "Sweetest Southern Creations - Additional Image One";
  additionalImage.classList.add('lozad');
  additional.appendChild(additionalImage);
};

var ctaImageFunction = function ctaImageFunction() {
  var cta = document.querySelector(".cta");
  var ctaImage = document.createElement("img");
  var ctaImageSource = "../images/ssc042.jpg";
  ctaImage.dataset.src = ctaImageSource;
  ctaImage.alt = "Sweetest Southern Creations - Call to Action Image Two";
  ctaImage.classList.add('lozad');
  cta.appendChild(ctaImage);
};

var ctaImageFunctionTwo = function ctaImageFunctionTwo() {
  var cta = document.getElementById("ctaImageTwo");
  var ctaImage = document.createElement("img");
  var ctaImageSource = "../images/ssc042.jpg";
  ctaImage.dataset.src = ctaImageSource;
  ctaImage.alt = "Sweetest Southern Creations - Call to Action Image Three";
  ctaImage.classList.add('lozad');
  cta.appendChild(ctaImage);
};

var greetingImageFunction = function greetingImageFunction() {
  var greetingImageSource = "../images/ssc061.jpg";
  var greeting = document.getElementById("homeImageTwo");
  var greetingImage = document.createElement("img");
  greetingImage.dataset.src = greetingImageSource;
  greetingImage.alt = "Sweetest Southern Creations - Greeting Image Number 2";
  greetingImage.classList.add('lozad');
  greeting.appendChild(greetingImage);
};

var greetingImageFunctionTwo = function greetingImageFunctionTwo() {
  var greetingImageSourceTwo = '../images/owl002.jpg';
  var greetingTwo = document.getElementById('homeImageThree');
  var greetingImageTwo = document.createElement('img');
  greetingImageTwo.dataset.src = greetingImageSourceTwo;
  greetingImageTwo.alt = "Sweetest Southern Creations - Greeting Image Number 3";
  greetingImageTwo.classList.add('lozad');
  greetingTwo.appendChild(greetingImageTwo);
};

var greetingImageFunctionThree = function greetingImageFunctionThree() {
  var greetingImageSource = "../images/owl001.jpg";
  var greeting = document.getElementById("homeImageFour");
  var greetingImage = document.createElement("img");
  greetingImage.dataset.src = greetingImageSource;
  greetingImage.alt = "Sweetest Southern Creations - Greeting Image Number 4";
  greetingImage.classList.add('lozad');
  greeting.appendChild(greetingImage);
};

// Change this to URL when pushing Prod.
if (document.URL === 'http://127.0.0.1:8080/index.html' || 'http://127.0.0.1:8080/') {
  ctaTwoImages();
  additionalImageFunction();
  ctaImageFunction();
  ctaImageFunctionTwo();
  greetingImageFunction();
  greetingImageFunctionTwo();
  greetingImageFunctionThree();
}

var openUrl = function openUrl(url) {
  var newTab = window.open();
  newTab.opener = null;
  newTab.location = url;
};

var openSlide = document.getElementById("openSlideMenu").addEventListener("click", function () {
  var slide = document.getElementById("slide");
  slide.style.width = "100vw";
});

var closeSlide = document.getElementById("closeSlideMenu").addEventListener("click", function () {
  var slide = document.getElementById("slide");
  slide.style.width = "0";
});

observer.observe();
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