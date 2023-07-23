const mongoose = require('mongoose');
const config = require('../config');
postService = require('./PostService')

function initMongodb() {
    mongoose.connect(config.mongoDb.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connect mongo successfully'))
    .catch(error => console.log('error', error))
    mongoose.set('debug', true);
  }

  module.exports = initMongodb




  
  
    // newPost.save()
    // .then((savedPost) => {
    //     console.log('New post saved successfully!');
    //     const newPostId = savedPost._id;
    //     console.log('New post ID:', newPostId);
    // })
    // .catch((err) => {
    //     console.error('Error saving post:', err);
    
    // })
    
    
    // // To fetch all posts:
    // PostModel.find()
    //     .then(posts => console.log(posts))
    //     .catch(err => console.error('Error: ', err));
    
    // // To find a specific post:
    // PostModel.findOne({ title: 'post 1' })
    //     .then(post => console.log(post))
    //     .catch(err => console.error('Error: ', err));
    
    // // To update a post:
    // PostModel.findOneAndUpdate({ title: 'post 1' }, { title: 'post 1' })
    //     .then(() => console.log('post updated'))
    //     .catch(err => console.error('Error: ', err));
    
    // // To delete a post:
    // PostModel.findOneAndDelete({ name: 'post 1' })
    //     .then(() => console.log('post deleted'))
    //     .catch(err => console.error('Error: ', err));
    

  
        /* create new post */
        // PostService.createPost({
        //   userId: 1,
        //   title: 'My 1 post',
        //   body: 'post body'
        // })
        // .then(newPost => console.log(newPost))
          
        /* get all posts */
        // PostService.getAllPosts()
        // .then(posts => console.log(posts))
        
        /* find one post by its _id */
        // PostService.getPost('64b57abaaeefc3afb865c41f')
        // .then(post => console.log(post))
        
        /* find all posts that match this regex */
        // PostService.findPostsByTitle('post')
        // .then(posts => console.log(posts))
        
        /* update post title */
        // PostService.updatePostTitle('64b57abaaeefc3afb865c41f', "My 1 post")
        // .then(post => console.log(post))
        
        /* delete post */
        // PostService.deletePost('64b57abaaeefc3afb865c41f')
        // .then(res => console.log(res))
        