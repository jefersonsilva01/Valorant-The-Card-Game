function game() {

  setTimeout(() => {
    const soundId = Math.floor(Math.random() * (5 - 1) + 1)

    const sound = document.getElementById(`sound-0${soundId}`);
    sound.currentTime = 0;
    sound.play();
  }, 2000);


  const input = document.getElementById("input");
  const btnClose = document.getElementById("close");

  btnClose.onclick = function () {
    input.style.display = "none";
  }
}

game()