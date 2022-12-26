$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu').toggleClass('menu--active');
  });

  $('.menu__item-link').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu').removeClass('menu--active');
  });

});