function main() {
  const head = document.getElementsByTagName('head')[0];
  const app = document.getElementById('app');

  const loaderStyle = document.createElement('link');
  const loaderScript = document.createElement('script')

  fetch('./pages/loader.html')
    .then(resp => resp.text())
    .then(html => app.innerHTML = html);


  loaderStyle.setAttribute('rel', 'stylesheet');
  loaderStyle.setAttribute('href', './styles/loader.css');

  loaderScript.setAttribute('src', './src/loader.js');

  head.appendChild(loaderStyle);
  app.appendChild(loaderScript);
}

main()