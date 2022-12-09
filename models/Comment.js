const mongoose = require('../db/connection');

const Schema = mongoose.Schema;


// Comment Schema Model
const commentSchema = new Schema(
    {
        user: String,
        body: String
    });

module.exports = mongoose.model('Comment', commentSchema);

