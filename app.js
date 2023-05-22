const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

mongoose.connect('mongodb://localhost:27017/users');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
