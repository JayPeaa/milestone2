//jQuery

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
});
