function game() {
  const gameArea = document.getElementById("game-area");
  const timer = document.getElementById('timer');

  const input = document.getElementById("input");
  const btnConfirm = document.getElementById("confirm");

  const modalCard = document.getElementById('modal-card');
  const modalCardTitle = document.getElementById('modal-card-title');
  const modalCardArea = document.getElementById('modal-card-area');

  const cardsPlayer = document.getElementById('cards-player');
  const playerScore = document.getElementById('score-player');
  const playerTurn = document.getElementById('player-turn');

  const cardsCPU = document.getElementById('cards-cpu');
  const cpuScore = document.getElementById('score-cpu');
  const cpuTurn = document.getElementById('cpu-turn');

  const btnPlay = document.getElementById('play');

  let turnStats = 0;

  let intervaleIdMilleseconds, intervaleIdSeconds;

  //Begin game logic
  const playGame = new CardGame(characters);
  playGame.shuffleCards();
  playGame.getCards();

  function chronometer() {
    let seconds = 0, milleSeconds = 0;

    intervaleIdSeconds = setInterval(() => seconds++, 1000);
    intervaleIdMilleseconds = setInterval(() => {
      milleSeconds++;
      let secondsText = seconds % 60 < 10 ? '0' + seconds % 60 : seconds % 60
      let minutesText = Math.floor(seconds / 60) < 10
        ? '0' + Math.floor(seconds / 60)
        : seconds % 60;

      timer.innerText = `${minutesText}:${secondsText}.0${milleSeconds % 10}`;
    }, 100);
  }

  function setStyle() {
    if (turnStats === 0) {
      playerTurn.classList.add('turn');
      cpuTurn.classList.remove('turn');
    } else if (turnStats === 1) {
      playerTurn.classList.remove('turn');
      cpuTurn.classList.add('turn');
    }
  }

  function createCards(arrayCards, player) {
    const card = arrayCards[0]
    const cardContainer = document.createElement('div');
    cardContainer.classList.add(`card-flip-${player}-fliped`, `card-flip-${player}`);

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    if (player === 'player') cardContainer.onclick = () =>
      cardContainer.classList.remove('card-flip-player-fliped');

    let cardFront, cardBack;

    cardFront = `
      <div id="${card.id}" class="card-${player}" style="background-image: url(${card.cover});">      
        <img class="info-${player}" src="../assets/images/info.svg">
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

  function setSkills(player) {
    if (player === 'player') {
      document.querySelectorAll(`.skill-${player}`).forEach(skill => {
        skill.onclick = () => {
          playerScore.innerText = skill.children[1].innerText;
          playGame.skillsPlayer.name = skill.children[0].innerText;
          playGame.skillsPlayer.skill = parseInt(skill.children[1].innerText);
        }
      });
    } else if (player === 'cpu') {
      document.querySelectorAll(`.skill-${player}`).forEach(skill => {
        if (skill.children[0].innerText === playGame.skillsPlayer.name) {
          playGame.skillsCPU.name = skill.children[0].innerText;
          playGame.skillsCPU.skill = parseInt(skill.children[1].innerText);
        };
      });
    }
  }

  function updateScreen() {
    cpuScore.innerText = '00';
    playerScore.innerText = '00';
    cardsPlayer.innerText = playGame.PlayerCards.length;
    cardsCPU.innerText = playGame.CPUCards.length;
  }

  function playerWin() {
    let cardCPU = document.querySelector('.card-flip-cpu');

    if (cardCPU.classList.contains('card-flip-cpu-fliped')) {
      cardCPU.classList.remove('card-flip-cpu-fliped');
    }

    cpuScore.innerText = playGame.skillsCPU.skill;
    playerScore.innerText = playGame.skillsPlayer.skill;

    setTimeout(() => {
      cardCPU.classList.add('remove-cpu-left');
      createCards(playGame.CPUCards, 'cpu');
    }, 2000);
    turnStats = 1;
    setTimeout(() => {
      cardCPU.remove();
      modalCards();
      setStyle();
      updateScreen();
      cpuPlayCard();
    }, 3000);
  }

  function cpuWin() {
    let cardPlayer = document.querySelector('.card-flip-player');

    if (cardPlayer.classList.contains('card-flip-player-fliped')) {
      cardPlayer.classList.remove('card-flip-player-fliped');
    }

    cpuScore.innerText = playGame.skillsCPU.skill;
    playerScore.innerText = playGame.skillsPlayer.skill;

    setTimeout(() => {
      cardPlayer.classList.add('remove-player-right');
      createCards(playGame.PlayerCards, 'player');
    }, 2000);
    turnStats = 0;
    setTimeout(() => {
      setStyle();
      updateScreen();
      cardPlayer.remove();
      modalCards();
      setSkills('player');
    }, 3000)
  }

  function loseScreen() {
    const loseScript = document.createElement('script');
    loseScript.setAttribute('src', './src/lose.js');

    fetch('../pages/lose.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html)
      .then(app.appendChild(loseScript));
  }

  function endGame() {
    const result = playGame.gameEnded();
    if (result === 'player lose') {
      loseScreen();
    } else if (result === 'cpu lose') {
      input.style.display = 'block';
      clearInterval(intervaleIdMilleseconds);
      clearInterval(intervaleIdSeconds);
    }
  }

  function playerPlayCards() {
    if (parseInt(playerScore.innerText) > 0) {
      setSkills('cpu');

      const result = playGame.compareSkills();

      if (result === 'playerWin') {
        playerWin();
      } else if (result === 'cpuWin') {
        cpuWin();
      } else {
        let cardCPU = document.querySelector('.card-flip-cpu');
        let cardPlayer = document.querySelector('.card-flip-player');

        cardCPU.classList.remove('card-flip-cpu-fliped');

        cpuScore.innerText = playGame.skillsCPU.skill;
        playerScore.innerText = playGame.skillsPlayer.skill;

        setTimeout(() => {
          cardCPU.classList.add('remove-cpu-right');
          cardPlayer.classList.add('remove-player-left');
          createCards(playGame.CPUCards, 'cpu');
          createCards(playGame.PlayerCards, 'player');
        }, 2000);

        turnStats = 1;

        setTimeout(() => {
          updateScreen();
          cardCPU.remove();
          cardPlayer.remove();
          modalCards();
          setStyle();
          cpuPlayCard();
        }, 3000)
      }

      endGame();
    }
  }

  function cpuPlayCard() {
    const cardCPUId = parseInt(document.querySelector('.card-cpu').id);
    const cardPlayerId = parseInt(document.querySelector('.card-player').id);
    let maxSkill = 0, nameSkill

    playGame.CPUCards.forEach(card => {
      if (card.id === cardCPUId) {
        for (skillItem in card.skills) {
          if (card.skills[skillItem] > maxSkill && card.skills[skillItem] <= 7) {
            maxSkill = card.skills[skillItem]
            nameSkill = skillItem;
          }
        }
      }
    });

    playGame.skillsPlayer.name = nameSkill;
    playGame.skillsCPU.name = nameSkill;
    playGame.skillsCPU.skill = maxSkill;

    playGame.PlayerCards.forEach(card => {
      if (card.id === cardPlayerId) {
        playGame.skillsPlayer.skill = card.skills[nameSkill];
      }
    });

    const result = playGame.compareSkills();

    if (result === 'playerWin') {
      playerWin();
    } else if (result === 'cpuWin') {
      cpuWin();
    } else {
      let cardCPU = document.querySelector('.card-flip-cpu');
      let cardPlayer = document.querySelector('.card-flip-player');

      if (cardPlayer.classList.contains('card-flip-player-fliped')) {
        cardPlayer.classList.remove('card-flip-player-fliped');
      }

      cardCPU.classList.remove('card-flip-cpu-fliped');

      cpuScore.innerText = playGame.skillsCPU.skill;
      playerScore.innerText = playGame.skillsPlayer.skill;

      setTimeout(() => {
        cardCPU.classList.add('remove-cpu-right');
        cardPlayer.classList.add('remove-player-left');
        createCards(playGame.CPUCards, 'cpu');
        createCards(playGame.PlayerCards, 'player');
      }, 2000);

      turnStats = 0;
      setTimeout(() => {
        updateScreen();
        cardCPU.remove();
        cardPlayer.remove();
        setSkills('player');
        modalCards();
        setStyle();
      }, 3000)
    }
    endGame();
  }

  function modalCards() {
    const infoCardPlayer = document.querySelector('.info-player');
    const infoCardCPU = document.querySelector('.info-cpu');

    const cardPlayerId = parseInt(document.querySelector('.card-player').id);
    const cardCPUId = parseInt(document.querySelector('.card-cpu').id);

    const divText = document.createElement('div')
    divText.setAttribute('id', 'modal-card-content');

    function createModalCard(cardId) {
      characters.forEach(card => {
        if (card.id === cardId) {
          divText.innerText = card.bio
          modalCardArea.appendChild(divText);
          modalCardTitle.innerText = card.name;
          modalCard.style.display = 'block';
        }
      })
    }

    function hiddenModalCard() {
      modalCard.style.display = 'none';
      modalCardArea.removeChild(modalCardArea.lastElementChild);
    }

    infoCardPlayer.onmouseover = () => createModalCard(cardPlayerId);
    infoCardCPU.onmouseover = () => createModalCard(cardCPUId);

    infoCardPlayer.onmouseleave = () => hiddenModalCard()
    infoCardCPU.onmouseleave = () => hiddenModalCard()

  }

  btnPlay.onclick = (e) => {
    e.preventDefault();

    playerPlayCards();
  }

  btnConfirm.onclick = function (e) {
    e.preventDefault();

    const inputValue = document.getElementsByTagName('input')[0];
    const timeLeader = timer.innerText;

    const playerLeaderBoard = {
      name: inputValue.value,
      time: timeLeader
    }

    if (inputValue.value.length >= 3) {
      leaders.unshift(playerLeaderBoard);

      input.style.display = 'none';

      const homeScript = document.createElement('script');
      homeScript.setAttribute('src', './src/home.js');

      fetch('../pages/home.html')
        .then(resp => resp.text())
        .then(html => app.innerHTML = html)
        .then(app.appendChild(homeScript));
    }

  }

  function startGame() {
    createCards(playGame.PlayerCards, 'player');
    createCards(playGame.CPUCards, 'cpu');
    chronometer();
    setStyle();
    updateScreen();
    modalCards();
    setSkills('player');
  }

  startGame();
  //End game logic

  let soundId, sound;

  function getSound() {
    soundId = Math.floor(Math.random() * (5 - 1) + 1)
    sound = document.getElementById(`sound-0${soundId}`);
  }

  function playSound() {
    sound.currentTime = 0;
    sound.play();
  }

  sound = document.getElementById('sound-01');

  sound.addEventListener('loadedmetadata', () => {
    getSound();
    setTimeout(playSound, 3000);
  });

  sound.addEventListener('timeupdate', () => {
    if (sound.currentTime >= 0.97 * sound.duration) {
      getSound();
      playSound();
    }
  });
}

game();