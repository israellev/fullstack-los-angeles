<<<<<<< HEAD
// imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
=======
//import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require(`cors`);
const postRouter = require("./router/posts");
>>>>>>> 21bdd132e490e0862f57b16c751d0489673c5d14

// create app
const app = express();
<<<<<<< HEAD

=======
>>>>>>> 21bdd132e490e0862f57b16c751d0489673c5d14
// middleware
app.use(bodyParser.json());
app.use(cors());

<<<<<<< HEAD
const posts = [];
let id = 1;

// routes
app.get("/hello-world", (req, res) => {
  res.send("hello world");
=======
app.get("/hello-world", (req, res) => {
  res.send("Hello World??");
>>>>>>> 21bdd132e490e0862f57b16c751d0489673c5d14
});

app.use(express.static("front"));
app.use("/posts", postRouter);

app.post("/posts", (req, res) => {
  console.log(req.body);
  const newPost = {
    ...req.body,
    id,
  };
  id++;
  posts.push(newPost);
  res.send(newPost);
});

app.get("/posts/:id", (req, res) => {
  const postId = +req.params.id;
  const post = posts.find((post) => post.id === postId);
  res.send(post);
});

app.delete("/posts/:id", (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex((post) => post.id === postId);
  res.send(posts[postIndex]);
  posts.splice(postIndex, 1);
});

// middleware
app.use(express.static("front"));

// deploy
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
