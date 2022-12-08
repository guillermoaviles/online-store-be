const mongoose = require('../db/connection');
const Schema = mongoose.Schema;


// Item Schema Model
const itemSchema = new Schema(
    {
        title: String,
        description: String,
        images: String,
        price: Number,
        comments: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]
    }
);

module.exports = mongoose.model('Item', itemSchema);

