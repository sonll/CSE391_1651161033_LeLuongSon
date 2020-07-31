$(document).ready(function() {
    $("p").hide();
    $("a").click(function() {
        var x = $(this).parent().parent().children().eq(2).show();

    });
});