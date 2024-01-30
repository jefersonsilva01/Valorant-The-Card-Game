function loader() {
  let loader = document.getElementById('loader');
  let percent = document.getElementById('percent');
  percent.innerText = '0%'

  let width = 10;

  const idInterval = setInterval(load, 500);

  function load() {

    if (width <= 100) {
      loader.style.width = `${width}%`;
      percent.innerText = `${width}%`;
      width += 5;
    } else {
      clearInterval(idInterval);

      fetch('./pages/home.html')
        .then(resp => resp.text())
        .then(html => app.innerHTML = html)
    }
  }
}

loader()