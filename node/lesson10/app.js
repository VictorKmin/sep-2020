const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const db = require('./dataBase/MySQL').getInstance();

dotenv.config({ path: path.join(process.cwd(), '../.env') });
// dotenvConfigOutput.config();

db.setModels();

const { MONGO_URL, PORT } = require('./configs/config');
const apiRouter = require('./router/api.router');

const app = express();

_connectDB();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'static')));

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      customCode: err.customCode || 0,
      message: err.message || ''
    });
});

app.listen(PORT, () => {
  console.log(`App listen ${PORT}`);
});

function _connectDB() {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  const { connection } = mongoose;

  connection.on('error', (error) => {
    console.log(error);
  });
}
