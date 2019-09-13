jQuery(document).ready(function($) {
	
	$('.lightbox-trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");


	    if ($(this).closest('.dragscroll').hasClass('dragging')) {
	      event.preventDefault();
	      return false;
	  	}
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox-container').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#lightbox-content').html('<img src="' + image_href + '" />');
		   	
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox-container').removeClass( "fade-out" );
			$('#lightbox-container').addClass( "fade-in" );
			$('html').addClass( "limit-overflow" );
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox-container" class="fade-in">' +
				'<div id="lightbox">' +
					'<div class="carousel-control">' +
						'<h3 class="sec-btn sec-btn-tbk hvr-sweep-to-left">×</h3>' +
					'</div>' +
					'<div id="lightbox-content">' + //insert clicked link's href into img src
						'<img src="' + image_href +'" />' +
					'</div>' +	
				'</div>' +
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
			$('html').addClass( "limit-overflow" );
		}
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$(document).on('click', '#lightbox-container', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox-container').addClass( "fade-out" );
		$('html').removeClass( "limit-overflow" );
	});

});