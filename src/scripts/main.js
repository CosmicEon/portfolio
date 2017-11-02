/* globals $ */

const $headerHeight = $('.container-header').height();

$(window).scroll(function () {
    const $windowScroll = $(this).scrollTop();

    if ($windowScroll >= 100) {
        $('.container-nav').addClass('nav-active');

    } else if ($windowScroll < 100) {
        $('.container-nav').removeClass('nav-active');
    }

    console.log($windowScroll);
    if ($windowScroll <= $headerHeight) {
        // console.log($headerHeight);
        $('.starfield-back').css({
            'transform': `translate(0px, -${$windowScroll / 100}%)`,
        });

        $('.container-title').css({
            'transform': `translate(0px, -${$windowScroll / 10}%)`,
        });

        $('.planet-foreground').css({
            'transform': `translate(0px, -${$windowScroll / 30}%)`,
        });
    }
});
