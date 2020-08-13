$(document).ready(function() {
    $("#loadmore").click(function() {
        var a = '<div class="row" style="margin: 10px 0px 10px 0px ; "><div class="col-sm-9" style="background-color: greenyellow; padding: 0;"><div style=" font-size: 25px; padding: 20px; "><a href=" " style="text-decoration: none; color: #393838; font-weight: bold; ">Garena Free Fire tung teaser MV bài hát Sinh Tồn Để Chiến Thắng cực chất, 2 nhân vật chính ngầu khỏi bàn</a></div><div style="display: flex; flex-direction: row; "><iframe style="padding: 10px; " width="560 " height="315 " src="https://www.youtube.com/embed/Qytw5wlHJ1A " frameborder="0 " allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture " allowfullscreen></iframe><div style="padding: 10px; "><p>Phải nói Garena rất chịu "chơi " khi liên tục tung ra những sản phẩm âm nhạc và luôn nằm trong top trending Youtube và có độ phủ sóng rộng rãi.</p><button style="font-size: 15px; background-color: #00BFFF; color: white; border: 2px solid #00BFFF; border-radius: 5px; ">Thích 98</button><button style=" font-size: 15px; background-color: #00BFFF; color: white;border: 2px solid #00BFFF; border-radius: 5px; ">Chia sẻ</button></div></div><div></div></div><div class="col-sm-3" style="background-color: green; "></div></div>'
        $(".container").append(a);
        $("#loadmore").remove();
    });
    window.onscroll = function() { myFunction() };
    $("#upToTop").click(function() {
        document.documentElement.scrollTop = 0;
    });

    function myFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#black-nav").css("position", "fixed");
            $("#black-nav").css("top", "0px")
            $("#black-nav").css("background", "#ec5f5f");
            $("#black-nav").css("width", "82%");
            $("#black-nav").css("z-index", "3");
        } else {
            $("#black-nav").css("position", "relative");
            $("#black-nav").css("top", "unset")
            $("#black-nav").css("background", "#343a40");
            $("#black-nav").css("width", "100%");

        }

        if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
            $("#advertise").css("position", "fixed");
            $("#advertise").css("top", "40px")
            $("#advertise").css("right", "60px")
            $("#advertise").css("width", "20%")
            $("#advertise").css("z-index", "3");
        } else {
            $("#advertise").css("position", "relative");
            $("#advertise").css("top", "unset")
            $("#advertise").css("width", "100%");
            $("#advertise").css("right", "unset");

        }
    };

});