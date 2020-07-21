$(document).ready(function () {
    $("div").remove();
    $("#drop-down").change(function () { 
        var nb =  $(this).val();
        $("div").remove();
        for (var i = 0; i < nb; i++){
            $("section").append("<div></div>");
        }
        
    });

});



