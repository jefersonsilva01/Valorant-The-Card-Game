class CardGame {
  constructor(characters) {
    this.cards = characters;
    this.cardsShuffle = [];
    this.PlayerCards = [];
    this.CPUCards = [];
  }

  shuffleCards(array = this.cards) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.cardsShuffle = array;
  }

  getCards(array = this.cardsShuffle) {
    array.forEach(card => {
      if (array.indexOf(card) % 2 === 0) {
        this.PlayerCards.push(card);
      } else {
        this.CPUCards.push(card);
      }
    })
  }
}