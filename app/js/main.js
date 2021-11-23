$(function () {
  const screenWidth = window.screen.width;

  $(".feedback__slider").slick({
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26378 12.8122L11.4983 23.0433C11.9474 23.4912 12.6749 23.4912 13.1252 23.0433C13.5742 22.5953 13.5742 21.8677 13.1252 21.4198L3.70246 12.0005L13.124 2.58118C13.5731 2.13324 13.5731 1.40565 13.124 0.956567C12.6749 0.508618 11.9462 0.508618 11.4971 0.956567L1.26265 11.1876C0.820465 11.6309 0.820465 12.3699 1.26378 12.8122Z" fill="#2A364E"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7362 12.8122L2.50173 23.0433C2.05265 23.4912 1.32506 23.4912 0.874844 23.0433C0.425761 22.5953 0.425761 21.8677 0.874844 21.4198L10.2975 12.0005L0.875978 2.58118C0.426896 2.13324 0.426896 1.40565 0.875978 0.956567C1.32506 0.508618 2.05378 0.508618 2.50286 0.956567L12.7374 11.1876C13.1795 11.6309 13.1795 12.3699 12.7362 12.8122Z" fill="#2A364E"/></svg></button>',
  });
  $(".product__photos").slick({
    arrows: false,
    dots: true,
    fade: true,
  });

  $(".product__rating").rateYo({
    starWidth: "15px",
    spacing: "8px",
    readOnly: true,
    starSvg:
      "<svg><path d='M14.388 4.874a.386.386 0 0 1 .31.261.375.375 0 0 1-.103.395l-3.11 3.05.746 4.272a.385.385 0 0 1-.548.429l-3.862-2.019-3.851 2.04a.379.379 0 0 1-.403-.028.378.378 0 0 1-.153-.374l.723-4.297-3.13-3.034a.379.379 0 0 1-.1-.391.386.386 0 0 1 .31-.261l4.314-.642L7.446.362a.382.382 0 0 1 .687-.003l1.941 3.902 4.314.613Z'/></svg>",
    normalFill: "transparent",
    ratedFill: "#2A364E",
  });

  $(".review__rating").rateYo({
    starWidth: "19px",
    spacing: "11px",
    readOnly: true,
    starSvg:
      "<svg><path d='M19.8612 6.97516C19.799 6.78074 19.6358 6.64187 19.4377 6.61013L13.5325 5.75312L10.8752 0.297575C10.7858 0.115062 10.6032 0 10.4051 0C10.2069 0 10.0243 0.115062 9.93499 0.301543L7.31261 5.77295L1.4074 6.66965C1.20926 6.70139 1.04609 6.84026 0.983932 7.03467C0.921772 7.22909 0.976162 7.44334 1.11991 7.58221L5.40507 11.8236L4.41439 17.8307C4.37943 18.033 4.46101 18.2354 4.62418 18.3544C4.71354 18.4219 4.82232 18.4576 4.9311 18.4576C5.01657 18.4576 5.09815 18.4377 5.17585 18.3941L10.4478 15.5413L15.7353 18.3624C15.813 18.402 15.8946 18.4219 15.9762 18.4219C16.2637 18.4219 16.5006 18.1798 16.5006 17.8862C16.5006 17.8426 16.4968 17.8029 16.4851 17.7632L15.4634 11.7919L19.7213 7.52666C19.8728 7.38383 19.9233 7.16957 19.8612 6.97516ZM12.775 10.4576C12.4514 10.4576 14.36 11.5261 14.3911 11.7006L12.1936 5.75312L10.2606 14C10.1091 13.9167 10.9056 13.4206 10.7502 13.5L8.85832 7.45758L6.48122 11.7205C6.50841 11.5459 7.2079 11.8435 7.08358 11.7205L10.6887 10.4576L7.73996 6.78868C7.9109 6.7609 7.43815 7.74092 7.51196 7.58221L10.4478 14.9576L12.7167 6.48317C12.7944 6.64187 12.942 6.749 13.1129 6.77677L10.3271 4.95758L12.775 10.4576Z'/></svg>",
    normalFill: "transparent",
    ratedFill: "#2A364E",
  });

  $(".count, .select").styler();

  $(".categories__btn").on("click", function () {
    $(this).next().slideToggle();
  });

  $(".filter-btn, .catalog__control .overlay").on("click", function () {
    $(".filter").toggleClass("filter--active");
    $(".catalog__control .overlay").toggleClass("overlay--active");
  });

  $(".filter__title").on("click", function () {
    $(this).closest(".filter__item").toggleClass("filter__item--open");
    $(this).next().slideToggle();
  });

  $(".product__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 400);
  });

  $(".footer__title").on("click", function () {
    if (screenWidth < 768) {
      $(this).toggleClass("footer__title--open");
      $(this).next().slideToggle();
    }
  });

  function toggleMenu() {
    $(".menu__btn-open").toggleClass("menu__btn-open--hidden");
    $(".menu__btn-close").toggleClass("menu__btn-close--visible");
    $(".menu__list").toggleClass("menu__list--active");
    $(".menu .overlay").toggleClass("overlay--active");
    $("body").toggleClass("hide-overflow");
    $(".header").toggleClass("header--white");
  }

  $(".menu__btn").on("click", () => toggleMenu());
  $(".menu .overlay").on("click", () => toggleMenu());

  $(".intro__btn-start").on("click", function () {
    $(".intro__shop").addClass("intro__shop--active");
    $(".menu__logo").addClass("logo--dark");
  });

  $(".intro__btn-back").on("click", function () {
    $(".intro__nesting-box").removeClass("intro__nesting-box--active");
    if ($(this).hasClass("return") && screenWidth < 768) {
      $(this).removeClass("return");
    } else {
      $(".intro__link--active").removeClass("intro__link--active");
      $(".intro__shop").removeClass("intro__shop--active");
      $(".menu__logo").removeClass("logo--dark");
    }
  });

  $(".intro__link").on("click", function (e) {
    e.preventDefault();
    $(".intro__nesting-box--active").removeClass("intro__nesting-box--active");
    $(this).next().toggleClass("intro__nesting-box--active");
    $(".intro__btn-back").toggleClass("return");
  });

  $(".intro__link").on("mouseenter", function () {
    $(".intro__link--active").removeClass("intro__link--active");
    $(this).addClass("intro__link--active");
    $(".intro__nesting-box--active").removeClass("intro__nesting-box--active");
    $(this).next().toggleClass("intro__nesting-box--active");
  });

  if (screenWidth < 768) {
    var lastScroll = 0;
    const header = document.querySelector(".header");
    const screenHeight = window.screen.height;

    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener("scroll", () => {
      if (scrollPosition() > screenHeight)
        header.classList.add("header--fixed");
      else header.classList.remove("header--fixed");

      if (scrollPosition() > lastScroll || scrollPosition() < screenHeight)
        //scroll down
        header.classList.remove("header--pinned");
      else if (scrollPosition() < lastScroll)
        //scroll up
        header.classList.add("header--pinned");

      lastScroll = scrollPosition();
    });
  }

  if (document.querySelector(".blog__list")) mixitup(".blog__list");
});
