const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
  },
});


const swiper2 = new Swiper('.products-swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 40,
  speed: 800,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});