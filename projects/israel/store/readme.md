דרישות:
1. מערכת עובדת בטכנולוגיות react+node+mongodb.
2. מימוש של CRUD (create, read, update, delete).
3. כניסה למשתמשים רשומים עם הרשאות למנהל והרשאות למשתמש רגיל.

מוצרים

const prodct = [
    {
        name: string,
        price: stirng,
        image_url: string,
    },
    ...
];

1. react + mui
2. node
3. mongodb

משתמשים
1. כניסה עם גוגל
2. הרשאות לוקאליות
3. הוספה, מחיקה, עדכון

4. const users = [
    {
        name: string,
        email: string,
        role: "user" | "admin",
    }
]


שלבים
- npx create-react-app store --template typescript
- npm install @mui/material @emotion/react @emotion/styled
- cd store
- npm run start
- npm run build (create static files into 'build' folder)
put all react files into folder 'front'. 

בניית שרת
- npm init -y (create package.json)
create file 'server.js'
- npm install express cors 
gpt - 'please create simple express hello world'
gpt - 'please serve react files from "./client/build"'
GET '/api/products' send the products list
add cors for allow react dev access to the server
bonus:
install 'dotenv', require('dontenv').config() and file '.env' with PORT=3001, and use process.env.PORT

עדכון ריקאט
create src/services/api-service.ts
write function of 'getProducts'
use 'getPruducts' in 'useEffect' for updating 'useState' of [setProducts] 

דאטה בייס:
https://www.mongodb.com/
GPT prompt - How to connect mongodb (using npm mongodb) via nodejs and get data in api of GET "/api/products"? i'm using .env to store my variables
- npm i mongodb

get your db link:
www.mongodb.com - database - connect - compass - copy the link.

replace <password> with user password:
database access - add new database user - username, password, role - Add user.

add the link to MONGO_URI in '.env' file


כניסה עם גוגל באמצעות פיירבייס:
open new project - https://console.firebase.google.com/
go to project settings - general - add web app - copy the configuration to /services/firebase.ts 
Follow the orders - https://firebase.google.com/docs/auth/web/google-signin
Add you domain "http://localhost" to - authentication - settings - authorized domain - add domain


חיבור של השרת לפיירבייס אחסון - storage:
docs - https://firebase.google.com/docs/storage/web/upload-files
cart - console - project settings - service account - generate new private key - download .json file
npm i firebase-admin
new folder "services"
new file "firebase.ts" - that export "firebaseApp".
new file "storage.ts" - allow to upload files.

לכתוב א.פ.י. שמקבל את המוצר החדש:
npm install multer body-parser



לדבג יחד עם וי אס קוד:
run - add configuration:
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Run Server.js",
        "program": "${workspaceFolder}/server.js",
        "skipFiles": ["<node_internals>/**"],
        "outFiles": [],
        "preLaunchTask": null,
        "runtimeExecutable": null,
        "runtimeArgs": ["--nolazy"],
        "env": {
          "NODE_ENV": "development"
        },
        "console": "integratedTerminal"
      }
    ]
  }
  run - start debugging 