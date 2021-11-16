const COORDS_LS = "co0rds";

function geoSuccessHandler(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const positionObj ={
        latitude : latitude,
        longitude : longitude,
    };
}

function geoErrorHandler(){

}

function askForCoords(){
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
