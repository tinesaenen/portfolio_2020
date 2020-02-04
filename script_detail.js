// scroll header

var didScroll;
var lastScrollTop = 0;
var delta = 1;
var navbarHeight = 10;

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 25);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header")
      .removeClass("nav-down")
      .addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header")
        .removeClass("nav-up")
        .addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

// button disappear
// $(document).ready(function() {
//   var par = $(".container_about_desktop");
//   $(par).hide();

//   $(".btn_about, .container_about_desktop").click(function(e) {
//     $(par).toggle();
//     e.preventDefault();
//   });
// });
