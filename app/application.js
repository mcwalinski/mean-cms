 // app/application.js

// grab the needed models
var application = require('./models/application');,
var skills = require('./models/skills');

    module.exports = function(app) {

        // Frontend routes 

        // route to handle root request
        app.get('/', function(req, res) {
            // load our public/index.ejs file
            res.render('index'); 
        });

        // route to handle note request
        app.get('/:noteId', function(req, res) {
            // load our public/note.ejs file and pass the note id
            res.render('note', { noteId: req.params.noteId }); 
        });

        // route to create request
        app.get('/history', function(req, res) {
            // load our public/create.ejs file
            res.render('history'); 
        });

        // route to get help
        app.get('/help', function(req, res) {
            // load our public/help.ejs file
            res.render('help'); 
        });

        // catch 404 and forward to error handler
        app.get('*', function(req, res) {
          res.render('error', { title: 'Express' }); // load our public/error.ejs file
        });

    };
