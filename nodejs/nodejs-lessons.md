01. 
* Node.js is extention of JS to work outside of the browser environment,
It includes millions of pachages that give javascript tools to do anything that possible in computers. 

Install nvm (node version manager) and node
install nvm - https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe

install a specific node version:
'nvm install 18.16.1'

use that version:
'nvm use 18.16.1'

* Create a simple server in 'server.js' file:
"""
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
"""

* NPM - node package manager

Create local node environment:
'npm init -y' (-y is confirm all the default settings)
it creates file of 'package.json'

Then install express in your local environment:
'npm install express'
(it creates new folder of "node_modules" with that package
and also it add to "package.json" -> "dependencies" the "express" package.)

Then run your server:
'node server.js'
Then see it on the browser in - localhost:3000

* For refresh the server after each change:
trun off the server - 'ctl + c'
run again 'node server.js'
refresh the page

* For auto-refresh install nodemon:
'npm install -g nodemon' (-g is global node_modules folder, usually in 'C:\Program Files\nodejs\node_modules')
now you can runing the server using this command:
'nodemon server.js'
and now each change in the code - is auto-refresh

* Home work:
Install Postman from the internet https://dl.pstmn.io/download/latest/win64
Make sure you did 'git pull'


02. 
* get POST body
'npm install body-parser'
const bodyParser = require('body-parser');
app.use(bodyParser.json());


* Blog API:
Working with Postman
Blog API - GET, POST, DELETE

* Use our server:
1.'npm install cors'
app.use(cors());
2.replace link from 'https://jsonplaceholder.typicode.com/posts' to '[your server]/posts'
3.add "userId" to the POST request.

* Serve blog from the server
1.Copy the blog to a folder name 'front' in your server
2.Add this middleware 'app.use(express.static('front'))'
  is doing:
    a. if somebody get to our server base ('http://localhost:3000') it return the index.html file.
    b. if somebody ask for files in 'front' it return all!!!:
      http://localhost:3000/dist/index.js - return the javascript file
      http://localhost:3000/images/[image name].jpg - return the image
      etc...

3. 

* Routing (express.Router())
open folder 'router'
create file 'posts.js':
  'const express = require('express');'
  'const router = express.Router();'
  cut all routers that starts with '/posts' to this file
  cut 'const posts = []' and 'let id = 1' to this file
  replace all 'app.get...' to 'router.get...'
  delete 'posts' from all the paths (instead of '/posts...' do '/...', etc.)
  add in the end of the file:
  'module.exports = router' (this export the variable outside for imports)
changes in 'server.js' file:
  'const postsRouter = require('./router/posts')'
  '//router'
  'app.use('/posts', postsRouter);'

* package.json concepts:
  'npm install' installing all "dependencies" in 'node_modules' folder
  'npm uninstall cors' - delete 'cors' library.
  'npm install' === 'npm i'
  "package.json"."scripts":
    ready scripts that we can run:
      'npm run [script_name]'
      'npm run start' instead of 'nodemon server.js'

* Static files - posts.json in the local

* Deploying the entire app to the Firebase??

*middleware
*error handling

* Working with typescript:
'npm install -g typescript' (only once)
'npm install -D typescript @types/node nodemon ts-node'
paste in 'tsconfig.json':
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
Then add this into "scripts" in package.json:
"start": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts"


MongoDB:
Open account in mongodb

'npm install mongoose'
'mongodb+srv://israellev770:eXb57AKhbMEPTDAD@cluster0.5q2k4o8.mongodb.net/'

5. MongoDB
Signup - https://www.mongodb.com/.
Open server (free, where ever you want).
Create user and save the username and password. 
Go to Security/Network access and add your IP adress to whitelist (we allow all IPs addresses)
Go to Deployment/database and click on 'connect' and 'drivers' and copy the 'mongodb+srv' link
Save it, and replace the <password> with your password.

in your server - 'npm i mongoose'

