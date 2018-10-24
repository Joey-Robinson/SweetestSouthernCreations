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
