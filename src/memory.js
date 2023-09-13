class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }

    for (let i=0; i < this.cards.length -1; i++) {
      let j = Math.floor(Math.random() * (this.cards.length -i) + i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    }
  

  checkIfPair(card1, card2) {
    // ... write your code here
    let match = card1 === card2;
    this.pairsClicked ++;
    if (match) this.pairsGuessed ++;
    this.pickedCards = [];
    return match;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    }
    else {
      return false
    }
  }
}
