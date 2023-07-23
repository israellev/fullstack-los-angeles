const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const postService = require('../mongo/postService')

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


router.get('/', async (req, res) => {
    const posts = await postService.getAllPosts()
    res.send(posts);
});


router.get('/:_id', async (req, res) => {
    const postId = req.params._id;
    const post = await postService.getPost(postId)
    res.send(post);
  });
  
  router.post('/', upload.single('image'), async (req, res) => {
    const newPost = await postService.createPost({
      ...req.body,
      userId: +req.body.userId,
      imageUrl: `/images/${req.file.filename}`,
    })
    res.send(newPost)
  });
  
  router.delete('/:_id', async (req, res) => {
    const postId = req.params._id;
    const response = await postService.deletePost(postId)
    res.send(response)
  })
  
  module.exports = router