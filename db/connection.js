const mongoose = require('mongoose');
require('dotenv').config();

let mongoURI = ""
if (process.env.DB_URL === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = process.env.DB_URL;
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log(`Connected to Mongo 🚀 at ${mongoURI}`)
  })

module.exports = mongoose;