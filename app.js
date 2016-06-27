window.onload = function() {
	console.log('app.js');

	var squares = document.getElementsByClassName('square');
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener('click', playMe);
		}
	}


function start (){
	document.start = "X"  //used from previous homework. This ensures that "X" goes first.
}

//display an X or O inside the board
 function playMe (){
 	var squares = document.getElementsByClassName('square');
	if(squares.innerText =" "){
		this.innerText = document.start;
		turn(); //calls the function so the squares display the X or O
	}else{
		alert ("The square is taken")
	}
}
function turn (){				//this switches turns. Used from previous homework.
	if (document.start==="X"){
		document.start ="O";
	}else{
		document.start="X"
	}
}

//make sure nothing happens if already clicked
//reset the game--connect this to reset button. 