window.onload = function() {
	console.log('app.js');

	var squares = document.getElementsByClassName('square');
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener('click', function(event){
				console.log(this);
			});
	}
}

// var x = [];
// var o = [];

// var winners = 

//display an X or O inside the board
// function playMe (){
// 	if(this.)
// }

//make sure nothing happens if already clicked
//reset the game--connect this to reset button. 