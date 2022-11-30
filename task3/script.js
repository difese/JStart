// const trafficLightEl = document.querySelector('#trafficLight');

// function makeGreen() {
//   trafficLightEl.style.background = ('green');
//   trafficLightEl.removeEventListener('click', makeGreen);
//   trafficLightEl.addEventListener('click', makeYellow);
// }

// trafficLightEl.addEventListener('click', makeGreen);


// function makeYellow() {
//   trafficLightEl.style.background = ('yellow');
//   trafficLightEl.removeEventListener('click', makeYellow);
//   trafficLightEl.addEventListener('click', makeRed);
// }
  
// trafficLightEl.addEventListener('click', makeYellow);


// function makeRed() {
//   trafficLightEl.style.background = ('red');
//   trafficLightEl.removeEventListener('click', makeRed);
//   trafficLightEl.addEventListener('click', makeGreen);
// }
  
// trafficLightEl.addEventListener('click', makeRed);

const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

function makeGreen() {
  trafficLightGreen.style.background = ('green');
  trafficLightYellow.style.background = ('black');
  trafficLightRed.style.background = ('black');
  trafficLightGreen.removeEventListener('click', makeGreen);
  trafficLightYellow.removeEventListener('click', makeGreen);
  trafficLightRed.removeEventListener('click', makeGreen);
  trafficLightGreen.addEventListener('click', makeYellow);
  trafficLightYellow.addEventListener('click', makeYellow);
  trafficLightRed.addEventListener('click', makeYellow);
};

trafficLightGreen.addEventListener('click', makeGreen);

function makeYellow() {
  trafficLightGreen.style.background = ('black');
  trafficLightYellow.style.background = ('yellow');
  trafficLightRed.style.background = ('black');
  trafficLightGreen.removeEventListener('click', makeYellow);
  trafficLightYellow.removeEventListener('click', makeYellow);
  trafficLightRed.removeEventListener('click', makeYellow);
  trafficLightGreen.addEventListener('click', makeRed);
  trafficLightYellow.addEventListener('click', makeRed);
  trafficLightRed.addEventListener('click', makeRed);
};

trafficLightYellow.addEventListener('click', makeYellow);

function makeRed() {
  trafficLightGreen.style.background = ('black');
  trafficLightYellow.style.background = ('black');
  trafficLightRed.style.background = ('red');
  trafficLightGreen.removeEventListener('click', makeRed);
  trafficLightYellow.removeEventListener('click', makeRed);
  trafficLightRed.removeEventListener('click', makeRed);
  trafficLightGreen.addEventListener('click', makeGreen);
  trafficLightYellow.addEventListener('click', makeGreen);
  trafficLightRed.addEventListener('click', makeGreen);
};

trafficLightRed.addEventListener('click', makeRed);