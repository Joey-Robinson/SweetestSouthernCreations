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
// So in the HTML, I have an empty ul with the ID #creations.
// From there, I'm creating a list, followed by a link, then an image
// <li><a><img></img></a></li>
// Each element contains an image that sources out to the large image (Will use thumbnails for viewing)
// So the break down looks like this:
// <li>
// <a href=${image}>
// <img class="image-{index}">
// </a>
// </li>

imageArray.map((image, index) => {
  const creation = document.getElementById('creations'); // Good
  const creationList = document.createElement('li'); // Good
  const creationLink = document.createElement('a'); // Good
  const creationImages = document.createElement('img'); // Good 
  creationImages.className = `image-${index}`; // Good
  creationImages.src = image; // Good
  creationLink.setAttribute('href', image); // Good
  creationList.appendChild(creationLink); // Good
  creationLink.appendChild(creationImages); // Good
  creation.appendChild(creationList); // Good 
})

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


// imageArray.forEach((image) => {
//   const homeImages = document.getElementById('home');
//   const images = document.createElement('img');
//   images.src = image;
//   homeImages.appendChild(images);
// })