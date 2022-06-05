const express = require('express');
const morgan = require('morgan');

const postRoutes = require('./routes/postRoutes');

const app = express();

//++ Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use((req, res, next) => {
  console.log('🍏 Request received');
  next();
});

//++ Routes
app.use('/api/v1/posts', postRoutes);

module.exports = app;
