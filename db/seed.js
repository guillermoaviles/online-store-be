const mongoose = require('./connection');

const Item = require('../models/Item');
const Comment = require('../models/Comment');
const itemsSeed = require('./data/itemRaw.json');
const commentsSeed = require('./data/commentRaw.json');

Item.deleteMany({}).then(() => {
    Item.create(itemsSeed).then(items => {
        console.log(items)
    })
})

Comment.deleteMany({}).then(() => {
    Comment.create(commentsSeed).then(comments => {
        console.log(comments)
    })
})

