function home() {

  const btnPlayGame = document.getElementById("play-now");

  const btnRules = document.getElementById("rules");
  const btnAbout = document.getElementById("about");
  const btnLeaderboards = document.getElementById("leaderboards");
  const btnClose = document.getElementById("close");

  const gameScript = document.createElement('script');
  gameScript.setAttribute('src', './src/game.js');

  const sound = new Audio("./assets/audios/MIND THE DROP.mp3");

  const char1 = document.querySelector('.char-1');
  const char2 = document.querySelector('.char-2')

  const [charSelected1] = characters.splice(
    Math.floor(Math.random() * characters.length), 1
  );
  const [charSelected2] = characters.splice(
    Math.floor(Math.random() * characters.length), 1
  );

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const textRules = `GOAL
    <br><br>
    Win all the cards in the deck.
    <br><br>
    THE GAME
    <br><br>
    The game is based on comparing the values ​​of your card with those of the other player. For your card to win, the chosen characteristic must have a higher value than your opponent's card.
    When your card wins, you win your opponent's card and the next card in your pile appears for a new turn.
    <br><br>
    SCOREBOARD
    <br><br>
    The scoreboard shows the number of cards you and your opponents have. The score changes automatically with each round.
    In case of a tie, the cards are returned to the bottom of each player's pile and a new round begins.
    <br><br>
    HOW TO PLAY
    <br><br>
    1. To start, choose from the information on your card the one that you think has the value capable of beating your opponents' cards.
    <br><br>
    If you win - the other player's card will go to the back of your pile of cards and you continue choosing the information for your next card.
    If the other player wins - his card will go behind his pile of cards and the turn to choose passes to him.
    In case of a tie - the cards will go behind each player's pile and a new dispute is held, with the player who chose the cards that tied must choose again.
    <br><br>
    2. The game ends when one of the players wins all the cards in the deck
    <br><br>`

  const textAbout = `Amid the creative effervescence of the academic universe, a unique project emerges that seeks to unite the passion for software development with the electrifying atmosphere of a strategy game. Inspired by the classic Super Trunfo and immersed in the intriguing universe of Valorant, this initiative's fundamental purpose is to transcend the limits of the classroom, transforming learning into an engaging experience.
  <br><br>
  Each meticulously written line of code aims to create a faithful and exciting adaptation of the Valorant universe, transforming theoretical concepts into a practical and dynamic experience. The aim is not only to provide entertainment, but also to offer academics the opportunity to apply their knowledge in a playful way, developing strategic and cognitive skills in an innovative way.
  <br><br>
  Instead of simply replicating, the project seeks to enrich the experience of participants, providing a deep dive into the nuances of the game. Each card developed represents not only an element of Valorant, but also an opportunity for scholars to explore the intricacies of game programming. Authenticity is key, and every detail aims to create a unique symbiosis between technical learning and the virtual universe.
  <br><br>
  Ultimately, this academic project aims to go beyond the traditional boundaries of teaching, integrating theoretical knowledge with the engaging and exciting practice of electronic games. By combining the creativity of academics with the richness of the Valorant universe, the initiative aims not only to train competent professionals, but also to stimulate a new way of learning, where fun and education go hand in hand in an electrifying and academic challenge.
  <br><br>`

  function playMusic() {
    sound.volume = 1;
    sound.volume.loop = true;
    sound.play();
  }

  function createChars() {
    char1.setAttribute('src', `${charSelected1.avatar}`)
    char1.classList.add('loaded');

    char2.setAttribute('src', `${charSelected2.avatar}`)
    char2.classList.add('loaded');
  }

  btnRules.onclick = e => {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Rules";
    modalContent.innerHTML = textRules;
  }

  btnAbout.onclick = e => {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "About";
    modalContent.innerHTML = textAbout;
  }

  btnLeaderboards.onclick = e => {
    e.preventDefault();

    const listLeaderboards = document.createElement('div');

    leaders.forEach(element => {
      const divLeaderboards = document.createElement('div');
      divLeaderboards.setAttribute('id', 'leaderItem');

      const spanName = document.createElement("span");
      spanName.innerText = "//" + element.name;

      const spanTime = document.createElement("span");
      spanTime.innerText = element.time;

      divLeaderboards.appendChild(spanName);
      divLeaderboards.appendChild(spanTime);

      listLeaderboards.appendChild(divLeaderboards);
    });

    modalContent.innerHTML = '';
    modalContent.appendChild(listLeaderboards);
    modal.style.display = "block";
    modalTitle.innerText = "Leaderboards";
  }

  btnClose.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = e => {
    if (e.target.id === 'home') {
      modal.style.display = "none";
    }
  }

  btnPlayGame.onclick = e => {
    e.preventDefault();
    sound.pause();

    fetch('./pages/game.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html)

    setTimeout(() => app.appendChild(gameScript), 1000);
  }

  playMusic();
  createChars();
}
home();