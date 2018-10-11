const contact = document.getElementById('contact');
const svgOne = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const circles = document.createElementNS("http://www.w3.org/2000/svg", "circle");
svgOne.classList.add('contact-fb');
svgOne.setAttribute("height", 200);
svgOne.setAttribute("width", 500);
circles.setAttribute("cx", 20);
circles.setAttribute("cy", 20);
circles.setAttribute("r", 20);
svgOne.appendChild(circles);
contact.appendChild(svgOne);
// const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// const svgNS = svg.namespaceURI;
// const rect = document.createElementNS(svgNS, 'rect');
// rect.classList = 'magic';
// svgNS.classList = 'magicTwo';
// rect.setAttribute('cx', 5);
// rect.setAttribute('cy', 5);
// rect.setAttribute('width', 500);
// rect.setAttribute('height', 500);
// rect.setAttribute('fill', '#95B3D7');
// svg.appendChild(rect);
// contact.appendChild(svg);
// var h = document.createElement('a');
// h.setAttribute('href', 'http://www.google.com');
// var t = document.createTextNode('Hello World');
// h.appendChild(t);
// document.body.appendChild(h);

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