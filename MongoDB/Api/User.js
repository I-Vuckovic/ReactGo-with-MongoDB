const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/add', async (req, res) => {
  const { username,password,id, favoritePosts, moderator } = req.body;
  let user = {};
  user.username = username;
  user.password = password;
  user.id = id;
  user.favoritePosts = favoritePosts;
  user.moderator = moderator;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.post('/update', async (req, res) => {
  const { username,password,id, favoritePosts, moderator } = req.body;
  let user = {};
  user.username = username;
  user.password = password;
  user.id = id;
  user.favoritePosts = favoritePosts;
  user.moderator = moderator;
  let userModel = new User(user);
  await User.replaceOne({'username':username},user)
  res.json(userModel);
});

route.get("/id/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.find({"id":id})
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc[0]);
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

route.get("/username/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.find({"username":id})
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc[0]);
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

route.get("/password/:userId", (req, res, next) => {
  const data = req.params.userId;
  const id = data.split("&");
  User.find({"username":id[0],"password":id[1]})
    .exec()
    .then(doc => {
      console.log("From database", doc[0]);
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

route.get("/request", (req, res, next) => {
  res.status(200).json({"connected": "true"});
});


module.exports = route;
