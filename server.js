const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const mongoUri = 'mongodb+srv://panu_backend:15515511@clusterdb.1wuju.mongodb.net/TutorialDB?retryWrites=true&w=majority';
const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/check', (req, res) => {
    res.json('TEST ROUTE!');
    console.log("Hello")
});

app.listen(PORT, () => {
    console.log('Server: running.', PORT)
});

db.then(() => {
    console.log('MongoDB: connected.');
})