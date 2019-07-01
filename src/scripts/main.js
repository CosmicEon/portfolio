/* globals $ */

const $headerHeight = $("#container-header").height();

$(window).scroll(function() {
  const $windowScroll = $(this).scrollTop();

  // Navigation
  if ($windowScroll >= 100) {
    $("#container-nav").addClass("nav-active");

    $(".go-top").removeClass("hide-element");
  } else if ($windowScroll < 100) {
    $("#container-nav").removeClass("nav-active");

    $(".go-top").addClass("hide-element");
  }

  // Header
  if ($windowScroll <= $headerHeight) {
    $(".starfield-back").css({
      transform: `translate(0px, -${$windowScroll / 40}px)`
    });

    $(".container-title").css({
      transform: `translate(0px, -${$windowScroll / 8}%)`
    });

    $(".planet-foreground").css({
      transform: `translate(0px, -${$windowScroll / 20}%)`
    });
  }
});

// Links scroll animation and Header offset
$(".container-buttons-nav a").on("click", function(event) {
  const $this = event.target;
  const $targetSelector = $.attr($this, "href").substr(1);
  const $targetElementOffsetTop = $(`#${$targetSelector}`).offset().top;

  const $navigationHeight = $("#container-nav").outerHeight();
  // const navigationHeight = document.getElementById('container-nav').clientHeight;

  $("html, body").animate(
    {
      scrollTop: $targetElementOffsetTop - $navigationHeight
    },
    800
  );
});

// Image preview
// toggle it
$("img.project-img").on("click", function(event) {
  const $windowWidth = $(document).width();

  if ($windowWidth > 920) {
    const $this = event.target;

    const $sourceImg = $($this).attr("src");
    $(".enlarged-img").attr("src", $sourceImg);

    const $previewImg = $("#preview-img");
    const $isHidden = $previewImg.hasClass("hide-element");

    $(".project-leftside img").css({
      display: "none"
    });
    $(".project-leftside figcaption").css({
      display: "none"
    });

    if ($isHidden) {
      $previewImg.removeClass("hide-element");
    }
  }
});

// Image preview
// close it
$("img.enlarged-img").on("click", function(event) {
  const $previewImg = $("#preview-img");
  const $isHidden = $previewImg.hasClass("hide-element");

  $(".project-leftside img").css({
    display: "block"
  });
  $(".project-leftside figcaption").css({
    display: "block"
  });

  if (!$isHidden) {
    $previewImg.addClass("hide-element");
  }
});
