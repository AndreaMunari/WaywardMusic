//Scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      if($( window ).width()  > 991    ){
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      }
    });
  });

  //Modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

//Timeline
var $element=$('.each-event, .title');
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');
function check_for_fade() { 
    var window_height = $window.height();
    
    $.each($element, function (event) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset -$(window).scrollTop());
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};;


//Preloader
(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery)

//carousel
$('.carousel').carousel({
  interval: 2000
})

//fix navbar