

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
  flipped: false,
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
  flipped: false,
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
  flipped: false,
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
  flipped: false,
},
];
var cardsInPlay = [];
var score = 0;

// Create score button.
document.getElementById("score-tracker").innerHTML = `Score: ${score}`;

// Make board -> flip -> check -> update score -> repeat
var resetBoard = function (){
  for (i = 0; i < cards.length; i++){
        cards[i].flipped = false;
      };
  for (i = 0; i < cards.length; i++){
      var deleteList = document.getElementById("game-board");
      deleteList.removeChild(deleteList.childNodes[0]);
  };
  createBoard();
  resetButton();
};

var resetButton = function (){
  var buttonHere = document.getElementById("reset");
  buttonHere.addEventListener("click", resetBoard);
  cardsInPlay = [];
};

var updateScore = function (){
  score++;
  document.getElementById("score-tracker").innerHTML = `Score: ${score}`;
};

//when two cards are flipped, update score and call for reset.
var checkForMatch = function (){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
      updateScore();
		};
	};
};

// when a card is selected, its art flips.
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
  if (cards[cardId].flipped == false){
    cards[cardId].flipped = true;
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("src", cards[cardId].cardImage); // retrieve image using data-id.
    checkForMatch();
  } else {
    return;
  };
};

// populate game-board with card backs.
var createBoard = function (){
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();
resetButton();
