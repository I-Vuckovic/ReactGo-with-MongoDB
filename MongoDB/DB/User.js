const mongoose = require('mongoose');

const user = new mongoose.Schema({
  username: {
    type: String
  },
    password:String,
    id: String,
    favoritePosts: [Number],
    moderator: String,
});

module.exports = User = mongoose.model('user', user);
