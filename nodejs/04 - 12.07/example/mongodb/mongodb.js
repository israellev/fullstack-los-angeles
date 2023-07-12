const mongoose = require('mongoose')
const Post = require('./PostSchema')

// mongodb/database/collections
mongoose.connect('mongodb+srv://israellev770:eXb57AKhbMEPTDAD@cluster0.5q2k4o8.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

const newPost = new Post({
    title: 'post 1',
    body: 'body post',
    userId: 1
});

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
// Post.find()
//     .then(posts => console.log(posts))
//     .catch(err => console.error('Error: ', err));

// // To find a specific post:
// Post.findOne({ title: 'post 1' })
//     .then(post => console.log(post))
//     .catch(err => console.error('Error: ', err));

// // To update a post:
// Post.findOneAndUpdate({ title: 'post 1' }, { title: 'post 1' })
//     .then(() => console.log('post updated'))
//     .catch(err => console.error('Error: ', err));

// // To delete a post:
// Post.findOneAndDelete({ name: 'post 1' })
//     .then(() => console.log('post deleted'))
//     .catch(err => console.error('Error: ', err));

