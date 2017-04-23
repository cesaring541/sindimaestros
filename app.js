var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var livereload = require('livereload')
var mongoose = require('mongoose');
var moment = require('moment');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan = require('morgan');
var cookieSession = require('cookie-session');
var tunnel = require('tunnel-ssh');

var config = {
    username:'root',
    host:'138.68.41.96',
    port:22,
    dstPort:27017,
    password:'4dm1n.lze'
};


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(cookieSession({
  name: "session",
  keys: ["llave-1", "llave-2"]
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./config/passport')(passport); // pass passport for configuration

// Routes =========================================================
require('./app/indexRoutes.js')(app);
require('./app/authRoutes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/usersRoutes.js')(app, passport);
require('./app/eventsRoutes.js')(app, passport);
require('./app/joinedsRoutes.js')(app, passport);
require('./app/laborUnionsRoutes.js')(app, passport);
require('./app/sportEventsRoutes.js')(app, passport);
require('./app/teamsRoutes.js')(app, passport);
require('./app/reportsRoutes.js')(app, passport);


var configDB = require('./config/database.js');
//Database connection
var server = tunnel(config, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
    }
    mongoose.connect('mongodb://localhost:27017/sindimaestros');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log("DB connection successful");
    });
});

// error handlers

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

app.set('port', process.env.PORT || 8080);
//app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function() {
  console.log('Servidor ejecutándose en el puerto ' + server.address().port);
  server = livereload.createServer();
  server.watch(__dirname + "/views");

});

module.exports = app;
