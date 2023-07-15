// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./router/posts')
const path = require('path');
// create an Express application

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('Front End'));

// router
app.use('/posts', postsRouter);

// routes
app.get('/hello-world', (req, res) => {
  res.send("hello world");
});

// Serve create-post.html

app.get('/', (req, res) => {
  const pathToHtml = path.join(__dirname, 'Front End', 'index.html')
  res.sendFile(pathToHtml);
});

app.get('/create-post', (req, res) => {
  const PathToHtml = PathToHtml.join(__dirname + '/Front End/create-post')
  res.sendFile(PathToHtml);
});



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});