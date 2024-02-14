function home() {

  const chars1 = [22, 72, 52, 29];
  const chars2 = [25, 33, 49, 60];

  const charSelected1 = chars1[Math.floor(Math.random() * chars1.length)];
  const charSelected2 = chars2[Math.floor(Math.random() * chars2.length)];

  setTimeout(() => {
    const char1 = document.querySelector('.char-1');
    char1.setAttribute('src', `../assets/images/image ${charSelected1}.png`)
    char1.classList.add('loaded');

    const char2 = document.querySelector('.char-2')
    char2.setAttribute('src', `../assets/images/image ${charSelected2}.png`)
    char2.classList.add('loaded');
  }, 1000);

  const modal = document.getElementById("modal");
  const btnRules = document.getElementById("rules");
  const btnAbout = document.getElementById("about");
  const btnLeaderboards = document.getElementById("leaderboards");
  const btnClose = document.getElementById("close");

  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const textRules = `OBJETIVO
    <br><br>
    Ganhar todas as cartas do baralho.
    <br><br>
    O JOGO
    <br><br>
    O jogo baseia-se na comparação dos valores de sua carta com a dos outro jogador. Para sua carta vencer, a característica escolhida precisa ter valor maior do que a carta dos seu adversário.
    Quando sua carta vence, você ganha a carta do seu adversário e a próxima carta de sua pilha aparece para uma nova jogada.
    <br><br>
    PLACAR
    O placar mostra o número de cartas que você e seus adversários possuem. O placar vai se alterando automaticamente a cada rodada.
    Em caso de empate as cartas voltam para pra o fim da pilha de cada jogador e uma nova rodada inicia.
    <br><br>
    COMO JOGAR
    <br><br>
    1. Para iniciar, escolha entre as informações da sua carta, aquela que você julga ter o valor capaz de vencer as cartas dos seus adversários.
    <br><br>
    Se você vencer - a carta do outro jogador irá para trás do seu monte de cartas e você continua escolhendo a informação da sua próxima carta.
    Se o outro jogador vencer - sua carta irá para trás do monte de cartas dele e a vez de escolher passa para ele.
    Em caso de empate - as cartas irão para trás do monte de cada jogador e uma nova disputa é feita, sendo que o jogador que escolheu as cartas que empataram deve escolher novamente. 
    <br><br>
    2. FIM DO JOGO
    O jogo termina quando um dos jogadores ganhar todas as cartas do baralho
    <br><br>`

  const textAbout = `Em meio à efervescência criativa do universo acadêmico, emerge um projeto singular que busca unir a paixão pelo desenvolvimento de software à atmosfera eletrizante de um jogo de estratégia. Inspirado no clássico Super Trunfo e imerso no intrigante universo de Valorant, esta iniciativa tem como propósito fundamental transcender os limites da sala de aula, transformando a aprendizagem em uma experiência envolvente.
  <br><br>
  Cada linha de código meticulosamente escrita tem o objetivo de criar uma adaptação fiel e emocionante do universo de Valorant, transformando conceitos teóricos em uma vivência prática e dinâmica. O intuito não é apenas fornecer entretenimento, mas também oferecer aos acadêmicos a oportunidade de aplicar seus conhecimentos de maneira lúdica, desenvolvendo habilidades estratégicas e cognitivas de forma inovadora.
  <br><br>
  Ao invés de simplesmente replicar, o projeto busca enriquecer a experiência dos participantes, proporcionando um mergulho profundo nas nuances do jogo. Cada carta desenvolvida representa não apenas um elemento de Valorant, mas também uma oportunidade para os acadêmicos explorarem as complexidades da programação de jogos. A autenticidade é a chave, e cada detalhe visa criar uma simbiose única entre o aprendizado técnico e o universo virtual.
  <br><br>
  Em última análise, este projeto acadêmico almeja ir além das fronteiras tradicionais do ensino, integrando conhecimento teórico com a prática envolvente e empolgante dos jogos eletrônicos. Ao unir a criatividade dos acadêmicos à riqueza do universo de Valorant, a iniciativa visa não apenas formar profissionais competentes, mas também estimular uma nova forma de aprendizado, onde a diversão e a educação caminham lado a lado em um desafio eletrizante e acadêmico.
  <br><br>`

  btnRules.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "Rules";
    modalContent.innerHTML = textRules;
  }

  btnAbout.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
    modalTitle.innerText = "About";
    modalContent.innerHTML = textAbout;
  }

  // btnLeaderboards.onclick = function (e) {
  //   e.preventDefault();
  //   modal.style.display = "block";

  //   modalTitle.innerText = "Leaderboards";
  // }

  btnClose.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target.id === 'home') {
      modal.style.display = "none";
    }
  }

  // const sound = document.getElementById('sound');
  // sound.currentTime = 0;
  // sound.play();

  btnPlayGame = document.getElementById("play-now");

  const gameScript = document.createElement('script');
  gameScript.setAttribute('src', './src/game.js');

  btnPlayGame.onclick = function (e) {
    e.preventDefault();

    fetch('../pages/game.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html)

    app.appendChild(gameScript);

  }
}

home()