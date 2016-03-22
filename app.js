
var Configs = require('./config');
Configs.set('base_dir', __dirname);
var express = require('express');
var app = express();

var Auth = require('./auth');
app.use(Auth.use);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(Configs.get('port'), function () {
    console.log('app listening on port '+Configs.get('port')+'!');
});