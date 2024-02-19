function game() {

  let gameArea = document.getElementById("game-area")

  //Begin game logic
  const playGame = new CardGame(characters);
  playGame.shuffleCards();
  playGame.getCards();

  function createCards(arrayCards, player) {
    arrayCards.forEach(card => {
      let cardContainer = document.createElement('div');
      cardContainer.setAttribute('style', `background-image: url(${card.cover})`);
      cardContainer.setAttribute('class', `card-${player}`);
      cardContainer.setAttribute('id', `${card.id}`);

      let cardFront;

      cardFront = `
      <img class="info" src="../assets/images/info.svg">
      <div class="card-info">
        <span class="name">${card.name}</span>
        <img class="class" src='${card.class}'>
        <ul class="list-cards">
          <li class="skill">
            <span>ATTACK</span>
            <span>${card.skills.attack}</span>
          </li>
          <li class="skill">
            <span>DEFENSE</span>
            <span>${card.skills.defense}</span>
          </li>
          <li class="skill">
            <span>AGILITY</span>
            <span>${card.skills.agility}</span>
          </li>
          <li class="skill">
            <span>TECH</span>
            <span>${card.skills.tech}</span>
          </li>
        </ul>
      </div>
      `
      cardContainer.innerHTML = cardFront;
      gameArea.appendChild(cardContainer);
    });
  }

  createCards(playGame.PlayerCards, 'player');
  createCards(playGame.CPUCards, 'cpu');

  //End game logic

  let soundId, sound;

  function getSound() {
    soundId = Math.floor(Math.random() * (5 - 1) + 1)
    sound = document.getElementById(`sound-0${soundId}`);
    console.log(sound);
  }

  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }

  sound = document.getElementById('sound-01');

  sound.addEventListener('loadedmetadata', () => {
    getSound();
    playSound();
  });

  sound.addEventListener('timeupdate', () => {
    if (sound.currentTime >= 0.98 * sound.duration) {
      getSound();
      playSound();
    }
  });


  // const input = document.getElementById("input");
}

game()