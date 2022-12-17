// Essential
// const importJsBlob = (resolvedJsBlob) => import(resolvedJsBlob[0], resolvedJsBlob[1]);
export const importJsBlob = ([resolvedId, importee]) => import(resolvedId, importee);

export const resolveJsBlob = (r) => r.blob().then((blob) => new Blob([blob], { type: "text/javascript" }))
  .then(window.URL.createObjectURL).then((resolvedId) => [resolvedId, new URL(r.url)]));
//  .then(importJsBlob)

export const resolveRawGithub = (githubRef) => `https://raw.githubusercontent.com/${githubRef}`;

// import('./experiments.js?id=lemanschik/awesome/components/resolve/github.com.js').then(({ resolvedId }) => import(resolvedId));
export const resolvedId = await fetch( resolveRawGithub(new URL(import.meta.url).searchParams.get('id')) ).then(resolveBlob)

// import('./experiments.js?id=lemanschik/awesome/components/resolve/github.com.js').then(({ exports }) => exports.git);
export const exports = import(resolvedId);

// TODO: evaluate deprecation or usefullnes
export const fetchRawGithub = (githubRef) => fetch(resolveRawGithub(`${githubRef}`))

// Notes:
// 'https://raw.githubusercontent.com/lemanschik/awesome/components/resolve/github.com.js').then(resolveBlob)
 //.then(blob=>new Blob([blob],{ type: "text/javascript" })).then(window.URL.createObjectURL).then(resolvedId=>import(resolvedId,new URL(`https://raw.githubusercontent.com/lemanschik/awesome/components/resolve`)));

//await import(`https://raw.githubusercontent.com/lemanschik/awesome/components/resolve/github.com.js`);
