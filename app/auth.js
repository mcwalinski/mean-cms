 // app/routes.js

    // grab the notes model
    var user = require('./models/auth');


    module.exports = function(auth) {

        // route middleware that will happen on every request
        auth.use(function(req, res, next) {

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

       auth.route('/login')

        // show login
        .get(function(req, res) {
            res.send('this is the login form');
            console.log('this is the login form');
        })

        // process the login
        .post(function(req, res) {
            console.log('processing');
            res.send('processing the login form!');
            console.log('processing the login form');
        });



        

    };
