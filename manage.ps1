return 0 # run commands from this script only interactively

# install latest npm
npm --help
npm --version
npm install -g npm@latest

# create react app
npm create --help

npm create vite@latest users-directory -- --template react-ts

Set-Location users-directory

npm install

npm run dev

<# Debugging - tools and configuration
    - for VSCode
        - create launch.json (for "launch msedge")
        - tasks.json (for "npm dev")
        - install extension ms-edgedevtools.vscode-edge-devtools
    - for MSEdge, install "React Develper tools" browser extension https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil
#>