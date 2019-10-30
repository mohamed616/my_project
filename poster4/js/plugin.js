var $,
    window;
$(function () {
    "use strict";
    var winh = $(window).height(),
        barh = $(".bar").innerHeight(),
        navh = $(".navbar").innerHeight();
    $(".slider,.carousel-item").height(winh - (barh + navh));
    $(".work button").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});