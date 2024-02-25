function loader() {

  const homeScript = document.createElement('script');
  homeScript.setAttribute('src', './src/home.js');

  let loader = document.getElementById('loader');
  let percent = document.getElementById('percent');
  percent.innerText = '0%'

  let width = 0;

  const idInterval = setInterval(load, 40);

  function load() {
    if (width <= 100) {
      loader.style.width = `${width}%`;
      percent.innerText = `${width}%`;
      width += 1;
    } else {
      clearInterval(idInterval);

      fetch('./pages/home.html')
        .then(resp => resp.text())
        .then(html => app.innerHTML = html);

      setTimeout(() => {
        app.appendChild(homeScript)
      }, 1500);
    }
  }
}

loader()