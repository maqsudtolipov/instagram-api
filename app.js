const express = require('express');
const morgan = require('morgan');

const postRoutes = require('./routes/postRoutes');

const app = express();

//++ Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log('🍏 Request received');
  next();
});

//++ Routes
app.use('/api/v1/posts', postRoutes);

module.exports = app;
