const Item = require('../../models/Item');
const Comment = require('../../models/Comment');


const itemRaw = require('../data/itemRaw.json');
const commentRaw = require('../data/commentRaw.json');


Item.deleteMany({}, (err, items) => {
    Comment.deleteMany({}, (err, comments) => {
        itemRaw.forEach((item, id) => {
    Item.create(item, (err, newItem) => { 
        Comment.create(commentRaw[id], (err, newComment) => {
            newItem.comments.push(newComment)
            newItem.save()
            console.log('newItem', newItem)    
        })
    } )
})
    })
} )