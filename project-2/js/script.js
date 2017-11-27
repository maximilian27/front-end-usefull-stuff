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
	
// large buttons, toggle between plus/minus symbol onclick

//////////////////////// test
	// var clicks = 0; 
	// $('.btn-large').click(function() { 
		// (clicks % 2 == 0) ? $('.span-large-btn', this).css('color', 'red') : $('.span-large-btn', this).css('color', 'blue'); 
		// ++clicks; 
	// }); 
////////////////////////////////////////	
	$(document).ready(function() {
		var clicks = 0;
		$('.btn-large').click(function() {
			if (clicks % 2 == 0){
				$('.span-large-btn-4', this).css('background-image', 'url(img/minus.png)');
			} else{
				$('.span-large-btn-4', this).css('background-image', 'url(img/plus.png)');
			}
				++clicks;
		});	
	});		
	