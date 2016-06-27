window.onload = function() {
	console.log('app.js');

	var squares = document.getElementsByClassName('square');
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener('click', function(event){
				console.log(this);
			});
	}
}

function play (){

}