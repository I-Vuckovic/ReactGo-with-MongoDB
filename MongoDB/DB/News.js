const mongoose = require('mongoose');

const news = new mongoose.Schema({
 
  time: String,
  author: String,
  body: String,
  id: String
});

module.exports = User = mongoose.model('news', news);
