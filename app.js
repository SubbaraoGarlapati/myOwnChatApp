/*
loads modules
path: provides utilities for working with file and directory paths
morgan: HTTP request logger middleware for node.js
cookie-parser: parse Cookie header and populate req.cookies with an object keyed by the cookie names
body-parser: parse incoming request bodies in a middleware before your handlers, available under the req.body property
*/
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var home = require('./routes/home.js');
var signup = require('./routes/signup.js');
var site = require('./routes/site.js')
var token = require('./routes/token.js');
var auth = require('./services/auth.js')
var users = require('./services/users.js');
var messages = require('./services/messages.js')
var channels = require('./services/channels.js')
//create main app
var app = express();

//sets the directory where the template files are located
app.set('views',path.join(__dirname,'views'));
//sets the template engine to use
app.set('view engine','pug');

//use logger for every request
app.use(logger('dev'));
//allows app to parse json 
app.use(bodyParser.json());
//allows app to parse urlencoded and tells the system to use a simple algorithm for shallow parsing for every request
app.use(bodyParser.urlencoded({extended: false}));
//uses cookieParser for every request
app.use(cookieParser());
//Specifies the root directory from which to serve static assets (.css,.png, etc.) for every request
app.use(express.static(path.join(__dirname,'public')));

//Calls home for every request
app.use('/',home);
//Calls auth for /auth path
app.use('/auth',auth);
//Calls signup for /signup path
app.use('/signup',signup);
//Calls site for /site path
app.use('/site',site);
//Calls token for every request starting with path starting with /token
app.use('/token', token);
//Calls users for /users path
app.use('/users',users)
//Calls messages for /messages path
app.use('/messages',messages)
//Calls channels for /channels path
app.use('/channels',channels)
//set module exports to be the app
module.exports = app;