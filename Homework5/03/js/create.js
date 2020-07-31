$(document).ready(function() {

    $("#create").click(function() {
        if ($("#textInput").val() == '') {
            alert("Please Input");
        } else {
            $("ul").append("<li><p>" + $("#textInput").val() + "</p><button><i></i></button>");
            $("li").addClass("list-group-item d-flex");
            $("li").css("border-style", "none");
            $("p").addClass("col-10");
            $("li>button").addClass("btn btn-primary col-2 delete");
            $("li>button").css("background-color", "white");
            $("li>button").css("border-style", "none");
            $("i").addClass("fa fa-trash");
            $("i").css("color", "blue");

            $("#textInput").val("");
            $(document).on("click", "button.delete", function() {
                $(this).parent().remove();
            });
        }
    });


});