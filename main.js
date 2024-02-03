function main() {
  const head = document.getElementsByTagName('head')[0];
  const app = document.getElementById('app');

  const loaderStyle = document.createElement('link');
  loaderStyle.setAttribute('rel', 'stylesheet');
  loaderStyle.setAttribute('href', './styles/loader.css');

  const homeStyle = document.createElement('link');
  homeStyle.setAttribute('rel', 'stylesheet');
  homeStyle.setAttribute('href', './styles/home.css');

  const loaderScript = document.createElement('script');
  loaderScript.setAttribute('src', './src/loader.js');

  fetch('./pages/loader.html')
    .then(resp => resp.text())
    .then(html => app.innerHTML = html);

  head.appendChild(loaderStyle);
  head.appendChild(homeStyle);

  app.appendChild(loaderScript);
}

main()