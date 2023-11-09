"use strict";

console.log('eso es un archivo');
var sliderContainer = document.getElementById('slider-container');
var slider = document.getElementById('slider');
var buttonLeft = document.getElementById('button-left');
var buttonRight = document.getElementById('button-right');
var rootStyles = document.documentElement.style;
console.log(rootStyles);
var DIRECTION = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
};
var moveSlide = function moveSlide(direction) {
  if (direction === DIRECTION.LEFT) {
    rootStyles.setProperty('--slide-transform', '300px');
  } else if (direction == DIRECTION.RIGHT) {
    rootStyles.setProperty('--slide-transform', '-300px');
  }
};
buttonRight.addEventListener('click', function () {
  return moveSlide(DIRECTION.RIGHT);
});
buttonLeft.addEventListener('click', function () {
  return moveSlide(DIRECTION.LEFT);
});
//# sourceMappingURL=scripts-min.js.map
