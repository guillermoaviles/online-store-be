// Basic Config
const express = require('express');
const cors = require('cors')

// Instantiate express
const app = express();
app.set('port', process.env.PORT || 8000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// ROUTES

// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/online-store');
});

// Start Controllers

// Items Controller
const itemsController = require('./controllers/itemController');
app.use('/api/online-store/', itemsController);

// // Comments Controller
// const commentsController = require('./controllers/comments');
// app.use('/api/online-store/', commentsController);


// End Controllers
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})
// Start Server
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;