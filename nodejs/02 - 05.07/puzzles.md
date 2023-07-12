home puzzle:

1. implement all apis:
GET /hello-world
GET /
GET /posts
POST /posts               
body: {"title": "", "body": "", "userId": 1}
GET /posts/:id
DELETE /posts/:id

2. Use our server for API:
a.'npm install cors'
app.use(cors());
b.replace link from 'https://jsonplaceholder.typicode.com/posts' to '/posts'
c.add "userId" to the POST request.

3. Serve the entire blog from our server
a. Copy the blog to a folder name 'front' in your server
b. Add this middleware 'app.use(express.static('front'))'
c. make sure the front got all the files he needed:
    a. if somebody get to our server base ('http://localhost:3000') it return the index.html file.
    b. if somebody ask for files in 'front' it return all!!!:
      http://localhost:3000/dist/index.js - return the javascript file
      http://localhost:3000/images/[image name].jpg - return the image
      etc...
