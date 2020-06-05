jQuery(document).ready(function($) {

    $("#btn-animate-top").click(function() {
        $('#div-animate-top').toggleClass("w3-animate-top");
    });
    $("#btn-animate-bottom").click(function() {
        $('#div-animate-bottom').toggleClass("w3-animate-bottom");
    });
    $("#btn-animate-left").click(function() {
        $('#div-animate-left').toggleClass("w3-animate-left");
    });
    $("#btn-animate-right").click(function() {
        $('#div-animate-right').toggleClass("w3-animate-right");
    });
    $("#btn-animate-opacity").click(function() {
        $('#div-animate-opacity').toggleClass("animate-opacity");
    });
    $("#btn-animate-zoom").click(function() {
        $('#div-animate-zoom').toggleClass("animate-zoom");
    });
    // ===============================================

    $("#btn-animate-all").click(function() {

        $('#img-animate-top').toggleClass("animate-top");
        $('#img-animate-zoom').toggleClass("animate-zoom");
        $('#img-animate-left').toggleClass("animate-left");
        $('#img-animate-bottom').toggleClass("animate-bottom");

    });

});