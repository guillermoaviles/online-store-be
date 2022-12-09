const express = require("express");

const router = express.Router();
const Comment = require("../models/Comment");


router.get("/comments/:id", async (req, res, next) => {
  try {
    const comment = await Comment.find({});
    res.json(comment);
  } catch (err) {
    next(err);
  }
});

router.post("/newComment/:id", async (req, res, next) => {
  try {
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
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

