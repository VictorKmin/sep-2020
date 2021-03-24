const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(process.cwd(), '../.env') });

const db = require('./dataBase/MySQL').getInstance();
const cronRun = require('./cron-jobs');
const { MONGO_URL, PORT } = require('./configs/config');
const apiRouter = require('./router/api.router');
const logger = require('./logger/winston')();
const Sentry = require('./logger/sentry');

// dotenvConfigOutput.config();

db.setModels();

const app = express();

_connectDB();

app.use(Sentry.Handlers.requestHandler());

app.use(morgan('dev'));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'static')));

app.use('/', apiRouter);

app.use(Sentry.Handlers.errorHandler());

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
  Sentry.captureException(err);

  logger.error(JSON.stringify({
    message: err.message,
    code: err.customCode,
    status: err.status
  }));
  res
    .status(err.status || 500)
    .json({
      customCode: err.customCode || 0,
      message: err.message || ''
    });
});

app.listen(PORT, () => {
  console.log(`App listen ${PORT}`);
  cronRun();
});

function _connectDB() {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  const { connection } = mongoose;

  connection.on('error', (error) => {
    console.log(error);
  });
}
