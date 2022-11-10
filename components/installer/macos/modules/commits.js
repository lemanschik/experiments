
// (await fetch("https://github.com/lemanschik/experiments/commits/main.atom")).body
// https://github.com/lemanschik/experiments/commits/main/components/installer/macos

const commitReader = new ReadableStream({
  start(controller) {
    fetch("https://github.com/lemanschik/experiments/commits/main.atom").then(response=>response.text)
  }
})
