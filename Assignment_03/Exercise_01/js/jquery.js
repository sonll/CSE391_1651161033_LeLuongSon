$(document).ready(function () {
    $("#circle").hover(function () {
            // over
            $("#square").css("background-color", "white");
        }, function () {
            // out
            $("#square").css("background-color", "red");
            
        }
    );
});