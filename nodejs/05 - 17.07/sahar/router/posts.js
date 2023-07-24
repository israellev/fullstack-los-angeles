const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const PostService = require('../mongo/postService');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'front/images'); // Specify the destination path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  }
}); 
const upload = multer({ storage: storage });


// Define a route handler for the root path

router.get('/', async (req, res) => {
  const posts = await PostService.getAllPosts()
  res.send(posts);
});

router.get('/:_id', (req, res) => {
  const postId = +req.params._id;
  const post = posts.find(post => post._id === postId)
  res.send(post);
});

router.post('/', upload.single('image'), (req, res) => {
  console.log(req.body)  // This will show the form data sent from the frontend
  console.log(req.file); // This will show information about the uploaded image
  const newPost = {
      ...req.body,
      imageUrl: `/images/${req.file.filename}`,
      id,
  }
  id++
  posts.push(newPost)
  res.send(newPost)
});

router.delete('/:id', (req, res) => {
  const postId = +req.params.id;
  const postIndex = posts.findIndex(post => post.id === postId);
  res.send(posts[postIndex])
  posts.splice(postIndex, 1);
});

module.exports= router