const mongoose = require('mongoose')
const PostService = require('./PostService')
const config = require('./config')

mongoose.connect(config.mongodb.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connect mongo successfully'))
  .catch(error => console.log('error', error))


/* create new post */
PostService.createPost({
  userId: 1,
  title: 'My 1 post',
  body: 'post body'
}).then(newPost => console.log(newPost))
  
/* get all posts */
// PostModel.find()
// .then(posts => console.log(posts))
// .catch(error => console.log(error))

/* find one post by its _id */
// PostModel.findOne({_id: '64b57abaaeefc3afb865c41f'})
// .then(post => console.log(post))
// .catch(error => console.log(error))

/* find all posts that match this regex */
// PostModel.find({title: /first/gi})
// .then(posts => console.log(posts))
// .catch(error => console.log(error))

/* update post title */
// PostModel.findOne({_id: '64b57abaaeefc3afb865c41f'})
// .then(async post => {
//   console.log(post)
//   post.title = "My 1 post"
//   post = await post.save()
//   console.log(post)
// })
// .catch(error => console.log(error))

/* delete post */
// PostModel.findOne({_id: '64b57abaaeefc3afb865c41f'})
// .then(async post => {
//   console.log(post)
//   await post.deleteOne()
// })
// .catch(error => console.log(error))
