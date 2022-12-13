const express = require('express');
const cors = require('cors')

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.redirect('/api/online-store');
});

const itemsController = require('./controllers/itemController');
app.use('/api/online-store/', itemsController);

const commentsController = require('./controllers/commentController');
app.use('/api/online-store/', commentsController);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

module.exports = app;