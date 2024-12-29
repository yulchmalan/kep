const swiperJumbo = new Swiper('.swiper-hero', {
    pagination: {
      el: '.hero-pag',
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev',
    },
  
    autoplay: {
      delay: 5000,
    },
  
    slidesPerView: 1,
  });