const COORDS_LS = "coords";
const API_KEY = "847633b9fcbea4c7f750a788b3cd735c";

const weatherContainer = document.querySelector(".js-weather");

function getWether(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weatherContainer.innerText = `${temperature}℃ 
       ${place}`;
    });
}

function saveCoords(positionObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(positionObj));
}

function geoSuccessHandler(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const positionObj = {
    latitude: latitude,
    longitude: longitude,
  };
  saveCoords(positionObj);
  getWether(latitude, longitude);
}

function geoErrorHandler() {
  alert("Ошибка определения координат");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler);
}

function getCoords() {
  const coords = localStorage.getItem(COORDS_LS);
  if (coords === null) {
    askForCoords();
  } else {
    const loadedCoords = JSON.parse(coords);
    getWether(loadedCoords.latitude, loadedCoords.longitude);
  }
}

function init() {
  getCoords();
}

init();
