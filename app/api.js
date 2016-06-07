 // app/routes.js

// grab the notes model
    var skills = require('./models/skills');
    var about = require('./models/about');
    var work = require('./models/work');
    var experience = require('./models/experience');

    module.exports = function(api) {

        // route middleware that will happen on every request
        api.use(function(req, res, next) {

            // log each request to the console
            console.log(req.method, req.url);

            // continue doing what we were doing and go to the route
            next(); 
        });

        // route middleware to validate :name
        // auth.param('name', function(req, res, next, name) {
        //     // do validation on name here
        //     // blah blah validation
        //     // log something so we know its working
        //     console.log('doing name validations on ' + name);

        //     // once validation is done save the new item in the req
        //     req.name = name;
        //     // go to the next thing
        //     next(); 
        // });

        // Server routes.  Handles api calls, authentication etc

        // get skills api call
        api.get('/skills', function(req, res) {
            // use mongoose to get all skills in the database
            console.log('test api server call');
            skills.find(function(err, skills) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json({ skill : skills }); // return all skills in JSON format
            });
        });

        // get single note api call
        api.get('/notes/single/:_id', function(req, res) {
            // use mongoose to get all nerds in the database
            UserNotes.findOne({
                _id: req.params._id
                }, function(err, note) {
                    if (err)
                        res.send(err);
                    res.json({ userNote : note }); // return all favorites in JSON format
            });
        });

        // route to handle creating (app.post)
        api.post('/addNote', function(req, res) { 
            var newNote = new UserNotes(req.body);      // create a new instance of the notes model
            console.log(req.body);
            newNote.title = req.body.title;  // set the notes info (comes from the request)
            console.log(req.body.title);
            newNote.save(function(err, note) {
                if (err)
                res.send(err);
            console.log(err);
                res.json({ message: 'Note Added!' + note });
            });
        });
        
        // route to handle delete goes here based on object _id (app.delete)
        api.delete('/removeNote/:_id', function(req, res) { 
            
        UserNotes.remove({
            _id: req.params._id,
            }, function(err, note) {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully removed note'});
            });
        });

    };
