const express = require('express');
const mongoose = require('mongoose');
const Comments = require('../DB/Comments');
const route = express.Router();

route.post('/add', async (req, res) => {
  const { username, body, dateCreated } = req.body;
  let comments = {};
  comments.username = username;
  comments.body = body;
  comments.dateCreated = dateCreated;
  let commentsModel = new Comments(comments);
  await commentsModel.save();
  res.json(commentsModel);
});



module.exports = route;
