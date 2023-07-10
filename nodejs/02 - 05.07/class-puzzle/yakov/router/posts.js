const express = require("express");
const Router = express.Router();

const posts = [];
let id = 1;

// Define a route handler for the root path

app.get("/", (req, res) => {
  res.send(posts);
});

app.post("/", (req, res) => {
  console.log(req.body);
  const newPost = {
    ...req.body,
    id,
  };
  id++;
  posts.push(newPost);
  res.send(posts);
});

app.get("//:id", (req, res) => {
  const postId = +req.params.id;
  const post = posts.find((post) => post.id === postId);
  res.send(post);
});

app.delete("//:id", (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex((post) => post.id === postId);
  res.send(posts[postIndex]);
  posts.splice(postIndex, 1);
});

module.post;
