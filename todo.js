const toDo = document.querySelector(".js-toDo");

function handleClickDamong() {
  const target = event.target;
  const damong = target.parentNode;
  if (!damong.classList.contains("clickedDamong")) {
    damong.classList.add("clickedDamong");
    toDo.classList.add("clickedDamong");
    name.classList.add("clickedDamong");
  } else {
    damong.classList.remove("clickedDamong");
    toDo.classList.remove("clickedDamong");
  }
}
function clickDamong() {
  damong.addEventListener("click", handleClickDamong);
}

clickDamong();

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDos() {
  const btn = event.target,
    li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
function paintToDo(text) {
  const li = document.createElement("li"),
    span = document.createElement("span"),
    delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };
  delBtn.addEventListener("click", deleteToDos);
  li.id = newId;
  delBtn.value = "X";
  delBtn.innerText = "X";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
