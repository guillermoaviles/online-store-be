// const Item = require('../../models/Item');
// const Comment = require('../../models/Comment');


// const itemRaw = require('../data/itemRaw.json');


// Item.deleteMany({}, (err, items) => {
//     Comment.deleteMany({}, (err, comments) => {
//         itemRaw.forEach((item, id) => {
//     Item.create(item, (err, newItem) => { 
//             newItem.save()
//             console.log('newItem', newItem)    

//     } )
// })
//     })
// } )

const mongoose = require('./connection');

const Item = require('../../models/Item');
const itemsSeed = require('../data/itemRaw.json');

Item.deleteMany({}).then(() => {
    Item.create(itemsSeed).then(items => {
        console.log(items)
    })
})

    

module.exports = mongoose