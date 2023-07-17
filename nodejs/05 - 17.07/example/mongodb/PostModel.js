const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Post', PostSchema);
