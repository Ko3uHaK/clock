const body = document.querySelector("body");
const imgNumber = 3;

function showImage(randomNamber) {

}

function getRandom() {
  const number = Math.floor(Math.random() * imgNumber + 1);
  return number;
}

function init() {
  const randomNumber = getRandom();
  showImage(randomNumber);
}
init();