const mongoose = require('mongoose');
const PostModel = require('./PostModel');
const config = require('../config');

function init() {
    mongoose
        .connect(config.mongodb.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Could not connect to MongoDB...', err));
    // mongoose.set('debug', true);
}

init();

const newPost = new PostModel({
    title: 'post 1',
    body: 'body post',
    userId: 1,
});

newPost
    .save()
    .then((savedPost) => {
        console.log('New post ID:', savedPost);
    })
    .catch((err) => {
        console.error('Error saving post:', err);
    });


// To fetch all posts:
// PostModel.find()
//     .then(posts => console.log(posts))
//     .catch(err => console.error('Error: ', err));

// To find a specific post:
// PostModel.findOne({ title: 'post 1' })
//     .then(post => console.log(post))
//     .catch(err => console.error('Error: ', err));

// To update a post:
// PostModel.findOneAndUpdate({ title: 'post 1' }, { title: 'post 11' })
//     .then(() => console.log('post updated'))
//     .catch(err => console.error('Error: ', err));

// To delete a post:
// PostModel.findOneAndDelete({ name: 'post 11' })
//     .then(() => console.log('post deleted'))
//     .catch(err => console.error('Error: ', err));

