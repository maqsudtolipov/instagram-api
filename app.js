const express = require('express');
const morgan = require('morgan');

const app = express();

//++ Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log('🍏 Request received');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
