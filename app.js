window.onload = function() {
	console.log('app.js');

	
	}


var currentPlayer = '';

function start () {
	currentPlayer  = 'X';
	var squares = document.getElementsByClassName('square');
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener('click', function(){
				playMe(this);
		});
 //used from previous homework. This ensures that "X" goes first.
}
}

start();

//display an X or O inside the board
 function playMe (square){
 	console.log(square)
 		if(square.innerHTML = " "){
			square.innerHTML = currentPlayer;
			if (currentPlayer === 'X'){
				currentPlayer = 'O'
			} else  {
				currentPlayer = 'X'
			}
			}else{
			alert ("The square is taken")
		}	
 	};	

 // function turn (){				//this switches turns. Used from previous homework.
	//  if (document.start === "X"){
	//  	document.start ="O";
 // 	}else{
 // 		document.start="X";
	// }
 // }

//make sure nothing happens if already clicked
//reset the game--connect this to reset button. 

// function clear (){
// 	var clearMe=document.getElementById('button');

// }