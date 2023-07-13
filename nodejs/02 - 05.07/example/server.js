// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const posts = [];
let id = 1;


// routes
app.get('/hello-world', (req, res) => {
  res.send("hello world");
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  console.log(req.body)
<<<<<<< HEAD
  
=======
  const newPost = {
    ...req.body,
    id,
  }
  id ++
>>>>>>> 2b541fe15285b8020fefbc239c0f0dc93af14bce
  posts.push(newPost)
  res.send(newPost)
});

app.get('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const post = posts.find(post => post.id === postId)
  res.send(post);
});

app.delete('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
})

// middleware
app.use(express.static('front'));

// deploy
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
