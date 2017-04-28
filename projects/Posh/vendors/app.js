$( document ).ready(function() {

	$('.slider .slides').addClass("owl-carousel");

 	 $('.slider .slides').owlCarousel({
 	    items: 1,
 	    loop: true,
		// nav: true,
		dots: true
	});

 	// Click event for the testimonials
 	var $slides = $('.slider .slides');

 	$('.slider__prev').on('click',(e)=>{
 		e.preventDefault();

 		$slides.trigger('prev.owl.carousel');
 	});

 	$('.slider__next').on('click',(e)=>{
 		e.preventDefault();

 		$slides.trigger('next.owl.carousel');
 	});

  	//  Mobile navigation
  	 $('.nav__trigger').on('click', (e)=>{
  	 	$('.nav__trigger').toggleClass('active');

  	 	$('.nav').toggleClass('active');
  	 });
});