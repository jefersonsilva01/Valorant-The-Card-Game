function loader() {
  let loader = document.getElementById('loader');
  let percent = document.getElementById('percent');
  percent.innerText = '0%'

  let width = 95;

  const idInterval = setInterval(load, 300);

  function load() {
    if (width <= 100) {
      loader.style.width = `${width}%`;
      percent.innerText = `${width}%`;
      width += 5;
    } else {
      clearInterval(idInterval);

      const dataLeaderboards = document.createElement('script');
      dataLeaderboards.setAttribute('src', '../src/data/leaderboards.js');

      const homeScript = document.createElement('script');
      homeScript.setAttribute('src', './src/home.js');

      fetch('./pages/home.html')
        .then(resp => resp.text())
        .then(html => app.innerHTML = html)

      app.appendChild(dataLeaderboards);
      app.appendChild(homeScript);
    }
  }
}

loader()