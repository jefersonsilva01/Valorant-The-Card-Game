function nav() {

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

  const sound = document.getElementById('sound');
  sound.currentTime = 0;
  sound.play();
}

nav()