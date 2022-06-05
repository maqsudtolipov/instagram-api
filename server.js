const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🍊 Server is listening on port ${port}`);
});
