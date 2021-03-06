(function() {
	$(document)
		.ready(function(){
			var numItems = $( '#wulffCarousel .item' ).length,
				carouselPillBox = $('<nav />', { //don't use <div>. bootstrap will treat is as an 'item'.
					'class' : 'carousel-pill-box'})
					.appendTo( '#wulffCarousel' );			
			for (var i = 0; i < numItems; i++) {
				var carouselPill = $('<a />', {
					'class' : 'carousel-pill',
					'href'	: '#', 
					'data-href'  : i})
					.appendTo( carouselPillBox );
			};
			$('.carousel-pill[data-href="0"]').addClass('active-pill');

			var href, pos, hash, buffer = 0;
			function OxideSlider(id){
				$('html,body').animate({scrollTop: $(id).offset().top-buffer+'px'}, 'slow');
			}
			$('.scrolls').click(function(e) {
				href = $(this).attr('href');
				pos = href.indexOf('#');
				hash = href.substring(pos);
				if ( pos !== -1 && hash.length > 1 && $(hash).length > 0 ) {
					e.preventDefault();
					OxideSlider(hash);
				}
			});
		})
		.on( 'click', '.carousel-pill', function( e ){
	        e.preventDefault();
	        var goTo = Number($( this ).attr( 'data-href' ));
	        console.log(goTo);
	        $( '#wulffCarousel' ).carousel(goTo);
	        $(this).addClass('active-pill').siblings().removeClass('active-pill');
	    });

		$('#tabs a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})

		form = $('#contactform');
		response = $('.response');
		form.submit(function(){  
		$.ajax({
		  type: "POST",
		  url: "postForm.ajax.php",
		  dataType: "json",
		  data: form.serialize(),
		  
		  success: function(msg){
		    form.each(function() {
		      this.reset();
		    });
		    response.html(msg.message);

		  },
		  error: function(msg){
		    response.html("Oops. Something isn't right. Please try that again.");
		  }
		});

		return false;
		});

}());

