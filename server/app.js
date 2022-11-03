const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Configures the database and opens a global connection that can be used in any module
const sequelize = require('./config/database');
sequelize.sync().then(() => console.log('db is ready'))

// Configure passport user authentication
require('./config/passport')(passport);
app.use(passport.initialize());

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// Allows react application to make HTTP requests to Express application
app.use(cors());


app.use(require('./routes'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
