// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const commentsRouter = require('./router/comments'); 
const path = require('path');
const initMongodb = require('./mongo/mongodb')

initMongodb()

// create app
const app = express();
// middleware
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('front'));

// router
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);


// Define a route handler for the root path
app.get('/Hello-Sapir', (req, res) => {
  res.send('Hello, Sapir!');
});

app.get('/', (req, res) => {
  const pathToHtml = path.join(__dirname, 'front', 'index.html')
  res.sendFile(pathToHtml);
});

app.get('/create-post', (req, res) => {
  const pathToHtml = path.join(__dirname, 'front', 'create-post.html')
  res.sendFile(pathToHtml);
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
