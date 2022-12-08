const Item = require('../../models/Item')
const Comment = require ('../../models/Comment')

const itemRaw = require('../data/itemRaw.json');
const commentRaw = require('../data/commentRaw.json')

Item.find({})
    .then(items => {
        console.log(items)
        items.forEach(item => {
            let itemJSON = itemRaw.find(itemJSON => itemJSON.title === itemJSON.title)
            Comment.findOne({title: itemJSON.title})
                .then(comment => {
                    item.title = comment._id
                    item.save()
                })
        })
    })