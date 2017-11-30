///creepy theme	//////////////////////////////
	function creepy(){
		$('#theme').attr('href', 'css/style2.css');
		setInterval(function() {
			document.getElementById('drop_sound').play();
		}, 1900);
		setInterval(function() {
			document.getElementById('crow').play();
		}, 30000);
		setInterval(function() {
			document.getElementById('bell').play();
		}, 20000);
		setTimeout(function() {
			document.getElementById('thunder').play();
		}, 9000);
		setTimeout(function() {
			document.getElementById('photo_lightning').remove();
		}, 21000);
		document.getElementById('short_description').remove();
	}
	
///bizzare theme////////////////////////////////	
	function funky(){
		alert("I'm working on it..");
	}