$(document).ready(function() {

    $(":button").each(function() {
        $(this).click(function() {
            var index = $(this).index();
            $("button").removeClass("btnChange");
            $(this).addClass("btnChange");
            let squa = $(this).parent("#left").parent(".container").children("#right").children().eq(index);
            $(".squares").removeClass("squaresChange");
            squa.addClass("squaresChange");
            $("input").css("display", "block");
            $(".squares").css("opacity", '1');
            $("input").change(function() {
                var value = $("input").val();
                $(".squaresChange").css('opacity', value);
            });


        });
    });
});