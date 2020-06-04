$(window).bind("scroll", function (e) {
    parallaxScroll();
  });
  
  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $("#parallax-lvl-0").css("top", 0 - scrolled * 10 + "px");
    $("#parallax-lvl-1").css("top", 0 - scrolled * 10 + "px");
    $("#parallax-lvl-2").css("top", 0 - scrolled * 10 + "px");
    $("#parallax-lvl-3").css("top", 0 - scrolled * 10 + "px");
  }
  