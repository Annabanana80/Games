window.onload = function() {
	console.log('app.js');

	names();  //this envokes the function that grabs the names and appends them to the page upon the page loading.
	}

function start () {
	document.begin  = 'X';	//the first player always starts with X. Incorporated the document.begin back into my code. Borrowed from HW.
	var squares = document.getElementsByClassName('square');	//grabbing the squares
		for(var i=0; i<squares.length; i++){					
			squares[i].addEventListener('click', function(){	//making all of the squares clickable
				//this.innerHTML = '';
				playMe(this);	//calling the playMe function and starts the game as the turn and playMe function are intertwined. 
											
		});
	}
}
start();

function playMe(square) { ////This is borrowed from my howework from week 2 day 5. It prevents a square from being clicked twice!
	if (square.innerText == ""){
		square.innerText = document.begin;
		turn();
	}else{
		alert("That square is taken :)")
	}
}
//display an X or O inside the board
function turn () {                    //this is also borrowed from my homework. 										
	if (document.begin === "X"){		//This ensures that X and O alternate.
		document.begin = "O";
	}else{
		document.begin = "X";
	}
}
function names (text) {  //this function grabs the names and appends them to the page. 
	var playerOne=document.getElementById('playerOne');
	var first= prompt("Player 1, what is your name?");
	playerOne.innerHTML=first; 							//this appends the input from the prompt to the page.
	var playerTwo=document.getElementById('playerTwo');
	var second = prompt("Player 2, what is your name?");
	playerTwo.innerHTML=second;
}
//var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//var playerX=[];
//var playerO=[];

//What do I want this to do?
	//iterate over the winners array
	//iterate over the winners
	//link the winning combinations with X or O
	//have each square display "X wins" or "O wins" depending on who won. 



//start of winner logic--A work in progress. :)
  	
  	// function checkForWinners () {
  	// 	for(var i=0; i<winners.length; i++){ //iterates over winner array
  	//		for (var j=0; j<winners[i]; j++) {  //iterates over arrays within the array
  	// 	       if (winners[i]===[j]){
  	//				return true;
  	//			}else{
  	//				return false;
  	//			}
  	//		}
  	// }

  	//function position (){
  	// var square=document.getElementsByClassName('square');
  	// checkForWinners();
  	// if(square.innerHTML==="X") {
  	// call the checkForWinners function, 
  	// I think another loop needs to be written to iterate over the squares
  	// call the squares and make them display in all squares "X wins!" OR create an alert	
  	//	}else if(square.innerHTML==="O")
  	//}
  	

//Plan B: Make a big ass if statement with the winning combos:



// var clearMe=document.getElementById('button');
// 	clearMe.addEventListener('click', function(){

// 	clear();
// })
// //reset the game--connect this to reset button.Still a work in progress 

//  function clear (){
//  	var squares = document.getElementsByClassName('squareclicked');
//  	console.log(squares)
	
// 		for(var i=0; i<squares.length;i++){
// 		squares[i].innerHTML = '';			//this should somehow reset the className to nothing and clear the square.

// 	}
// }










//Spooky Code Graveyard

// var currentPlayer = '';

// function start () {
// 	currentPlayer  = 'X';	//the first player always starts with X
// 	var squares = document.getElementsByClassName('square');	//grabbing the squares
// 		for(var i=0; i<squares.length; i++){					
// 			squares[i].addEventListener('click', function(){	//making all of the squares clickable
// 				//this.innerHTML = '';
// 				playMe(this);	//calling the playMe function to make the X's and O's display
											
// 		});
// 	}
// }

// var clearMe=document.getElementById('button');
// 	clearMe.addEventListener('click', function(){

// 	clear();
// })
// //reset the game--connect this to reset button.Still a work in progress 

//  function clear (){
//  	var squares = document.getElementsByClassName('squareclicked');
//  	console.log(squares)
	
// 		for(var i=0; i<squares.length;i++){
// 		squares[i].innerHTML = '';			//this should somehow reset the className to nothing and clear the square.

// 	}
// }

//   function playMe (square){  
//   	if(!square.className.includes('clicked')){  //This says if the square does not have the class of clicked...Borrowed from TTT solution from what I remember reading. I know it might not be accuate but I wanted to cite it just in case.
//  	//  	if(square.innerHTML = " "){			//if there is nothing/square is not played
// 	 	square.innerHTML = currentPlayer;	  //then assign it the current player 
// 	 	if (currentPlayer === 'X'){		//if the current player played X
// 	 		currentPlayer = 'O';			//the other player is O
// 	 	} else  {
// 	 		currentPlayer = 'X';		//and vice versa
//  		}
// 	 	 }else{
// 		 	alert ("The square is taken")  //tried to combine the function to stop squares from already being clicked.
// 	 	}
// 	 	square.className += 'clicked' //this establishes a classname for all of the squares played to be classified as clicked.	
//   	};	//I also wanted to note that this is a hybrid of my previous TTT homework. I condensed the code to streamline everything.


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













