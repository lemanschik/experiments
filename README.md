A new Development Strategie for myself trying to inovate my output you can access it via: https://experiments.github.lemanschik.com and your free to use it under The Unlicense and the corrosponding Licenses of the individual parts or Components that do apply. 

Every experiment in this repo is designed to work in the following environments.

- @stealify/web-platform Builds. While some may work with other Web Platforms or existing once.
- Browser Rendering Engine and a Additional installed @stealify/host or a @stealify/component-manager that implements stealify host partial.

## Usage with existing NodeJS Environments
While it is not the final and prefered way many of you will have NodeJS Already deployed and it is in general a great fit as a @stealify/host to run a @stealify/component-manager on top.

```bash
mkdir ~/.stealify && cd ~/.stealify
FETCH_URL = "https://nodejs.org/dist/v19.0.1/node-v19.0.1-linux-x64.tar.xz" \
node --input-type module -e 'stream.Readable.fromWeb(
 (await fetch(process.env.FETCH_URL)).body)
  .pipe(fs.createWriteStream("./node.tar.xz"))';
$(npm root -g)
```

## Goals
Run anything distributed in the browser and also connect anything to anything embrace the concepts of Javascript/ECMAScript 
- code generation
- Interface definition via Streams.
- Instances/Workers/childForks/Loops/TaskQueues
- Dynamic Nativ Code Loading and Binding as also Connect it to Remote Contexts
