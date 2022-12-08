const mongoose = require('../db/connection');
const Schema = mongoose.Schema;


// Comment Schema Model
const commentSchema = new Schema(
    {
        user: {
            type: String,
            default: "anonymous"
        },
        body: String
    }
);

module.exports = mongoose.model('Comment', commentSchema);

