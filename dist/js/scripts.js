"use strict";var $headerHeight=$("#container-header").height();$(window).scroll(function(){var a=$(this).scrollTop();a>=100?($("#container-nav").addClass("nav-active"),$(".go-top").removeClass("hide-element")):a<100&&($("#container-nav").removeClass("nav-active"),$(".go-top").addClass("hide-element")),a<=$headerHeight&&($(".starfield-back").css({transform:"translate(0px, -"+a/40+"px)"}),$(".container-title").css({transform:"translate(0px, -"+a/8+"%)"}),$(".planet-foreground").css({transform:"translate(0px, -"+a/20+"%)"}))}),$(".buttons-nav").click(function(){var a=$(this).hasClass();console.log(a)});