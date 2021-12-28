let swiper3 = new Swiper(".review_wraper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
       el: ".slide_w .bullet",
       clickable: true,
    }
  });

  let swiper4 = new Swiper(".txt_rv_wraper", {
    effect: "fade",
    pagination: {
       el: ".txt .bullet",
       clickable: true,
    }
  });

  let swiper5 = new Swiper(".slide_w", {
    navigation: {
        nextEl: ".rcon_03 .arrow .next",
        prevEl: ".rcon_03 .arrow .prev",
      },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
  });

  let swiper6 = new Swiper(".reviev_wr", {
    direction: "vertical",
    navigation: {
        nextEl: ".rv_w .btn_w .down",
        prevEl: ".rv_w .btn_w .up",
      },
    breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
  });