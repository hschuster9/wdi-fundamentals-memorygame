console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
	alert("You found a match!");
}

else if (cardThree === cardFour){
	alert("You found a match!");
}
else {
	alert("Sorry, try again");
} 
*/

var board = document.getElementById('game-board');

var createCards = function() {
for (var i = 0; i <4; i++){
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
}
}
createCards();










