import jQuery from "jquery";
(function($) {
  /**Scroll top - start */
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  /**Scroll top - stop */

  /**Smooth scroll - start */
  $(document).on("click", "a.scroll-to-top", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1000,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
  /**Smooth scroll - stop */
})(jQuery);
