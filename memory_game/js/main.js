


let cardsInPlay = []
let score = 0
let moves = 0


// Create score button.
document.getElementById("score-tracker").innerHTML = `Score: ${score} / Flips: ${moves}`

// Make board -> flip -> check -> update score -> repeat
let resetBoard = function (){
  for (i = 0; i < cards.length; i++){
        cards[i].flipped = false
      }
  for (i = 0; i < cards.length; i++){
      let deleteList = document.getElementById("game-board")
      deleteList.removeChild(deleteList.childNodes[0])
  }
  createBoard()
  resetButton()
}

let resetButton = function (){
  let buttonHere = document.getElementById("reset")
  buttonHere.addEventListener("click", resetBoard)
  cardsInPlay = []
}

let updateScore = function (){
  score++
  document.getElementById("score-tracker").innerHTML = `Score: ${score} / Flips: ${moves}`
}

//when two cards are flipped, update score and call for reset.
let checkForMatch = function (){
	if (cardsInPlay.length === 2){
		if ((cardsInPlay[0].rank === cardsInPlay[1].rank) && (cardsInPlay[0].suit === cardsInPlay[1].suit)){
      updateScore()
      cardsInPlay[0].canFlip = false
      cardsInPlay[1].canFlip = false
      cardsInPlay = []
		}
	}
}

// when a card is selected, its art flips.
let flipCard = function (){
	let cardId = this.getAttribute('data-id')
  if(cards[cardId].canFlip === true){
    moves++
    document.getElementById("score-tracker").innerHTML = `Score: ${score} / Flips: ${moves}`
    console.log(cards[cardId])
    if (cards[cardId].flipped === false){
      cards[cardId].flipped = true
      cardsInPlay.push(cards[cardId])
      this.setAttribute("src", cards[cardId].cardImage) // retrieve image using data-id.
      checkForMatch()
    } else {
      cards[cardId].flipped = false
      let index = cardsInPlay.indexOf(cards[cardId])
      cardsInPlay.splice(index, 1)
      this.setAttribute("src", "images/back.bmp") // retrieve image using data-id.
    }
  }
}

// populate game-board with card backs.
let createBoard = function (){
	for (i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img")
    cardElement.setAttribute("id", `${cards[i]['suit']}${cards[i]['ranks']}`)
    cardElement.setAttribute("src", "images/back.bmp")
		cardElement.setAttribute("class", "card")
		cardElement.setAttribute("data-id", i)
		cardElement.addEventListener("click", flipCard)
		document.getElementById("game-board").appendChild(cardElement)
	}
}

createBoard()
resetButton()
