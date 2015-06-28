(function ($) {

var animate = runAnimation();

    function runAnimation() {
        return {
            spin: spin
        }
        
        /**
         * [spin description]
         * @param  {number} d           Number of degrees to rotate
         * @param  {$element} target    Jquery element to target
         */
        function spin(d, target) {
            var elem = target;
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
            animate.spin(360, $('.landingStar'));
        },1500);

    });
})(jQuery);
