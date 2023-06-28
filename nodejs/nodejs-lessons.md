01. 
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

