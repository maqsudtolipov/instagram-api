exports.checkBody = (req, res, next) => {
  console.log('donenen');
  if (!req.body.name || !req.body.price) {
    return res.status(400).send({
      status: 'fail',
      message: 'Please provide name and email',
    });
  }
  next();
};

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

exports.createPost = (req, res) => {
  res.status(201).send({
    status: 'successs',
    data: {},
  });
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
