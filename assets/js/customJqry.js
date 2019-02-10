//jQuery

//demo code to demonstrate how to use animate css and Jquery

$(function() {

var animationName = "animated shake";
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"

    $('h1').on('click', function() {
        $('h1').addClass(animationName).one(animationEnd,
            function() {
                $(this).removeClass(animationName);
            });
        $()
    });

    $("#home-menu").on("click", function() {
       $("#home-menu").addClass("active");
        $("#home-menu").siblings().removeClass("active");

    });
    
    $("#about-menu").on("click", function() {
       $("#about-menu").addClass("active");
        $("#about-menu").siblings().removeClass("active");

    });
    
    $("#dashboard-menu").on("click", function() {
       $("#dashboard-menu").addClass("active");
        $("#dashboard-menu").siblings().removeClass("active");

    });
    
    $("#contact-menu").on("click", function() {
       $("#contact-menu").addClass("active");
        $("#contact-menu").siblings().removeClass("active");

    });
    
});



