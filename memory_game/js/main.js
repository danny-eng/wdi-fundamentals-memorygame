

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
},
];
var cardsInPlay = [];
var score = 0;

// Create score button.
document.getElementById("score-tracker").innerHTML = `Score: ${score}`;

// Make board -> flip -> check -> update score -> repeat
var resetBoard = function (){
  for (i = 0; i < cards.length; i++){
      var deleteList = document.getElementById("game-board");
      deleteList.removeChild(deleteList.childNodes[0]);
  }
  createBoard();
  resetButton();
  console.log("6");
};

var resetButton = function (){
  var buttonHere = document.getElementById("reset");
  buttonHere.addEventListener("click", resetBoard);
  cardsInPlay = [];
  console.log("5");
};

var updateScore = function (){
  score++;
  document.getElementById("score-tracker").innerHTML = `Score: ${score}`;
  console.log("Updating!");
  console.log("4");
};

//when two cards are flipped, update score and call for reset.
var checkForMatch = function (){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
      updateScore();
      console.log("3");
		}
	}
};

// when a card is selected, its art flips.
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();
  console.log("2");
};

// populate game-board with card backs.
var createBoard = function (){
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
    console.log("1");
	}
};

createBoard();
resetButton();
