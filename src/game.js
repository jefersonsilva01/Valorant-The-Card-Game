function game() {
  const input = document.getElementById("input");
  const btnClose = document.getElementById("close");

  btnClose.onclick = function () {
    input.style.display = "none";
  }
}

game()