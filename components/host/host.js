/**
 * Implements the host component
 */

const host = (impl,context) => (context=impl());

// .sys.runMicroTask .fs .net use host.compile which implements stealify. and stealify uses sys
// .process is importent it gets passed to impl() if we are not self the host as the other operating systems are process based. the host
// returns then .io which is .net .loop .sys combined into a Binary link for interop the main concept of a component
// after this step the platform-os/host is fully component based useable and integrated.
// or at last the interfaces that we use at present for them are process based.

const run = host.process.launch
const watch = host.process.watch
