///creepy theme	//////////////////////////////

	function creepy(){
		$('#theme').attr('href', 'css/style2.min.css');
		// setInterval(function() {
			// document.getElementById('drop_sound').play();
		// }, 1900);
		// setInterval(function() {
			// document.getElementById('crow').play();
		// }, 30000);
		// setInterval(function() {
			// document.getElementById('bell').play();
		// }, 20000);
		setTimeout(function() {
			document.getElementById('thunder').play();
		}, 9000);
		$('.info-cls').text('');
	}
	
///funky theme////////////////////////////////	
	function funky(){
		$('#theme').attr('href', 'css/style3.min.css');
		$('.info-cls').text('');
		$('.section-text').hide();
		setTimeout(function() {
			$('.section-text').slideDown(3000);
		}, 3000);
	}