// Import Mongoose to interface with MongoDB
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATABASE_URL
  process.env.NODE_ENV === `production`
  ? process.env.DATABASE_URL
  :`mongodb://localhost/online-store`;


// Connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if(err) throw err;
    console.log(`Connected to Mongo 🚀 at ${mongoURI}`)
  })

module.exports = mongoose;