const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment');

const PostSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        unique: true
     },
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

postSchema.plugin(autoIncrement.plugin, {
    model: 'Post',
    field: 'id',
    startAt: 1,
    incrementBy: 1,
  });

module.exports = mongoose.model('Post', PostSchema);
