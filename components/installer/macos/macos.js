if (window.location.href.indexOf('macos.html') > -1) {
  document.body.innerHTML = `
  <h1>Install @stealify/host/macos</h1>
  <p> Implements launch and watch for the macos operating system </p>
  <h2>Install @stealify/manager/macos</h2>
  <p> Component Scheduling Task Manager Integration Automator </p>`;
  console.log('Instantiated macos installer...')

  if ('serviceWorker' in navigator) {
    // Register a service worker hosted at the root of the
    // site using the default scope.
    navigator.serviceWorker.register('./worker.js').then((registration) => {
      console.log('macos worker registration succeeded:', registration);
      async function saveFile() {

        // create a new handle
        const newHandle = await window.showSaveFilePicker();

        // create a FileSystemWritableFileStream to write to
        const writableStream = await newHandle.createWritable();

        // write our file
        await writableStream.write("hi\0");

        // close the file and write the contents to disk.
        await writableStream.close();
      }
      saveFile()
    }, /*catch*/ (error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
  } else {
    console.error('This browser is not supported.');
  }
} else {
  window.location.href = new URL('./macos.html', window.location).href
}
  


