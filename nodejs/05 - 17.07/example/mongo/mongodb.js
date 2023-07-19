const mongoose = require('mongoose')
const config = require('../config')
const PostService = require('./PostService')

function initMongodb() {
  mongoose.connect(config.mongodb.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connect mongo successfully'))
  .catch(error => console.log('error', error))
  mongoose.set('debug', true);
}

module.exports = initMongodb

  
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
