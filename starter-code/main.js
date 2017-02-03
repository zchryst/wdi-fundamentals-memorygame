console.log("JS file is connected to HTML! Woo!")

var cards = ['king', 'king', 'queen', 'queen'];

var cardsInPlay = [];

var isMatch = function(x) {
	if (x[0] === x[1]) {
		alert("It's a match")
		return true;
	} else {
		alert('No Match')
		return false;
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='my_king.png' alt='ginger king' class='pictureCard'>"
	} else {
		this.innerHTML = "<img src='my_queen.png' alt='kalesi' class='pictureCard'>"
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		for (var i=0; i<cards.length; i++) {
			deck[i].innerHTML = null;
		}
	}
}


var createCards = function() {
	for (var i = 0; i < cards.length; i++) {
		var myBoard = document.getElementById('game-board');
		var newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards)
		myBoard.appendChild(newCard);
	}
}

createCards();

var deck = document.querySelectorAll('.card');

/*
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
	}
}
*/
