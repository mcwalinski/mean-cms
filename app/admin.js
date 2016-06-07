 // app/admin.js

    // grab the needed models
    var admin = require('./models/admin');
    var skills = require('./models/skills');


    module.exports = function(admin) {

        // Frontend routes 
        // route to handle root request
        admin.get('/', function(req, res) {
            // load our admin/index.ejs file
            res.render('index'); 
        });

        // route to create request
        admin.get('/create', function(req, res) {
            // load our public/create.ejs file
            res.render('create'); 
        });

        // route to get help
        admin.get('/help', function(req, res) {
            // load our public/help.ejs file
            res.render('help'); 
        });


        
        // catch 404 and forward to error handler
        admin.get('*', function(req, res) {
          res.render('error', { title: 'Express' }); // load our public/error.ejs file
        });

    };
