const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        user: {
            type: String,
            default: "anonymous"
        },
        body: String,
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    }
);

module.exports = mongoose.model('Comment', commentSchema);

