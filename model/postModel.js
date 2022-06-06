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
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
