var express = require('express');
var ejs = require('ejs');
var app = express();
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');

/**
 * bodyparser
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Static stuff
 */
app.use('/public', express.static('./public'));

console.log('ez egy nagyon regi verzio');
/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
});

/**
 * Include all the routes
 */
require('./route/index')(app);

/**
 * Standard error handler

app.use(function (err, req, res, next) {
    res.status(500).send('Houston, we have a problem!');

    //Flush out the stack to the console
    console.error(err.stack);
});
 */

var server = app.listen(3000, function () {
    console.log('Hello :3000');
});
