// imports
const express = require('express');
const router = express.Router();

const posts = []
let id = 1;

// middleware
app.use(bodyParser.json());
app.use(cors());


// Define a route handler for the root path


app.get('/posts', (req, res) => {
  res.send(posts);
})

app.get('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const post = posts.find(post => post.id === postId)
  res.send(post);
});

app.post('/posts', (req, res) => {
  console.log(req.body)
  const newPost = {
    ...req.body,
    id,
  }
  id++
  posts.push(newPost)
  res.send(newPost)
})

app.delete('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
})

// middleware
app.use(express.static('front'));



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});