////
// CONFIGURATION SETTINGS
///
var PORT = 8080;
var FETCH_INTERVAL = 5000;
var PRETTY_PRINT_JSON = true;

var express = require('express');
var http = require('http');
var io = require('socket.io');
var nunjucks = require('nunjucks');

var app = express();
var server = http.createServer(app);
var io = io.listen(server);
//io.set('log level', 1);

server.listen(PORT);

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

var ticker = "";
//app.get('/:ticker', function(req, res) {
app.get('/', function(req, res) {
    ticker = req.params.ticker;
    res.sendfile(__dirname + '/test.html');
});
