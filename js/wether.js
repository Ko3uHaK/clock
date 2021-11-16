const COORDS_LS = "co0rds";

function getCoords() {
  const coords = localStorage.getItem();
  if (coords === null) {
    askforcoords();
  } else {
  }
}

function init() {
  getCoords();
}
init();
