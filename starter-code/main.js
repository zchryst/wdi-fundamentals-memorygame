console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen'
var cardTwo = 'queen'
var cardThree = 'king'
var cardFour = 'king'

/*if (cardThree === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry try again!")
}*/

var createCards = function() {
	for (var i = 1; i <= 4; i++) {
		var myBoard = document.getElementById('game-board');
		var newCard = document.createElement('div');
		newCard.className = 'card';
		myBoard.appendChild(newCard);
	}
}

createCards();
