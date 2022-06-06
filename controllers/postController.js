const Post = require('../model/postModel');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    console.log(54);
    const newPost = await Post.create(req.body);
    console.log(req.body);

    res.status(201).send({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(404).send({
      status: 'error',
      message: err,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deletePost = (req, res) => {
  res.status(204).send({
    status: 'success',
    data: {},
  });
};
