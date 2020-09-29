var express = require('express');
var compression = require('compression');
var bodyParser  = require('body-parser');
var morgan = require('morgan');

module.exports = function() {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    // require('../App/routes/index.routes')(app);
    // require('../App/routes/user.routes')(app);
    app.use(express.static('public')); //ควรเอาไว้หลัง routing จะทำงานเร็วกว่า

    return app;
}