$(document).ready(function () {
    $("#edit-text").keypress(function () { 
        var x = $("#edit-text").val();
        $(".view").text(x);
              
    });
    $("#btn-change").click(function () { 
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $("p").removeClass();
                $("p").addClass("style_1");
                break;
            case 2:
                $("p").removeClass();
                $("p").addClass("style_2");
                break;
            case 3:
                $("p").removeClass();
                $("p").addClass("style_3");
                break;
            case 4:
                $("p").removeClass();
                $("p").addClass("style_4");
                break;
        }
    });

    $("#btn-new").click(function () { 
        $("p").removeClass("active");
        var $newp = $("<p/>")   
                 .addClass("active")  
                 .html("<p></p>");

        $("#story").append($newp);     
        $('#edit-text').val('').change()
        
        
    });
});