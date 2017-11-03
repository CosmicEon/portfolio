/* globals $ */

const $headerHeight = $('.container-header').height();

$(window).scroll(function () {
    const $windowScroll = $(this).scrollTop();

    // Navigation
    if ($windowScroll >= 100) {
        $('.container-nav').addClass('nav-active');

    } else if ($windowScroll < 100) {
        $('.container-nav').removeClass('nav-active');
    }

    // console.log($headerHeight);
    // console.log($windowScroll);

    // Header
    if ($windowScroll <= $headerHeight) {
        $('.starfield-back').css({
            'transform': `translate(0px, -${$windowScroll / 200}1)`,
        });

        $('.container-title').css({
            'transform': `translate(0px, -${$windowScroll / 8}%)`,
        });

        $('.planet-foreground').css({
            'transform': `translate(0px, -${$windowScroll / 20}%)`,
        });
    }
});
