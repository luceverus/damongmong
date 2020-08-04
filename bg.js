const main = document.querySelector("main");

const IMG_NUMBER = 5;

function paintImage(imageNumber) {
  image.src = `images/${imageNumber + 1}.jpg`;
  image.classList.add("image");
  main.prepend(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
