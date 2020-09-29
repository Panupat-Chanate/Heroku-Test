const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const mongoUri = 'mongodb+srv://panu_backend:15515511@clusterdb.1wuju.mongodb.net/TutorialDB?retryWrites=true&w=majority';
const db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});
const Data = mongoose.model('tb_alumni', { _id: String });

app.get('/', (req, res) => {
    Data.find({
    })
    .select('_id firstName lastName')
    .exec(function(err, datanames) {
        if (err) {
            return next(err);
        }else{
            res.json(datanames);
        }
    });
});

app.post('/check', (req, res) => {
    console.log(req.body.checkId)
    Data.findOne({_id: req.body.checkId}, (err, dataId) => {
        if (err) return console.log(err)
        if (dataId === null) {
            console.log("ไม่มี");
            var checked ={
                checkedState: false
            };
            console.log(checked);
            res.json(checked);
        } else {
            console.log('มีแล้ว');
            var checked ={
                checkedState: true
            };
            console.log(checked);
            res.json(checked);
        }
    })
});

app.listen(PORT, () => {
    console.log('Server: running.', PORT)
});

db.then(() => {
    console.log('MongoDB: connected.');
})