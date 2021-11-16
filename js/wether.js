const COORDS_LS = "coords",
  API_KEY = "847633b9fcbea4c7f750a788b3cd735c";

function getWether(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
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
  saveCoords();
  getWether(latitude, longitude);
}

function geoErrorHandler() {}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler);
}

function getCoords() {
  const coords = localStorage.getItem();
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
