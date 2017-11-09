/* globals $ */

const $headerHeight = $('#container-header').height();

$(window).scroll(function () {
    const $windowScroll = $(this).scrollTop();

    // Navigation
    if ($windowScroll >= 100) {
        $('#container-nav').addClass('nav-active');
        $('.go-top').removeClass('hide-element');
    } else if ($windowScroll < 100) {
        $('#container-nav').removeClass('nav-active');
        $('.go-top').addClass('hide-element');
    }

    // Header
    if ($windowScroll <= $headerHeight) {
        $('.starfield-back').css({
            'transform': `translate(0px, -${$windowScroll / 40}px)`,
        });

        $('.container-title').css({
            'transform': `translate(0px, -${$windowScroll / 8}%)`,
        });

        $('.planet-foreground').css({
            'transform': `translate(0px, -${$windowScroll / 20}%)`,
        });
    }
});

$('.container-buttons-nav a').click(function (event) {
    const $this = event.target;
    const scrollTop = window.pageYOffset;

    window.scrollBy(70, -73);
    $this.style.top = scrollTop * 0.2 + 'px';
    console.log($this);
    console.log(scrollTop);
});

// function() {
//     $('html, body').animate({
//         scrollTop: $(this).offset().top + 'px'
//     }, 'fast');
// }