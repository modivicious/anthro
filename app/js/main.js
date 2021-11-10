$(function () {
  const screenWidth = window.screen.width;

  $(".feedback__slider").slick({
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.26378 12.8122L11.4983 23.0433C11.9474 23.4912 12.6749 23.4912 13.1252 23.0433C13.5742 22.5953 13.5742 21.8677 13.1252 21.4198L3.70246 12.0005L13.124 2.58118C13.5731 2.13324 13.5731 1.40565 13.124 0.956567C12.6749 0.508618 11.9462 0.508618 11.4971 0.956567L1.26265 11.1876C0.820465 11.6309 0.820465 12.3699 1.26378 12.8122Z" fill="#2A364E"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7362 12.8122L2.50173 23.0433C2.05265 23.4912 1.32506 23.4912 0.874844 23.0433C0.425761 22.5953 0.425761 21.8677 0.874844 21.4198L10.2975 12.0005L0.875978 2.58118C0.426896 2.13324 0.426896 1.40565 0.875978 0.956567C1.32506 0.508618 2.05378 0.508618 2.50286 0.956567L12.7374 11.1876C13.1795 11.6309 13.1795 12.3699 12.7362 12.8122Z" fill="#2A364E"/></svg></button>',
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
    $(".menu__overlay").toggleClass("menu__overlay--active");
    $("body").toggleClass("hide-overflow");
    $(".header").toggleClass("header--white");
  }

  $(".menu__btn").on("click", () => toggleMenu());
  $(".menu__overlay").on("click", () => toggleMenu());

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
});
