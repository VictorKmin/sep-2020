const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { MONGO_URL, PORT } = require('./configs/config');
const apiRouter = require('./router/api.router');

const app = express();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', apiRouter);

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
