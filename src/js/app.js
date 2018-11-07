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

      const flkty1 = new Flickity(elem1, {
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        draggable: true,
        wrapAround: true,
      });

      var prevArrowOpportunities = document.querySelector('.slider-arrow-item--prev-best');

      prevArrowOpportunities.addEventListener('click', function () {
        flkty1.previous(true, false);
      });

      var nextArrowOpportunities = document.querySelector('.slider-arrow-item--next-best');

      nextArrowOpportunities.addEventListener('click', function () {
        flkty1.next(true, false);
      });
    }
  }

  if ($('.exclusive-slider')) {

    var elem2 = document.querySelector('.exclusive-slider');
    if (elem2) {

      const flkty2 = new Flickity(elem2, {
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        draggable: true,
        wrapAround: true,
      });

      var prevArrowOpportunities = document.querySelector('.slider-arrow-item--prev-exclusive');

      prevArrowOpportunities.addEventListener('click', function () {
        flkty2.previous(true, false);
      });

      var nextArrowOpportunities = document.querySelector('.slider-arrow-item--next-exclusive');

      nextArrowOpportunities.addEventListener('click', function () {
        flkty2.next(true, false);
      });
    }
  }

})(jQuery)