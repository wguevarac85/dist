"use strict";

(function () {
  var listElements = document.querySelectorAll('.menu__item--show');
  var list = document.querySelector('.menu__links');
  var menu = document.querySelector('.menu__hamburguer');
  var addClick = function addClick() {
    listElements.forEach(function (element) {
      element.addEventListener('click', function () {
        var subMenu = element.children[1];
        var height = 0;
        element.classList.toggle('menu__item--active');
        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = "".concat(height, "px");
      });
    });
  };
  var deleteStyleHeight = function deleteStyleHeight() {
    listElements.forEach(function (element) {
      if (element.children[1].getAttribute('style')) {
        element.children[1].removeAttribute('style');
        element.classList.remove('menu__item--active');
      }
    });
  };
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains('menu__links--show')) list.classList.remove('menu__links--show');
    } else {
      addClick();
    }
  });
  if (window.innerWidth <= 800) {
    addClick();
  }
  menu.addEventListener('click', function () {
    return list.classList.toggle('menu__links--show');
  });
})();
//# sourceMappingURL=scripts-min.js.map
