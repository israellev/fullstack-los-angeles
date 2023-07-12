const express = require('express');

// Create an Express application

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors())

const posts = []
let id = 1
// Define a route handler for the root path
app.get('/hello-world', (req, res) => {
  res.send('Hello, liad!');
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  console.log(req.body)
  const newPost = {
    ...req.body,
    id,
  }
  id++
  posts.push(newPost)
  res.send(newPost);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use(express.static('liad'))

app.delete('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
})