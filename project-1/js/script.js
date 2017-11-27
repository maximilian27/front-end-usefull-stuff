	$(document).ready(function() {	
		$('ol.lista_filme button').click(function(e) {
			$('#myModal2').modal('show'); 
				var name = this.name;
				//alert("'"+"#"+name+"'");
				$('#hidden_input').val(name);
			e.preventDefault();
		});
	});	
	function addTitle(){
		var new_title = $("<li title='this stuff will not work, because it actually does not exist:(..'></li>");        
		new_title.text($('#movie_title').val());
		var category = $('#hidden_input').val();
		//alert(category);
		$("#"+category).append(new_title);
	}


	$(document).ready(function(){
		$('ol.lista_filme li').click(function(e) { 
			$('#myModal').modal('show'); 
			$('.modal-title').text($(this).text());
				$('#inchide_modal').click(function(e) {
					$('#img_filme').attr('src', '');
					$('#movie_description').text('');
					$('.modal-title').text('');
				});
			e.preventDefault();
		});
	});
	
	function beer_animation() {
		document.getElementById('myAudio').play();
		$('#img_beer').explode();
		$('.beer-description').fadeOut(3000);
		$('.beer-rating').slideUp(3000);
		$('.beer-description').fadeIn(3000);
		$('.beer-rating').slideDown(3000);
	}
	
	$(document).ready(function() {	
		$('#search_button').click(function(e) {
			var blahblah = $('#numes_search').val();
			alert(blahblah);

			e.preventDefault();
		});
	});
	$(document).ready(function() {	
		function fun(){
			$('#text_wrap').css('top', '');
			$('#text_wrap').animate({top:'-120em'}, 60000, fun);
		}	
		fun();
	});