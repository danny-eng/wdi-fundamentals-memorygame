

let cards = []
let ranks = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"]
let suits = ["clubs", "diamonds", "hearts", "spades"]
let inc = 0

for (let i = 0; i < suits.length; i++){
  for (let j = 0; j < ranks.length; j++){
    cards.push({
      id: inc,
      rank: ranks[j],
      suit: suits[i],
      cardImage: `images/${suits[i].charAt(0)}${ranks[j]}.bmp`,
      flipped: false,
      canFlip: true
    })
    inc++
    cards.push({
      id: inc,
      rank: ranks[j],
      suit: suits[i],
      cardImage: `images/${suits[i].charAt(0)}${ranks[j]}.bmp`,
      flipped: false,
      canFlip: true
    })
    inc++
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(cards)
