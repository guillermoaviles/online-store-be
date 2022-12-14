const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        title: String,
        description: String,
        images: String,
        price: Number,
    }
);

module.exports = mongoose.model('Item', itemSchema);

