$(document).ready(function () {
  const $app = $('.app');
  const $img = $('.app__img');
  const $pageNav1 = $('.pages__item--1');
  const $pageNav2 = $('.pages__item--2');
  let animation = true;
  let curSlide = 3;
  let scrolledUp, nextSlide;

// Controls speed of initial webpage load transformation //

  setTimeout(function () {
    $app.addClass('initial');
  }, 500);


});