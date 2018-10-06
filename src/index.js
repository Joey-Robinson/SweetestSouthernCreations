const imageArray = [
  '../images/owl002.jpg',
  '../images/owl001.jpg',
  '../images/owl002.jpg',
  '../images/owl001.jpg'
];

// Looking at creationImages.className = `image-${index}`; 
// That specifically, I used this once before. The index (starting at 0) will
// Interpolate on each image and its class. I really love this method of adding a class to the image. 
// Very Niceu?

imageArray.map((image, index) => {
  const creation = document.getElementById('creations'); // Good
  const creationList = document.createElement('li'); // Good
  const creationImages = document.createElement('img'); // Good 
  creationImages.className = `image-${index}`; // Good
  creationImages.src = image;
  creationList.appendChild(creationImages);
  creation.appendChild(creationList);
})
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

const ctaTwo = document.querySelector('.ctaImage');
const ctaImageTwo = document.createElement("img");
const ctaImageTwoSource = "../images/ssc046banner.jpg";
ctaImageTwo.src = ctaImageTwoSource;
ctaTwo.appendChild(ctaImageTwo);

const additional = document.querySelector('.additionalImage');
const additionalImage = document.createElement('img');
const additionalImageSource = '../images/ssc041banner.jpg';
additionalImage.src = additionalImageSource;
additional.appendChild(additionalImage);

const cta = document.querySelector(".cta");
const ctaImage = document.createElement("img");
const ctaImageSource = "../images/ssc042.jpg";
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

const greetingImageSource = "../images/ssc061banner.jpg";
const greeting = document.getElementById("homeImageTwo");
const greetingImage = document.createElement("img");
greetingImage.src = greetingImageSource;
greeting.appendChild(greetingImage);

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