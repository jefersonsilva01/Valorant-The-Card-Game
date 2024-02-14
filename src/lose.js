function lose() {
  btnPlayAgain = document.getElementById("play-again");
  btnQuit = document.getElementById("quit");

  btnPlayAgain.onclick = function (e) {
    e.preventDefault();

    fetch('./pages/game.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html);
  }

  btnQuit.onclick = function (e) {
    e.preventDefault();

    fetch('./pages/home.html')
      .then(resp => resp.text())
      .then(html => app.innerHTML = html);
  }
}

lose()