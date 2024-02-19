function game() {
  const gameArea = document.getElementById("game-area");
  const playerTurn = document.getElementById('player-turn');
  const cpuTurn = document.getElementById('cpu-turn');
  let cpuTurnStats = 0;
  const cardsPlayer = document.getElementById('cards-player');
  const cardsCPU = document.getElementById('cards-cpu');
  const playerScore = document.getElementById('score-player');
  const cpuScore = document.getElementById('score-cpu');
  const btnPlay = document.getElementById('play');

  //Begin game logic
  const playGame = new CardGame(characters);
  playGame.shuffleCards();
  playGame.getCards();

  function createCards(arrayCards, player) {
    const card = arrayCards[0]
    const cardContainer = document.createElement('div');
    cardContainer.classList.add(`card-flip-${player}-fliped`, `card-flip-${player}`);

    const cardInner = document.createElement('div');
    cardInner.setAttribute('class', 'card-inner');

    if (player === 'player') {
      cardContainer.onclick = () => {
        cardContainer.classList.remove('card-flip-player-fliped');
      }
    }

    let cardFront, cardBack;

    cardFront = `
      <div id="${card.id}" class="card-${player}" style="background-image: url(${card.cover});">      
        <img class="info" src="../assets/images/info.svg">
        <div class="card-info">
          <span class="name">${card.name}</span>
          <img class="class" src='${card.class}'>
          <ul class="list-cards">
            <li class="skill-${player}">
              <span>ATTACK</span>
              <span>${card.skills.attack}</span>
            </li>
            <li class="skill-${player}">
              <span>DEFENSE</span>
              <span>${card.skills.defense}</span>
            </li>
            <li class="skill-${player}">
              <span>AGILITY</span>
              <span>${card.skills.agility}</span>
            </li>
            <li class="skill-${player}">
              <span>TECH</span>
              <span>${card.skills.tech}</span>
            </li>
          </ul>
        </div>
      </div>
      `

    cardBack = `
      <div 
        class="card-back" 
        style="
          background-image: url('../assets/images/card unflip.png');
          background-size: cover;
          background-position: center;
        ">
      </div>
      `
    cardInner.innerHTML += cardBack;
    cardInner.innerHTML += cardFront;

    cardContainer.appendChild(cardInner);
    gameArea.appendChild(cardContainer);
  }

  playerTurn.style.backgroundColor = '#ff4655';
  playerTurn.style.color = '#1b1d20';

  function setSkillsPlayer() {
    document.querySelectorAll('.skill-player').forEach(skill => {
      skill.onclick = () => {
        playerScore.innerText = skill.children[1].innerText;
        playGame.skillsPlayer.name = skill.children[0].innerText;
        playGame.skillsPlayer.skill = parseInt(skill.children[1].innerText);
      }
    });
  }

  function setSkillsCPU() {
    document.querySelectorAll('.skill-cpu').forEach(skill => {
      if (skill.children[0].innerText === playGame.skillsPlayer.name) {
        playGame.skillsCPU.name = skill.children[0].innerText;
        playGame.skillsCPU.skill = parseInt(skill.children[1].innerText);
      };
    });
  }

  function updateScreen() {
    cpuScore.innerText = '0';
    playerScore.innerText = '0';
    cardsPlayer.innerText = playGame.PlayerCards.length;
    cardsCPU.innerText = playGame.CPUCards.length;
  }

  function playCards() {
    if (parseInt(playerScore.innerText) > 0) {
      setSkillsCPU();
      const result = playGame.compareSkills();

      if (result === 'playerWin') {
        document.querySelector('.card-flip-cpu-fliped').classList.remove('card-flip-cpu-fliped');
        cpuScore.innerText = playGame.skillsCPU.skill;
        setTimeout(() => {
          updateScreen();
          document.querySelector('.card-flip-cpu').remove();
          createCards(playGame.CPUCards, 'cpu');
        }, 3000);
      } else if (result === 'cpuWin') {
        setTimeout(() => {
          updateScreen();
          document.querySelector('.card-flip-player').remove();
          createCards(playGame.PlayerCards, 'player');
          setSkillsPlayer();
        }, 1000)
      } else {
        updateScreen();
        document.querySelector('.card-flip-cpu').remove();
        document.querySelector('.card-flip-player').remove();
        createCards(playGame.CPUCards, 'cpu');
        createCards(playGame.PlayerCards, 'player');
        setSkillsPlayer();
      }
    }
  }

  btnPlay.onclick = (e) => {
    e.preventDefault();

    playCards();
  }

  function startGame() {
    updateScreen();
    createCards(playGame.PlayerCards, 'player');
    createCards(playGame.CPUCards, 'cpu');
    setSkillsPlayer();
  }

  startGame();
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