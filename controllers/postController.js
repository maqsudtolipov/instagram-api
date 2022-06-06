const Post = require('../model/postModel');

exports.getAllPosts = (req, res) => {
  res.status(200).send({
    status: 'success',
    results: 500,
    data: {},
  });
};

exports.getPost = (req, res) => {
  res.status(200).send({
    status: 'success',
    data: {},
  });
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
    res.status(500).send({
      status: 'error',
      message: err,
    });
  }
};

exports.updatePost = (req, res) => {
  res.status(200).send({
    status: 'success',
    data: {},
  });
};

exports.deletePost = (req, res) => {
  res.status(204).send({
    status: 'success',
    data: {},
  });
};
