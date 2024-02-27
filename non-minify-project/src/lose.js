function lose() {
  const gameScript = document.createElement('script');
  gameScript.setAttribute('src', './src/game.js');

  const homeScript = document.createElement('script');
  homeScript.setAttribute('src', './src/home.js');

  btnPlayAgain = document.getElementById("play-again");
  btnQuit = document.getElementById("quit");

  btnPlayAgain.onclick = function (e) {
    e.preventDefault();

    fetch('./pages/game.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html);

    setTimeout(() => app.appendChild(gameScript), 1000)
  }

  btnQuit.onclick = function (e) {
    e.preventDefault();

    fetch('./pages/home.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html);


    setTimeout(() => app.appendChild(homeScript), 1000)

  }
}

lose();