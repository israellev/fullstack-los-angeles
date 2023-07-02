01. Install nvm (node version manager) and node:
    install nvm - https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe
    
    install node version:
    'nvm install 18.16.1'
    
    use node version:
    'nvm use 18.16.1'


    Run simple server on server.js file:
    const http = require('http');
    // Create the server
    const server = http.createServer((req, res) => {
      res.end('Hello World!!!');
    });
    // Start the server
    server.listen(3000, () => {
      console.log(`Server listening on port ${3000}`);
    });


    Then run it:
    'node server.js'
    Then see it on the browser in - localhost:3000
    

    Refresh:
    run 'ctl + c'
    make change
    save
    run 'node server.js'
    refresh the page

    NPM - node package manager
    (npm -g = global packages)
    
    Create local npm:
    'npm init -y' (it creates local node environment)
    it creates file of package.json
    
    install express:
    'npm install express'
    it creates new folder of "node_modules" with that package
    it add to "package.json" -> "dependencies" the "express" package.

    now you can run:
    'node server.js'
    or
    'npm run start'

    








02. 
    Create node environment:
    go to empty folder
    npm init -y
    npm install -g typescript (only once)
    npm install --save-dev typescript
    npm install --save-dev @types/node
    npm install --save-dev nodemon ts-node
    paste in tsconfig.json:
    {
  "compilerOptions": {
    "target": "es6", 
    "module": "commonjs",
    "outDir": "./dist", 
    "strict": true,   
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
    add to "scripts" in package.json:
        "start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts"

