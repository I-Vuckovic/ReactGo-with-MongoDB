const mongoose = require('mongoose');

const comments = new mongoose.Schema({
  username: String,
  body: String,
  dateCreated: String
});

module.exports = User = mongoose.model('comments', comments);
