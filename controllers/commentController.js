const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();


router.get("/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find({});
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

router.get("/comments/:id", async (req, res, next) => {
  try {
    const comments = await Comment.find({item: req.params.id});
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

router.post("/newComment/:id", async (req, res, next) => {
  try {
    req.body.user = req.body.user ? req.body.user : "Anonymous"
    req.body.item = req.params.id;
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteComment/:id", async (req, res, next) => {
  try {
    const deleteComment = await Comment.findOneAndDelete({
      _id: req.params.id,
    })
    .then((item) => {
      res.sendStatus(202)
    })
  } catch (err) {
    next(err);
  }
});

module.exports = router;