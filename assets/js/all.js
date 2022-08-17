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
  mousewheel: {
    invert: true
  }
});
//# sourceMappingURL=all.js.map
