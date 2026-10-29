return 0 # prevent running this script as a whole

# install latest npm
npm --help
npm --version
npm install -g npm@latest

# create react app
npm create --help

npm create vite@latest users-directory -- --template react-ts

cd users-directory

npm install

npm run dev