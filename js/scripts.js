
(function($) {
    "use strict"; 
	window.dataLayer = window.dataLayer || [];
	// window['ga-disable-GA_MEASUREMENT_ID'] = true;

	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());

	gtag('config', 'G-N9BYZ4Y5F8', {
		'anonymize_ip': true
	});
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 100;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 0);
		}
		hidePreloader();
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2022/02/24 05:00:00', {
	    elapse: true
	}) /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		const format = '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span><span class="counter-number">%S<br><span class="timer-text">Seconds</span></span>';
		$(this).html(event.strftime(format));
        let $this = $(this);
        if (event.elapsed) {
            $this.html(event.strftime(format));
        }
	})


    /* Image Slider 2 - Swiper */
    var imageSliderOne = new Swiper('.image-slider-1', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);