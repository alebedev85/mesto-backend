const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 4,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 4,
  },
  hobby: {
    type: String,
    required: true,
    minlength: 4,
  },
});

module.exports = mongoose.model('user', userSchema);
