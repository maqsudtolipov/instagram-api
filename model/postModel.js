const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Image is required'],
    immutable: true,
  },
  caption: {
    type: String,
    required: [true, 'Caption is required'],
  },
  likes: [],
  comments: [],
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
