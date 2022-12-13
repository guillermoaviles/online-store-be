const express = require("express");
const router = express.Router();

const Item = require("../models/Item");
const Comment = require('../models/Comment')

router.get("/items", async (req, res, next) => {
  try {
    const item = await Item.find({});
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.get("/items/:id", async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/newItem", async (req, res, next) => {
  try {
    const newItem = await (await Item.create(req.body));
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
});

router.put("/edit/:id", async (req, res, next) => {
  try {
    const updateItem = await Item.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    )
      .then((item) => {
        res.sendStatus(202)
      })
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteItem/:id", async (req, res, next) => {
  try {
    const deleteItem = await Item.findOneAndDelete({ _id: req.params.id })
    const deleteComments = await Comment.deleteMany({ item: req.params.id })
      .then((item) => {
        res.sendStatus(204)
      })
  } catch (err) {
    next(err)
  }
});

module.exports = router;
