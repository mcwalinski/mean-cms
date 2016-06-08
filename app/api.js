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

        // get skills api call
        api.get('/skills', function(req, res) {
            // use mongoose to get all skills in the database
            skills.find(function(err, skills) {
                console.log(skills);
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json({ data : skills }); // return all skills in JSON format
            });
        });

        // get work api call
        api.get('/work', function(req, res) {
            // use mongoose to get all skills in the database
            work.find(function(err, work) {
                console.log(work);
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json({ data : work }); // return all skills in JSON format
            });
        });

        // get experience api call
        api.get('/experience', function(req, res) {
            // use mongoose to get all experience docs in the database
            experience.find(function(err, experience) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json({ data : experience }); // return all skills in JSON format
            });
        });

        // get about api call
        api.get('/about', function(req, res) {
            // use mongoose to get all about docs in the database
            about.find(function(err, about) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                res.json({ data : about }); // return all skills in JSON format
            });
        });

        // get single skill api call
        api.get('/skills/single/:_id', function(req, res) {
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
        api.post('/addSkill', function(req, res) { 
            var newSkill = new skills(req.body);      // create a new instance of the skills model
            console.log(req.body);
            newSkill.title = req.body.title;  // set the skill info (comes from the request)
            console.log(req.body.title);
            newSkill.save(function(err, skill) {
                if (err)
                res.send(err);
            console.log(err);
                res.json({ message: 'Skill Added!' + skill });
            });
        });
        
        // route to handle delete goes here based on object _id (app.delete)
        api.delete('/removeSkill/:_id', function(req, res) { 
            
        newSkill.remove({
            _id: req.params._id,
            }, function(err, skill) {
                if (err)
                    res.send(err);
                res.json({ message: 'Successfully removed skill'});
            });
        });

    };
