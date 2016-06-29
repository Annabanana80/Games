window.onload = function() {
	console.log('app.js');

	
	}

function start () {
	document.begin  = 'X';	//the first player always starts with X
	var squares = document.getElementsByClassName('square');	//grabbing the squares
		for(var i=0; i<squares.length; i++){					
			squares[i].addEventListener('click', function(){	//making all of the squares clickable
				//this.innerHTML = '';
				playMe(this);	//calling the playMe function to make the X's and O's display
											
		});
	}
}
start();

function playMe(square) {
	if (square.innerText == ""){
		square.innerText = document.begin;
		turn();
	}else{
		alert("That square is taken :)")
	}
}

function turn () {
	if (document.begin === "X"){
		document.begin = "O";
	}else{
		document.begin = "X";
	}
}

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


//display an X or O inside the board

//start of winner logic--A work in progress. :)
  	// function checkForWinners () {
  	// 	for(var i=0; i<winners.length; i++){
  	//		if()
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













