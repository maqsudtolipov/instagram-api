// const dotenv = require('dotenv');
// dotenv.config();

const app = require('./app.js');

const port = 4000;
app.listen(port, () => {
  console.log(`🍊 Server is listening on port ${port}`);
});
