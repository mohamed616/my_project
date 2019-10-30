/*global document*/
var $;
$(document).ready(function () {
    "use strict";
    $(".information ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".inab div").hide();
        $("." + $(this).data("value")).fadeIn();
    });
    $("body").niceScroll({
        cursorborder: "0",
        cursorcolor: "#1abc9c"
    });
   
});
