const mongoose = require('./connection');

const Item = require('../../models/Item');
const itemsSeed = require('../data/itemRaw.json');

Item.deleteMany({}).then(() => {
    Item.create(itemsSeed).then(items => {
        console.log(items)
    })
})



module.exports = mongoose