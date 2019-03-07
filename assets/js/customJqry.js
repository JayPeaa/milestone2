//jQuery

/*-----Code for NAV Bar Navigation on one page layout----------*/

$(document).ready(function() {

    var scrollLink = $('.scroll');

    /*---------for Smooth Scroll Effect--------------*/

    scrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    /*--------Assign Active Class to Active Link--------*/

    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    });

    var arrowScrollLink = $('.arrow-scroll');

    /*---------For Smooth Scroll Effect on Arrow Down Indicator--------------*/

    arrowScrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);

    })
    
    var contactScrollLink = $('.contact-us-scroll');

    /*---------For Smooth Scroll Effect on Arrow Down Indicator--------------*/

    contactScrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);

    })
    
    

    /*------Prevent default form reload behaviour--------*/

    $("form").on("submit", function(event) {
        event.preventDefault();
    });

    /*-----Hides Dashboard Elements on Loadining, this element fade in slow when renderAll() is executed in graph.js*/

    $(function() {
        $('.chart-title').hide();
        $('.table').hide();
        $('.dc-data-count').hide();
        $('.reset-btn').hide();
        $('#next').hide();
        $('#last').hide();
        $('.rotate-screen-img').hide();
        $('.rotate-text').hide();
    });

})
