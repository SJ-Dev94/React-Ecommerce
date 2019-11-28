var createError = require('http-errors')
var express = require('express');
var passport = require('passport');
var axios = require('axios');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes')



var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'shhh' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({ secret: 'funky monkey' }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter)
module.exports = app;