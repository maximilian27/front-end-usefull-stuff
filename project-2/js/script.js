// swipe function for mobile 

	$(".carousel").on("touchstart", function(event){
		var xClick = event.originalEvent.touches[0].pageX;
		$(this).on("touchmove", function(event){
			var xMove = event.originalEvent.touches[0].pageX;
			if( Math.floor(xClick - xMove) > 5 ){
				$(this).carousel('next');
			}
			else if( Math.floor(xClick - xMove) < -5 ){
				$(this).carousel('prev');
			}
		});
		$(".carousel").on("touchend", function(){
				$(this).off("touchmove");
		});
	});
	
//  toggle view more buttons/change text view more 

	function view_more_link() {
		$('#hidden-sm-btns').toggle(1000);
		$('#view-text').html($('#view-text').html() == 'VIEW MORE' ? 'SHOW LESS..' : 'VIEW MORE');	
	}
	
// large buttons, toggle between plus/minus symbol onclick, drop-shadow filter


////////////////////////////////////////	
	$(document).ready(function() {
		$('.btn-large').click(function() {
			// $('.span-large-btn-4', this).html($('.span-large-btn-4', this).html() == '+' ? '-' : '+');
			if ($('.span-large-btn-4', this).html() == '+') {
				$('.span-large-btn-4', this).html('-');
				$('.btn-large', this).addClass('btn-large-active');	//drop-shadow filter	
			}
			else {
				$('.span-large-btn-4', this).html('+');
				$('.btn-large', this).removeClass('btn-large-active');	
			}
		});	
	});		
	