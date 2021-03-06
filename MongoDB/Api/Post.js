const express = require('express');
const mongoose = require('mongoose');
const Post = require('../DB/Post');
const route = express.Router();

route.post('/add', async (req, res) => {
  const { title, imageUrl, body, numOfFavorites, comments, dateCreated, author, authorId} = req.body;
  
  let post = {};
  //post.id = await Post.count() + Math.floor(Math.random()*10000);
  post.title = title;
  post.imageUrl = imageUrl;
  post.body = body;
  post.numOfFavorites = numOfFavorites;
  post.comments = comments;
  post.dateCreated = dateCreated;
  post.author = author;
  post.authorId = authorId;
  let postModel = new Post(post);
  await postModel.save();
  res.json(postModel);
});

route.post('/add', async (req, res) => {
  
})

route.post('/update', async (req, res) => {
  const { _id, title, imageUrl, body, numOfFavorites, comments, dateCreated, author, authorId} = req.body;
  let post = {};
  post._id = _id;
  post.title = title;
  post.imageUrl = imageUrl;
  post.body = body;
  post.numOfFavorites = numOfFavorites;
  post.comments = comments;
  post.dateCreated = dateCreated;
  post.author = author;
  post.authorId = authorId;
  let postModel = new Post(post);
  await Post.replaceOne({'_id':_id},post)
  res.json(postModel);
});

route.get("/", (req, res, next) => {
  
  Post.find({})
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

route.get("/:postId", (req, res, next) => {
  const id = req.params.postId;
  Post.find({"_id":id})
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

route.get("/delete/:postId", (req, res, next) => {
  const id = req.params.postId;
  Post.deleteOne({"_id":id})
    .exec()
    .then(doc => {
      
      
        res.status(200).json({"deleted":"yes"});
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});




module.exports = route;
