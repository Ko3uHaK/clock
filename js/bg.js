const body = document.querySelector("body");
const imgNumber = 3;

function showImage(number) {
    const img =new Image();
    img.src =`img/${number}.jpg`;
    img.classList.add('bgImage');
    body.appendChild(img);
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
 