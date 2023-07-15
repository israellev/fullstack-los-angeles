const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

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


const posts = [];

router.get('/', (req, res) => {
    res.send(posts);
  });
  
  router.post('/', upload.single('image'), (req, res) => {
   
    const newPost = {
      ...req.body,
      imageUrl: `/images/${req.file.filename}`,
      id: posts.length + 1, 
    };
  
    // Add the new post to the list of posts
    posts.push(newPost);
  
    // Return the created post
    res.send(newPost);
  });
  
router.delete('/:id',(req,res)=>{
    const postId = +req.params.id;
    const postIndex = posts.findIndex(post => post.id === postId);
    res.send(posts[postIndex]);
    posts.splice(postIndex,1)
  })

module.exports = router