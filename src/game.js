function game() {

  let gameArea = document.getElementById("game-area")

  //Begin game logic
  const playGame = new CardGame(characters);
  playGame.shuffleCards();
  playGame.getCards();

  function createPlayerCards() {
    playGame.PlayerCards.forEach(card => {
      let cardContainer = document.createElement('div');
      cardContainer.setAttribute('style', `background-image: url(${card.cover})`);
      cardContainer.setAttribute('class', 'card-player');
      cardContainer.setAttribute('id', `${card.id}`);

      let cardPlayer;

      cardPlayer = `
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
      cardContainer.innerHTML = cardPlayer;
      gameArea.appendChild(cardContainer);
    });
  }

  function createCPUCards() {
    playGame.CPUCards.forEach(card => {
      let cardContainer = document.createElement('div');
      cardContainer.setAttribute('style', `background-image: url(${card.cover})`);
      cardContainer.setAttribute('class', 'card-cpu');
      cardContainer.setAttribute('id', `${card.id}`);

      let cardPlayer;

      cardPlayer = `
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
      cardContainer.innerHTML = cardPlayer;
      gameArea.appendChild(cardContainer);
    });
  }

  createPlayerCards();
  createCPUCards();

  //End game logic


  // setTimeout(() => {
  //   const soundId = Math.floor(Math.random() * (5 - 1) + 1)

  //   const sound = document.getElementById(`sound-0${soundId}`);
  //   sound.currentTime = 0;
  //   sound.play();
  // }, 2000);


  const input = document.getElementById("input");
  const btnClose = document.getElementById("close");

  btnClose.onclick = function () {
    input.style.display = "none";
  }
}

game()