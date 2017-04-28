'use strict';

;(function ($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function () {
		$('.nav-trigger').on('click', function (e) {
			$('.nav-trigger').toggleClass('active');
			
			$('.nav').toggleClass('active');
		});

    $("#about").click(function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1e3)
    });
	
    $("#portfolio").click(function() {
        $("html, body").animate({
            scrollTop: $(".section_portfolio").offset().top
        }, 1e3)
    });

    $("#contacts").click(function() {
        $("html, body").animate({
            scrollTop: $(".section_contacts").offset().top
        }, 1e3)
    });
	});
})(jQuery, window, document);