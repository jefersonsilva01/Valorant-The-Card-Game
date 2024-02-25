class CardGame {
  constructor(characters) {
    this.cards = characters;
    this.cardsShuffle = [];
    this.PlayerCards = [];
    this.CPUCards = [];
    this.skillsPlayer = { name: '', skill: 0 };
    this.skillsCPU = { name: '', skill: 0 };
  }

  shuffleCards(array = this.cards) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.cardsShuffle = array;
  }

  getCards(array = this.cardsShuffle) {
    array.forEach(card =>
      array.indexOf(card) % 2 === 0
        ? this.PlayerCards.push(card)
        : this.CPUCards.push(card)
    );
  }

  discard(arrayWin, arrayLose) {
    arrayWin.push(arrayLose.shift());
  }

  compareSkills() {
    if (this.skillsPlayer.skill > this.skillsCPU.skill) {
      this.discard(this.PlayerCards, this.CPUCards);
      return 'playerWin';
    } else if (this.skillsPlayer.skill < this.skillsCPU.skill) {
      this.discard(this.CPUCards, this.PlayerCards);
      return 'cpuWin';
    } else {
      this.PlayerCards.push(this.PlayerCards.shift())
      this.CPUCards.push(this.CPUCards.shift())
    }
  }

  gameEnded() {
    if (this.PlayerCards.length === 0) {
      return 'player lose';
    } else if (this.CPUCards.length === 0) {
      return 'cpu lose';
    }
  }
}