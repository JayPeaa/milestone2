//jQuery

$(function(){
    $('.chart-title').hide();
    $('.table').hide();
    $('.dc-data-count').hide();
    $('.reset-btn').hide();
    
    
});



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





    //Nav bar code


    $(document).ready(function() {
    
        var $sections = $('.nav-container');
        $(window).scroll(function() {

            var currentScroll = $(this).scrollTop();
            var $currentSection
            $sections.each(function() {

                var divPosition = $(this).offset().top;
                if (divPosition - 1 < currentScroll) {
                    $currentSection = $(this);
                }

                var id = $currentSection.attr('id');
                $('a').removeClass('active');
                $(`a[href="#${id}"]`).addClass("active");
            })
        });

        //Prevent default form reload behaviour

        $("form").on("submit", function(event) {
            event.preventDefault();

        })


    });

});
