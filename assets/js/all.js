"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 8,
  spaceBetween: 16,
  freeMode: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  // Mousewheel
  mousewheel: {
    invert: true
  }
});
var shareSwiper = new Swiper('.shareSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-green',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  // Autoplay
  // autoplay: {
  //   delay: 3000,
  // },
  // Fade
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
//# sourceMappingURL=all.js.map
