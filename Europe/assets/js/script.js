

$(document).ready(() => {
    AOS.init({
        duration: 1000
    });

    var swiper = new Swiper('.header-swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});