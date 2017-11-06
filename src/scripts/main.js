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

    // console.log($headerHeight);
    // console.log($windowScroll);

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

$('.buttons-nav').click(function () {
    // const $element = $(this).scrollTop();
    const $element = $(this).hasClass();
    console.log($element);
    // $element.scrollTop(1000);
    // console.log($element.scrollTop());
    // $element.css({
    //     'transform': 'translate(0px, -30px)',
    // })
    // $(window).scrollTop($element - 20).offset();
});

