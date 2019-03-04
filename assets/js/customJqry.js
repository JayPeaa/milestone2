//jQuery

$(function() {
    $('.chart-title').hide();
    $('.table').hide();
    $('.dc-data-count').hide();
    $('.reset-btn').hide();
    $('#next').hide();
    $('#last').hide();
    $('.rotate-screen-img').hide();
    

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
