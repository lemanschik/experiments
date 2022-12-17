export const resolve = await fetch('https://raw.githubusercontent.com/lemanschik/awesome/components/resolve/github.com.js').then(r=>r.blob()).then(blob=>new Blob([blob],{ type: "text/javascript" })).then(window.URL.createObjectURL).then(resolvedId=>import(resolvedId,new URL(`https://raw.githubusercontent.com/lemanschik/awesome/components/resolve`)));

//await import(`https://raw.githubusercontent.com/lemanschik/awesome/components/resolve/github.com.js`);
