window.onload = function() {
	console.log(app.js);

	var squares = document.getElementByClassName('square');
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener('click', play);
	}
}

function play (){
	
}