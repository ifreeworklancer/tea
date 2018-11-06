import jquery from 'jquery';
import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

window.jQuery = window.$ = jquery;

window.Popper = require('popper.js');
require('bootstrap');

(function () {

  /**
   * Burger-menu
   */
  $('.burger-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  })

  /**
   * Form-label
   */

  $('.form-control').on('focus', function () {
    $(this).parent().addClass('in-focus');
  });

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('in-focus');
    } else {
      $(this).parent().removeClass('in-focus');
    }
  });

  /**
   * Scroll Link
   */
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');

    if (id.length > 1) {

      var top = $(id).offset().top;

      $('body,html').animate({
        scrollTop: top
      }, 1500);

      $('.burger-menu').removeClass('active');
      $('.menu').removeClass('active');
    }
  });

  /**
   * Sliders
   */

  if ($('.best-slider')) {

    var elem1 = document.querySelector('.best-slider');
    if (elem1) {

      const flkty2 = new Flickity(elem1, {
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        draggable: true,
        wrapAround: true,
      });

    }
  }

})(jQuery)