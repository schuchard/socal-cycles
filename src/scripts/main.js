(function ($) {

var animate = runAnimation();

    function runAnimation() {
        return {
            spin: spin
        }
        // Rotate star by 'd' degree's
        // TODO: add element argument
        function spin(d) {
            var elem = $('.landingStar');
            $({deg: 0}).animate({deg: d}, {
                duration: 2500,
                step: function (now) {
                    elem.css({
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            });
        }
    }


    $(document).on('ready', function() {

      setTimeout(function (argument) {
          animate.spin(360);
      },1500);

    });

})(jQuery);
