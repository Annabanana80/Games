Tic Tac Toe!

I. User Stories
	A. The Game Should--Necessary:
		1. Be interactive and load upon the page loading
		2. Players Should be able to set their name
		3. Squares should show an "X" or an "O" depending on player
			a. Player can't play on a square that should already be played.
	B. The Game Should--Intermediate (Attempt if necessary steps are done):
		1. Have logic to determine a winner or tie
			a. Should report who won
		2. Have a reset button to play again
		3. Track the winners and losers.
	C. The Game Should--Advanced (Stretch goals):
		1. Have an option against an AI.
			a. Level 1: Randomly generated moves
			b. Level 2: Bragging rights--computer strategically plays! 

Technologies involved:

HTML: I will be using a table as this will keep my CSS code simpler. Tables are interactive and their dimensions are perfectly aligned with the board. I will also be adding a place to type your name, a reset button if I have accomplished all of the necessary requirements, and alerts congratulating the winner.

CSS: After completing the logic for the game, I will make the game fun and colorful. 

JavaScript: This will be primarily done in Vanlla JS. 

Steps to getting TTT Game done:

1. Create HTML page
	Create table with rows and td. It will be a 3 by 3 square. TD's should have a class of button.
2. Create CSS page and link this page to HTML page. Size Table and data, give each a border.
3. Add logic. Create window onload function, add click events to all squares using a for loop. Create an empty array for sqares, etc. To start, it should look a little like this:

window.onload = function() {
	console.log(app.js);

	var squares = document.getElementByClassName('square');
		for(var i=0; i<squares.length; i++){
			squares[i].addEventListener('click', a function that has the X's and O's and enables you to play);
	}
}

Any other logic, I will consult MDN, classmates, and other sources. Any direct sources used will be cited.

4. After logic is complete, I will give the page a more personal touch. I might have pictures display in the boxes once the game is done. I will definitely give the game a fun background and a fun font.

5. After that is done, if there is time, I might try to give my game an AI. 