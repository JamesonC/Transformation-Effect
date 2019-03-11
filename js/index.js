$(document).ready(function () {
  const $app = $('.app');
  const $pageNav1 = $('.pages__item--1');
  let animation = true;
  let curSlide = 5;

// Controls speed of initial webpage load transformation //

  setTimeout(function () {
    $app.addClass('initial');
  }, 500);
});