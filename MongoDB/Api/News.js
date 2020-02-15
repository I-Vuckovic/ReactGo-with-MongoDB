const express = require('express');
const mongoose = require('mongoose');
const News = require('../DB/News');
const route = express.Router();

route.post('/add', async (req, res) => {
  const { time, author, body, id } = req.body;
  let news = {};
  news.time = time;
  news.author = author;
  news.body = body;
  news.id = id;
  let newsModel = new News(news);
  await newsModel.save();
  res.json(newsModel);
});


route.get("/", (req, res, next) => {
  News.find({})
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});


module.exports = route;
