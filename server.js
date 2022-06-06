const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log('🥝 Connection successful');
  })
  .catch((err) => {
    console.log(err);
  });




const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🍊 Server is listening on port ${port}`);
});
