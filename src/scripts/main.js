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

// Links scroll animation and Header offset
$('.container-buttons-nav a').on('click', function (event) {
    const $this = event.target;
    const $targetSelector = $.attr($this, 'href').substr(1);
    const $targetElement = $(`#${$targetSelector}`).offset().top;

    const $navigationHeight = $('#container-nav').outerHeight();
    // const navigationHeight = document.getElementById('container-nav').clientHeight;

    $('html, body').animate({
        scrollTop: $targetElement - $navigationHeight,
    }, 800);
});

// Image preview
// toggle it
$('img.project-img, img.enlarged-img').on('click', function (event) {
    const $windowWidth = $(document).width();

    if ($windowWidth > 800) {
        const $this = event.target;

        const $sourceImg = $($this).attr('src');
        $('.enlarged-img').attr('src', $sourceImg);

        const $previewImg = $('#preview-img');
        const $isHidden = $previewImg.hasClass('hide-element');

        if ($isHidden) {
            $('.enlarged-img').fadeIn(500);
            // console.log($item);
            $previewImg.removeClass('hide-element');
        }
    }
});

// close it
$('img.enlarged-img').on('click', function (event) {
    const $this = event.target;

    const $previewImg = $('#preview-img');
    const $isHidden = $previewImg.hasClass('hide-element');

    if (!$isHidden) {
        $('.enlarged-img').fadeOut(500);
        // $previewImg.addClass('hide-element');
    }
});
