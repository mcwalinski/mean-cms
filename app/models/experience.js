// app/models/experience.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called.  This happens in routes.js
module.exports = mongoose.model('experience', new mongoose.Schema({
    company : {type : String, default: '', required : false },
    title : {type : String, default: '', required : false },
    summary  : {type : String, default: '', required : false },
    logo  : {type : String, default: '', required : false },
    order  : {type : Number, required : false }
}));