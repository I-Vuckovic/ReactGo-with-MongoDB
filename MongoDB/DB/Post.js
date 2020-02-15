const mongoose = require('mongoose');

const post = new mongoose.Schema({
  id: String,
  title: String,
  imageUrl: String,
  body: String,
  numOfFavorites: String,
  comments: [String],
  dateCreated: String,
  author: String,
  authorId: String,
});

module.exports = User = mongoose.model('post', post);
