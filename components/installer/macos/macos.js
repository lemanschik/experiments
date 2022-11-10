if (window.location.href.indexOf('macos.html') > -1) {
  document.body.innerHTML = `Router works`;
} else {
  window.location.href = new URL('./macos.html', window.location).href
}
  

console.log('Instantiated macos installer...')

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('./worker.js').then((registration) => {
    console.log('macos worker registration succeeded:', registration);
    document.querySelector('github-only').remove()
  }, /*catch*/ (error) => {
    console.error(`Service worker registration failed: ${error}`);
  });
} else {
  console.error('This browser is not supported.');
}
