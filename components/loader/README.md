# loader

## Usecases
load anything from the stealify bundle format 
bundle format is 1:1 Object representation of the fs component internal so all documentation applys keys are propertys and can not be nested but referenced! the loader respects the RRS:: key pattern.


```ts
const volume = { 
  // Note: RRS that does not resolve on volume cleanups gets garbage collected.
  "RRS::sha256::s8342da....": [ ...meta ],
  "sha256::s8342da....": "content{}[]" 
}

const meta = [
  // Importent concept keys starting with RRS:: are handled as would it be none related meta
  // in your processing you should ignore RRS as it is a temporary result of something that may exist in the future
  "RRS::sha256::s8342da....", 
  "sha256::s8342da....": "content{}[]" 
  [
    'src/client/api.js',
    'src/client/http-constants.js',
    'src/client/index.html',
    'src/client/index.js',
    [ 'src/client/res/favicon.ico' ],
    'src/client/storage.js'
  ],
  [ 'src/crypto/keygen.js' ],
  'src/discover.js',
  [
    'src/mutations/createNewMutation.js',
    'src/mutations/newAccount.js',
    'src/mutations/transferCredit.js',
    'src/mutations/updateApp.js'
  ],
  [
    'src/server/authentication.js',
    'src/server/handlers.js',
    'src/server/quick-response.js',
    'src/server/server.js',
    'src/server/static-resources.js'
  ],
  [ 'src/util/prompt.js', 'src/util/safeWriteFile.js' ],
  'src/util.js'
]

// TODO: Implement Proxy based view on top of the struct.
//meta.map(maybeDir=> maybeArray instanceof Array && ({ get() { return maybeDir[0] });

```
