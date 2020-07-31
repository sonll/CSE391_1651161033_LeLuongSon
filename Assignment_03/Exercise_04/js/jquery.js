$(document).ready(function() {
    $(".circles").click(function() {
        $(".circles").toggleClass("circlesChange");
    });

    $(".squares").click(function() {
        $(".squares").toggleClass("squaresChange");
    });

    $(".rectangles").click(function() {
        $(".rectangles").toggleClass("rectanglesChange");
    });
});