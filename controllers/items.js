const express = require('express')
const Item = require('../models/Item')
const router = express.Router()

router.get('/items', async (req,res,next) => {
    try {
        const item = await Item.find({})
        res.json(item)
    } catch (err) {
        next(err)
    }
})

router.post('/newItem', async (req,res,next) => {
    try {
        const newItem = await Item.create(req.body)
        res.status(201).json(newItem)
    } catch(err) {
        next(err)
    }
})

router

module.exports = router