const express = require('express');
const router = express.Router()

const posts = [];
let id = 1;
let userId = 1

// Define a route handler for the root path

router.get('/posts', (req, res) => {
  res.send(posts);
});

router.get('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const post = posts.find(post => post.id === postId)
  res.send(post);
});


router.post('/posts', (req, res) => {
  console.log(req.body)
  const newPost = {
    ...req.body,
    id,
  }
  id ++
  userId ++
  posts.push(newPost)
  res.send(newPost)
});

router.delete('/posts/:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
});

module.exports= router