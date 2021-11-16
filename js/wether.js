const COORDS_LS = "coords",
  API_KEY = "847633b9fcbea4c7f750a788b3cd735c";

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
  }
}

function init() {
  getCoords();
}
init();
