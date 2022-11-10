/**
 * Implements the host component
 */

const host = (impl,context) => (context=impl());

// .sys.runMicroTask .fs .net use host.compile which implements stealify. and stealify uses sys
// .process is importent it gets passed to impl() if we are not self the host as the other operating systems are process based.
// or at last the interfaces that we use at present for them are process based.
