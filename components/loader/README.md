# loader

## Usecases
load anything from the stealify bundle format 
bundle format is 1:1 Object representation of the fs component internal so all documentation applys keys are propertys and can not be nested but referenced!


```
const volume = { "sha256::s8342da....": "content{}[]" }
const meta = [
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
