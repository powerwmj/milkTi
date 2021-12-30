
  let swiper2 = new Swiper(".inner .motion", {
     loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".btn_next a",
      prevEl: ".arrow .prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
      },
  });
