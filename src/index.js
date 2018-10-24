const observer = lozad(); // lazy loads elements with default selector as '.lozad'

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
const ctaTwoImages = () => {
  const ctaTwo = document.getElementById('ctaImage');
  const ctaImageTwo = document.createElement("img");
  const ctaImageTwoSource = "../images/ssc046.jpg";
  ctaImageTwo.dataset.src = ctaImageTwoSource;
  ctaImageTwo.alt = `Sweetest Southern Creations - Call to Action Image One`
  ctaImageTwo.classList.add('lozad');
  ctaTwo.appendChild(ctaImageTwo);
}

const additionalImageFunction = () => {
  const additional = document.querySelector('.additionalImage');
  const additionalImage = document.createElement('img');
  const additionalImageSource = '../images/ssc041.jpg';
  additionalImage.dataset.src = additionalImageSource;
  additionalImage.alt = `Sweetest Southern Creations - Additional Image One`
  additionalImage.classList.add('lozad');
  additional.appendChild(additionalImage);
}

const ctaImageFunction = () => {
  const cta = document.querySelector(".cta");
  const ctaImage = document.createElement("img");
  const ctaImageSource = "../images/ssc042.jpg";
  ctaImage.dataset.src = ctaImageSource;
  ctaImage.alt = `Sweetest Southern Creations - Call to Action Image Two`
  ctaImage.classList.add('lozad');
  cta.appendChild(ctaImage);
}

const ctaImageFunctionTwo = () => {
  const cta = document.getElementById("ctaImageTwo");
  const ctaImage = document.createElement("img");
  const ctaImageSource = "../images/ssc042.jpg";
  ctaImage.dataset.src = ctaImageSource;
  ctaImage.alt = `Sweetest Southern Creations - Call to Action Image Three`
  ctaImage.classList.add('lozad');
  cta.appendChild(ctaImage);
}

const greetingImageFunction = () => {
  const greetingImageSource = "../images/ssc061.jpg";
  const greeting = document.getElementById("homeImageTwo");
  const greetingImage = document.createElement("img");
  greetingImage.dataset.src = greetingImageSource;
  greetingImage.alt = `Sweetest Southern Creations - Greeting Image Number 2`
  greetingImage.classList.add('lozad');
  greeting.appendChild(greetingImage);
}

const greetingImageFunctionTwo = () => {
  const greetingImageSourceTwo = '../images/owl002.jpg';
  const greetingTwo = document.getElementById('homeImageThree');
  const greetingImageTwo = document.createElement('img');
  greetingImageTwo.dataset.src = greetingImageSourceTwo;
  greetingImageTwo.alt = `Sweetest Southern Creations - Greeting Image Number 3`
  greetingImageTwo.classList.add('lozad');
  greetingTwo.appendChild(greetingImageTwo);
}

const greetingImageFunctionThree = () => {
  const greetingImageSource = "../images/owl001.jpg";
  const greeting = document.getElementById("homeImageFour");
  const greetingImage = document.createElement("img");
  greetingImage.dataset.src = greetingImageSource;
  greetingImage.alt = `Sweetest Southern Creations - Greeting Image Number 4`
  greetingImage.classList.add('lozad');
  greeting.appendChild(greetingImage);
}

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