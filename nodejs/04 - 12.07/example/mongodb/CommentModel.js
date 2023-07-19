const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const commentSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        unique: true
     },
    postId: { 
        type: Number, 
        ref: 'Comment',
        required: true, 
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
});

commentSchema.plugin(autoIncrement.plugin, {
    model: 'Comment',
    field: 'id',
    startAt: 1,
    incrementBy: 1,
  });

  module.exports = mongoose.model('Comment', commentSchema);
