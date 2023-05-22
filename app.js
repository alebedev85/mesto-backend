const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

mongoose.connect('mongodb://127.0.0.1:27017/myUsersTest');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: new mongoose.Types.ObjectId('646b5e4f2af31baf466ac309'),
  };
  next();
});

app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
