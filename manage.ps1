return 0 # run commands from this script only interactively

# install latest npm
npm --help
npm --version
npm install -g npm@latest

# create react app
npm create --help
npm help init

npm create vite@latest users-directory -- --template react-ts

cd users-directory
npm install

npm run dev

<# Debugging - tools and configuration
    - for VSCode
        - create launch.json (for "launch msedge")
        - tasks.json (for "npm dev")
        - install extension ms-edgedevtools.vscode-edge-devtools
    - for MSEdge, install "React Develper tools" browser extension https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil
    - for JetBrains Rider - configure Run/Debug configurations
#>

cd ..

# try with eslint
npm create vite@latest temp1 -- --template react-ts
cd temp1
npm install
npm run dev