"use strict";

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