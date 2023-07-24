const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
});

module.exports = mongoose.model('Comment', CommentSchema);
