# lsp-server 
A Script able LSP Server implementation.

## Usage
- npm install use cli.
- or install the marketplace extension. exposes cli endpoint under: workspace/.vscode/lsp.sock
  - if u use the cli without -g it will use the workspace socket by default. 
  - It will optain additional pipes from the workspace socket if needed 
    - eg additional UDPS datachannels
