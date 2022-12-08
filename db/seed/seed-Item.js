const Item = require('../../models/Item');
const Comment = require('../../models/Comment');


const itemRaw = require('../data/itemRaw.json');
const commentRaw = require('../data/commentRaw.json');

const itemData = itemRaw.map(item => {
    const newItem ={}
    newItem.title = item.title
    newItem.description = item.description
    newItem.images = item.images
    newItem.price = item.price
    return newItem
})

const commentData = commentRaw.map(comment => {
    const newComment = {}
    newComment.title = comment.title
    newComment.extract = comment.extract
    return newComments
})

Item.remove({})
    .then(() => {
        Item.create(itemData)
            .then(items => {
                console.log(itemData)
            })
            .catch(err => {
                console.log(err)
            })
    })

Comment.remove({})
    .then(() => {
        Comment.create(commentData)
            .then(comments => {
                console.log(commentData)
            })
            .catch(err => {
                console.log(err)
            })
    })