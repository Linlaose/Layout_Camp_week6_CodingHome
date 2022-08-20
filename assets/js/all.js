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
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    360: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 8
    },
    992: {
      slidesPerView: 8
    }
  },
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
var shareSwiper = new Swiper('.swiper-share', {
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
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // Autoplay
  // autoplay: {
  //   delay: 3000,
  // },
  // Fade
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
}); // 在使用第二個 swiper 的使用記得要把 HTML 那邊的 .swiper 也改掉，不然會一次吃兩個 swiper
//# sourceMappingURL=all.js.map
