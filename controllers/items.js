const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

router.get("/items", async (req, res, next) => {
  try {
    const item = await Item.find({});
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/newItem", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
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
    );
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteItem/:id", async (req, res, next) => {
  try {
    const deleteItem = await Item.findOneAndDelete({ _id: req.params.id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
