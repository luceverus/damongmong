const headerTemp = document.querySelector(".headerColumn__temparature");
const headerWeather = document.querySelector(".headerColumn__weather");
const headerPlace = document.querySelector(".headerColumn__place");
const COORDS = "coords";
const API_KEY = "929e7903279868343eb3712abd6fb77c";

const COORDS_LS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temparature = json.main.temp;
      const place = json.name;
      const day = json.weather[0].main;
      function tempChangeDay() {
        const temp = `${temparature}℃`;
        const today = `${day}`;

        if (headerWeather.innerText === temp) {
          headerWeather.innerText = today;
        } else {
          headerWeather.innerText = temp;
        }
      }
      setInterval(tempChangeDay, 3000);

      headerPlace.innerHTML = `at ${place}`;
    });
}
function handleGeoSuccess(position) {
  const lat = position.coords.latitude,
    lon = position.coords.longitude,
    coordsObj = {
      lat,
      lon,
    };
  saveCoords(coordsObj);
  getWeather(lat, lon);
}
function handleGeoError() {
  alert("can't access you location");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.lat, parsedCoords.lon);
  }
}
function init() {
  loadCoords();
}

init();
