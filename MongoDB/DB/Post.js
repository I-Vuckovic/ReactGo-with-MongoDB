const mongoose = require('mongoose');

const post = new mongoose.Schema({
  id: {type:Number},
  title: String,
  imageUrl: String,
  body: String,
  numOfFavorites: {type:Number},
  comments: [Object],
  dateCreated: String,
  author: String,
  authorId: String,
});

module.exports = User = mongoose.model('post', post);
