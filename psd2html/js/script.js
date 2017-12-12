// swipe function for mobile 
	$(document).ready(function() {
		$('.carousel').on('touchstart', function(event){
			var xClick = event.originalEvent.touches[0].pageX;
			$(this).on('touchmove', function(event){
				var xMove = event.originalEvent.touches[0].pageX;
				if( Math.floor(xClick - xMove) > 5 ){
					$(this).carousel('next');
				}
				else if( Math.floor(xClick - xMove) < -5 ){
					$(this).carousel('prev');
				}
			});
			$('.carousel').on('touchend', function(){
					$(this).off('touchmove');
			});
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
			$('.span-large-btn-4', this).html($('.span-large-btn-4', this).html() == '+' ? '-' : '+');
			/*if-else
			if ($('.span-large-btn-4', this).html() == '+') {
				$('.span-large-btn-4', this).html('-');
			}
			else {
				$('.span-large-btn-4', this).html('+');
			}*/
		});	
	});		

///ajax request small buttons collapse text
	
	$(document).ready(function() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var x = document.getElementsByClassName('collapse-small');
					for (var i=0; i < x.length; i++) {
					x[i].innerHTML = xhr.responseText;
					}
				}
		  };
		  xhr.open('GET', 'text.txt', true);
		  xhr.send();
	});	