// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const path = require('path');
const initMongodb = require('./mongo/mongodb')


initMongodb()

// create an Express application
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

//
app.use(express.static('Front End'));

// router
app.use('/posts', postsRouter);

// routes
app.get('/hello-world', (req, res) => {
  res.send("hello world");
});


app.get('/', (req, res) => {
  console.log(__dirname);
  const pathToHtml = path.join(__dirname, 'Front End', 'index.html')
  res.sendFile(pathToHtml);
});

app.get('/create-post', (req, res) => {
  const pathToHtml = path.join(__dirname, 'Front End', 'create-post.html')
  res.sendFile(pathToHtml);
});


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

