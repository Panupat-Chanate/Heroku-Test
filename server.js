process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var mongoose = require('./config/mongoose');

const PORT = process.env.PORT || 5000;
const app = express();
const db = mongoose();

app.get('/', (req, res) => {
    res.send('NodeJS: Panu-API');
});

app.post('/check', (req, res) => {
    res.json('TEST ROUTE!');
    console.log("cs-check")
});

app.listen(PORT, () => {
    console.log('Server: running.', PORT)
});

db.then(() => {
    console.log('MongoDB: connected.');
})