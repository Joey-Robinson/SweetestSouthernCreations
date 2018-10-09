const imageArray = [
  {
    thumbnail: "../images/thumbnailssc002.jpg",
    largeImage: "../images/ssc002.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc003.jpg",
    largeImage: "../images/ssc003.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc004.jpg",
    largeImage: "../images/ssc004.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc005.jpg",
    largeImage: "../images/ssc005.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc009.jpg",
    largeImage: "../images/ssc009.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc010.jpg",
    largeImage: "../images/ssc010.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc011.jpg",
    largeImage: "../images/ssc011.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc013.jpg",
    largeImage: "../images/ssc013.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc015.jpg",
    largeImage: "../images/ssc015.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc016.jpg",
    largeImage: "../images/ssc016.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc017.jpg",
    largeImage: "../images/ssc017.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc018.jpg",
    largeImage: "../images/ssc018.jpeg"
  },
  {
    thumbnail: "../images/thumbnailssc021.jpg",
    largeImage: "../images/ssc021.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc022.jpg",
    largeImage: "../images/ssc022.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc023.jpg",
    largeImage: "../images/ssc023.jpg"
  },
  {
    thumbnail: "../images/thumbnailssc024.jpg",
    largeImage: "../images/ssc024.jpg"
  }
];

// Looking at creationImages.className = `image-${index}`;
// That specifically, I used this once before. The index (starting at 0) will
// Iterate on each image and its class. I really love this method of adding a class to the image.
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
  const creation = document.getElementById("creations"); // Good
  const creationList = document.createElement("li"); // Good
  const creationLink = document.createElement("a"); // Good
  const creationImages = document.createElement("img"); // Good
  creationImages.className = `image-${index}`; // Good
  creationImages.src = image.thumbnail; // Good
  creationLink.setAttribute("href", image.largeImage); // Good
  creationList.appendChild(creationLink); // Good
  creationLink.appendChild(creationImages); // Good
  creation.appendChild(creationList); // Good
});

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

// const awesome = document.getElementById("awesome");
// const awesomeThings = ["one", "two", "three"];

// const waiting = (func, timeout) => {
//   return new Promise(resolve =>
//     setTimeout(() => {
//       resolve(func());
//     }, timeout)
//   );
// };

// (async () => {
//   let index = 0;
//   while (true) {
//     await waiting(() => {
//       awesome.classList.add("show");
//       awesome.textContent = awesomeThings[index];
//       index = ++index % awesomeThings.length;
//     }, 1000);
//     await waiting(() => {
//       awesome.classList.add("hide");
//     }, 1500);
//     await waiting(() => {
//       awesome.classList.remove("show");
//       awesome.classList.remove("hide");
//     }, 500);
//   }
// })();
