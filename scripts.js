    jQuery(function ($) {

        $('.superMenu').mouseover(function () {
            //$('.fade-layer').removeClass('hidden');
            $('.fade-layer').addClass('active');
        });

        $('.superMenu').mouseout(function () {
            //$('.fade-layer').addClass('hidden');
            $('.fade-layer').removeClass('active');
        });

    });
