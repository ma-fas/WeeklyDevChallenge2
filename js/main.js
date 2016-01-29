$(document).ready(function() {
	$('body').scrollspy({ target: '#navbar', offset: 100 });


// Sticky menu
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.navbar').addClass('js-scroll-on');
		} else {
			$('.navbar').removeClass('js-scroll-on');
		}
	}); 

	// Enable smooth scrolling on all links with anchors 
	$("#navbar li a[href^='#'], #continue a[href^='#']").on('click', function(e) {

		var hash = this.hash;

		e.preventDefault();
	  
		$('html, body').animate({
		    scrollTop: $(hash).offset().top -50
		  }, 400, function() {

	  	// when done, add hash to url
    	// (default click behaviour)
	    window.location.hash = hash;
	  	});
	});
});