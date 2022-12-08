const mongoose = require('./connection');

const Item = require('../models/Item');
const itemsSeed = require('./seed.json');

Item.deleteMany({}).then(() => {
    Item.create(itemsSeed).then(items => {
        console.log(items)
    })
})

