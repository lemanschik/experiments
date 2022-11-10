/**
 * This component implements linear memory
 * It is not really much code needed for that
 * It exists mainly to show you the concept
 * have fun with it we create a buffer that is as
 * big as our headp as shared module
 *
 * to show you how ever how usefull this is:
 * we use this component to implement a platform indipendent
 * ramdrive that works on windows 10+ without a kernel driver.
 * and gets exposed via wsl
 */

const sharedArrayBuffer = [];
// You can import that and use it in multiple other modules all will shareState when they are running 
// in the same context / world / process / Task
export { sharedArrayBuffer };
