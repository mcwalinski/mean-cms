// app/models/about.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called.  This happens in routes.js
module.exports = mongoose.model('about', new mongoose.Schema({
    title : {type : String, default: '', required : false },
    summary  : {type : String, default: '', required : false },
    fa  : {type : String, default: '', required : false },
    order  : {type : Number, required : false }
}));