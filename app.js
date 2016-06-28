window.onload = function() {
	console.log('app.js');

	
	}


var currentPlayer = '';

function start () {
	currentPlayer  = 'X';	//the first player always starts with X
	var squares = document.getElementsByClassName('square');	//grabbing the squares
		for(var i=0; i<squares.length; i++){					
			squares[i].addEventListener('click', function(){	//making all of the squares clickable
				this.innerHTML = '';
				playMe(this);									//calling the playMe function to make the X's and O's display
		});
	}
}

//var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
start();

//display an X or O inside the board
 function playMe (square){  
 	  if(square.innerHTML = " "){			//if there is nothing/square is not played
		square.innerHTML = currentPlayer;
											  //then assign it the current player
		if (currentPlayer === 'X'){		//if the current player played X
			currentPlayer = 'O';			//the other player is O
		} else  {
			currentPlayer = 'X';		//and vice versa
			}
		 }else{
		 	alert ("The square is taken")  //tried to combine the function to stop squares from already being clicked.
		}	
 	};	

 	 // function alreadyPlayed (square){       Attempt at making selected squares not clickable
 	 // 	if (square.innerHTML = " "){
 		// 	square.innerHTML = currentPlayer;
 	 // 		playMe();
 	 // 	}else{
 		// 	alert("Square is taken");
 	 // 	}
 	 // }


 // function turn (){				//this switches turns. Used from previous homework.
	//  if (document.start === "X"){
	//  	document.start ="O";
 // 	}else{
 // 		document.start="X";
	// }
 // }

//make sure nothing happens if already clicked
//reset the game--connect this to reset button. 

//  function clear (){
// 	var clearMe=document.getElementById('button');
// 	for(var i=0; i<squares.length;i++){
// 		clearMe.addEventListener('click', function(){
// 		squares[i].innerHTML = '';
// 		})
// 	}
// }












