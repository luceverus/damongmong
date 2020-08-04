function handleName() {
  if (localStorage.getItem(USER_LS) === null) {
    name.classList.add("unnamed");
  } else {
    name.classList.add("named");
  }
}

function init() {
  message.addEventListener("click", handleName);
}

init();
