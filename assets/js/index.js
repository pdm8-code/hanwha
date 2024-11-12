$(document).ready(function () {
  var recomendBanner = new Swiper(".recomend-banner", {
    pagination: {
      el: ".recomend-banner .swiper-pagination",
      clickable: true, // 클릭하여 슬라이드 컨트롤을 가능케 함. default는 false임.
    },
    loop: true,
    // 자동 재생
    autoplay: {
      delay: 3000, // 슬라이드 이동 시간 간격
      disableOnInteraction: false, // 버튼을 이용하여 컨트롤 한 이후에도 자동 재생 유지되도록
    },
    spaceBetween: 8, // 슬라이드 사이 여백
  });
  // 오늘의 추천 재생 이벤트
  $(".recomend .swiper-controls").click(function () {
    if (recomendBanner.autoplay.running) {
      recomendBanner.autoplay.stop();
      $(".recomend .swiper-controls").css(
        "background-image",
        "url(assets/img/play.svg)"
      );
    } else {
      recomendBanner.autoplay.start();
      $(".recomend .swiper-controls").css(
        "background-image",
        "url(assets/img/stop.svg)"
      );
    }
  });

  // 하단 슬라이드 스크립트
  var noticebanner = new Swiper(".notice-banner-right", {
    pagination: {
      el: ".notice-banner-right .swiper-pagination",
      clickable: true, // 클릭하여 슬라이드 컨트롤을 가능케 함. default는 false임.
    },
    loop: true,
    // 자동 재생
    autoplay: {
      delay: 3000, // 슬라이드 이동 시간 간격
      disableOnInteraction: false, // 버튼을 이용하여 컨트롤 한 이후에도 자동 재생 유지되도록
    },
    spaceBetween: 8, // 슬라이드 사이 여백
  });
  // 하단 배너 재생 이벤트
  $(".notice .swiper-controls").click(function () {
    if (noticebanner.autoplay.running) {
      noticebanner.autoplay.stop();
      $(".notice .swiper-controls").css(
        "background-image",
        "url(assets/img/play.svg)"
      );
    } else {
      noticebanner.autoplay.start();
      $(".notice .swiper-controls").css(
        "background-image",
        "url(assets/img/stop.svg)"
      );
    }
  });

  // 전체 메뉴 클릭 이벤트
  $(".fa-bars").click(function () {
    $(".header-menu, .i-class").hide();
    $(".header-click, .header-background").show();
  });

  $(".header-control button").click(function () {
    $(".header-menu, .i-class").show();
    $(".header-click, .header-background").hide();
  });

  // footer 패밀리 사이트 클릭 이벤트
  $(".footer-mark button").click(function () {
    // if ($(this).hasClass("on")) {
    //   $(this).removeClass("on");
    // } else {
    //   $(this).addss(Cla"on");
    // } --> 방법1

    $(this).toggleClass("on");
  });

  // 헤더 메뉴 호버 이벤트
  $(".header .container > ul > li")
    .not(":eq(2), :eq(3)")
    .hover(
      function () {
        $(".header-background").css("display", "block"); // 호버 했을 경우
      },
      function () {
        $(".header-background").css("display", "none"); // 호버 제거
      }
    );
});