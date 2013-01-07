(function() {
	$(document)
		.ready(function(){
			var numItems = $( '.item' ).length,
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
		})
		.on( 'click', '.carousel-pill', function( e ){
	        e.preventDefault();
	        var goTo = Number($( this ).attr( 'data-href' ));
	        console.log(goTo);
	        $( '.carousel' ).carousel(goTo);
	        $(this).addClass('active-pill').siblings().removeClass('active-pill');
	    });

		$('#tabs a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})

}());

