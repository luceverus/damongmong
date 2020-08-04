const message = document.querySelector(".message");
const image = document.querySelector(".image");
const name = document.querySelector(".name");
const damong = document.querySelector(".damong");

function clickHandle() {
  if (!message.classList.contains("clicked")) {
    message.classList.add("clicked");
    image.classList.add("clicked");
    damong.classList.add("clicked");
    message.style.opacity = "0";
    image.style.filter = "blur(0px)";
  } else {
    message.style.opacity = "1";
    image.style.filter = "blur(10px)";
    message.classList.remove("clicked");
    image.classList.remove("clicked");
    name.classList.remove("go-down");
    damong.classList.remove("clicked");
  }
}

const CLICKED = "clicked";
function init() {
  message.addEventListener("click", clickHandle);
}

init();
