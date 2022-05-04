//Scroll
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  //Modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });

