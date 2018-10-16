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
  const ctaImageTwoSource = "../images/ssc046banner.jpg";
  ctaImageTwo.src = ctaImageTwoSource;
  ctaTwo.appendChild(ctaImageTwo);
}

const additionalImageFunction = () => {
  const additional = document.querySelector('.additionalImage');
  const additionalImage = document.createElement('img');
  const additionalImageSource = '../images/ssc041banner.jpg';
  additionalImage.src = additionalImageSource;
  additional.appendChild(additionalImage);
}

const ctaImageFunction = () => {
  const cta = document.querySelector(".cta");
  const ctaImage = document.createElement("img");
  const ctaImageSource = "../images/ssc042.jpg";
  ctaImage.src = ctaImageSource;
  cta.appendChild(ctaImage);
}

const greetingImageFunction = () => {
  const greetingImageSource = "../images/ssc061banner.jpg";
  const greeting = document.getElementById("homeImageTwo");
  const greetingImage = document.createElement("img");
  greetingImage.src = greetingImageSource;
  greeting.appendChild(greetingImage);
}


if (document.URL === '/index.html') {
  ctaTwoImages();
  additionalImageFunction();
  ctaImageFunction();
  greetingImageFunction();
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