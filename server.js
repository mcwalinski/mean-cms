// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var admin 		   = express(); // the admin app
var auth 		   = express(); // the auth app
var api 		   = express(); // the api app
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path 		   = require('path');
var mongoose   	   = require('mongoose');

// configuration ===========================================
    
// MongoDB config file - This stores the DB connection info
var db = require('./config/db');

// Invoke Express Router
var router = express.Router();

// set our port
var port = process.env.PORT || 3000; 

// connect to our mongoDB database 
// uncomment after you enter in your own credentials in config/db.js
mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// Define the sub apps
app.use('/admin', admin);
app.use('/auth', auth);
app.use('/api', api);

// view engine app setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// view engine admin setup
admin.use(express.static(__dirname + '/private'));
admin.set('views', path.join(__dirname, 'views/admin'));
admin.set('view engine', 'ejs');

// routes ==================================================
require('./app/application')(app); // configure our app routes
require('./app/admin')(admin); // configure our admin routes
require('./app/auth')(auth); // configure our auth routes
require('./app/api')(api); // configure our api routes

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);               

// console log to start app                    
console.log('Application is running on port ' + port);

// expose app           
exports = module.exports = app;