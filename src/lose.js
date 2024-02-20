function lose() {
  btnPlayAgain = document.getElementById("play-again");
  btnQuit = document.getElementById("quit");

  btnPlayAgain.onclick = function (e) {
    e.preventDefault();

    fetch('../pages/game.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html);

    const gameScript = document.createElement('script');
    gameScript.setAttribute('src', './src/game.js');
    app.appendChild(gameScript);
  }

  btnQuit.onclick = function (e) {
    e.preventDefault();

    const homeScript = document.createElement('script');
    homeScript.setAttribute('src', './src/home.js');

    fetch('../pages/home.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html);

    app.appendChild(homeScript);
  }

}

lose();