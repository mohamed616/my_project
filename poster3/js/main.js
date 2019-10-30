/*global document*/
var $,
    window;
$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 3000
    });
    $(".ki").click(function () {
        $(".sel").fadeToggle();
    });
    var colorli = $(".sel ul li");
    colorli
        .eq(0).css("backgroundColor", "#36d40fd9").end()
        .eq(1).css("backgroundColor", "#7916d4a6").end()
        .eq(2).css("backgroundColor", "#1d22afbf").end()
        .eq(3).css("backgroundColor", "#c8d416a6").end()
        .eq(4).css("backgroundColor", "#E41B17");
    colorli.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            $("#scrolling").show();
        } else {
            $("#scrolling").hide();
        }
    });
    $("#scrolling").click(function () {
        $("html,body").animate({scrollTop : 0}, 600);
    });
});
//loading
$(window).on("load", function () {
    "use strict";
    $("body").css("overflow", "auto");
    $(".loadoverlay .sk-folding-cube").fadeOut(500, function () {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
    });

});