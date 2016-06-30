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
				position(); //this checks the position and hopefully envokes everything.							
		});
	}
}
start();

function playMe(square) { ////This is borrowed from what I rememeber doing for my howework from week 2 day 5. It prevents a square from being clicked twice!
	if (square.innerText == ""){
		square.innerText = document.begin;
		turn();
		lightUp();
	}else{
		alert("That square is taken :)")
		
	}
}
//display an X or O inside the board


function turn () { //this is also borrowed from what I remember doing my homework from week 2 day 5.
	if (checkForWinner(document.begin)){
	alert("Congratulations " + document.begin + " you won!"); //this checks for the winner then annouces the winner. Link for source is cited below.
	}else if (document.begin === "X"){	      	//This ensures that X and O alternate.
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

function lightUp (){ //This is MY creation! I am very proud of it.
	
	//var illuminate = document.querySelector('div');
	if(document.begin ==="O"){				//This will turn playerOne's or X's name chartreuse
		var playerOne = document.getElementById('playerOne');
		playerOne.style.color = 'chartreuse';
		var playerTwo = document.getElementById('playerTwo'); //While player two is black still
		playerTwo.style.color = 'black';
	}else if(document.begin ==="X"){
		var playerTwo = document.getElementById('playerTwo'); //Switch! :)
		playerTwo.style.color = "chartreuse";
		var playerOne = document.getElementById('playerOne');
		playerOne.style.color = 'black'
	}
}
//Why this solution? It is written simply, and in an easy to understand format. In addition, I was able to get this solution
//to work best with the code I already had. In the Spooky Code graveyard, you will see my attempts.
 function checkForWinner(move){  //Source for this code: https://www.youtube.com/watch?v=T6zFEiXaH-Q
 	var result = false;  //no win unless these combinations are met.
	if(positions(1,2,3, move)||  //these are the winning combinations derived from the get Square function which is in turn passed into the positions function.
	  positions(4,5,6, move)||
 	  positions(7,8,9, move)||
 	  positions(1,4,7, move)||
	  positions(2,5,8, move)||
 	  positions(3,6,9, move)||
	  positions(1,5,9, move)||
	  positions(3,5,7, move)) {

 		result = true;
 	}
 	return result;
 }


 function positions(a, b, c, move){   //Source for this code: https://www.youtube.com/watch?v=T6zFEiXaH-Q
 	var win = false;
	if (getSquare(a)===move && getSquare(b)===move && getSquare(c) ===move){ //this sets the position to determine the win
 		win = true;
 	}
	return win;
 }

 function getSquare(number){   //Source for this code: https://www.youtube.com/watch?v=T6zFEiXaH-Q
	return document.getElementById("square" + number).innerHTML; //this grabs each square and gives them a number.
}



//Spooky Code and random thoughts Graveyard

// function checkForWinners (){
 //   	var square=document.getElementsByClassName('square');    //Borrowed from what I remember from reading the solution. This might be similar and I wanted to cite it just in case. 			
 // 	 if(winPosition(square.innerHTML==="X")) {
 //   		 for(var i=0; i<square.length; i++){
 //   			square[i].innerHTML="X wins!"
 //  			}
 //  		}else if(winPosition(square.innerHTML==="O")){
 //   		for(var j=0; j<square.length;j++){
 //  			square[j].innerHTML="O wins!"
 //  			}
 //  		}
 //    }

// function winPosition (){
//   	var win = false;
// 	var allSquares = document.getElementsByClassName('square');
//   for(var i=0; i<allSquares.length; i++){
//    	if ( ((allSquares[0].innerHTML === allSquares[1].innerHTML) && (allSquares[0].innerHTML === allSquares[2].innerHTML)) ||    //winning combinations  
//    		((allSquares[3].innerHTML === allSquares[4].innerHTML) && (allSquares[3].innerHTML===allSquares[5].innerHTML))||
//    		((allSquares[6].innerHTML === allSquares[7].innerHTML) && (allSquares[6].innerHTML===allSquares[8].innerHTML))||
//    		((allSquares[0].innerHTML === allSquares[3].innerHTML) && (allSquares[0].innerHTML===allSquares[6].innerHTML))||
//    		((allSquares[1].innerHTML === allSquares[4].innerHTML) && (allSquares[1].innerHTML===allSquares[7].innerHTML))||
//    		((allSquares[2].innerHTML === allSquares[5].innerHTML) && (allSquares[2].innerHTML===allSquares[8].innerHTML))||
//    		((allSquares[0].innerHTML === allSquares[4].innerHTML) && (allSquares[0].innerHTML===allSquares[8].innerHTML))||
//    		((allSquares[2].innerHTML === allSquares[4].innerHTML) && (allSquares[2].innerHTML===allSquares[6].innerHTML))
//   	){
//    		win = true;
//    }
// }	return win;
// }
// function checkForWinners () {
//   for(var i=0; i<winners.length; i++){ //iterates over winner array
//   	for (var j=0; j<winners[i]; j++) {  //iterates over arrays within the array
//   	if (winners[i]===[j]){
//   				return true;
//   			}else{
//  				return false;
//  		}
//   	}
// }  	

		//position(); //this checks the position and hopefully envokes everything.
//reset button

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


//var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// var playerX=[];
// var playerO=[];

//What do I want this to do?
	//iterate over the winners array
	//iterate over the winners
	//link the winning combinations with X or O
	//have each square display "X wins" or "O wins" depending on who won. 



//start of winner logic--A work in progress. :)
  	
// function checkForWinners () {
//   for(var i=0; i<winners.length; i++){ //iterates over winner array
//   	for (var j=0; j<winners[i]; j++) {  //iterates over arrays within the array
//   	if (winners[i]===[j]){
//   				return true;
//   			}else{
//  				return false;
//  		}
//   	}
// }
//Plan B: Make a big if statement with the winning combos:
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


 // function turn (){				//this switches turns. Used from what I remember from previous homework.
	//  if (document.start === "X"){
	//  	document.start ="O";
 // 	}else{
 // 		document.start="X";
	// }
 // }

//make sure nothing happens if already clicked













