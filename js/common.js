document.addEventListener("DOMContentLoaded", function (event) {
  new WOW().init();

  MicroModal.init({
    disableScroll: true,
  });

  const bannerSlider = new Swiper(".banner-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    speed: 1500,
  });

  const gallerySlider = new Swiper(".gallery-slider", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    speed: 1500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $(".to-top").addClass("active");
    } else {
      $(".to-top").removeClass("active");
    }
  });

  $(".to-top").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      "slow",
      "swing"
    );
  });

  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("show");
  });

  $(".main-nav .main-nav__link").click((e) => {
    if ($(".main-nav").hasClass("show")) {
      $(".main-nav").removeClass("show");
      $(".hamburger").removeClass("active");
    }
  });

  $(".main-nav .main-nav__link").mPageScroll2id({
    scrollSpeed: 1000,
    highlightClass: "active",
    offset: 0,
  });

  $("a[data-micromodal-trigger]").click(function (e) {
    e.preventDefault();
    return false;
  });
});
