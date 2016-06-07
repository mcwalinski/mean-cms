// app/models/work.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our model
// module.exports allows us to pass this to other files when it is called.  This happens in routes.js
module.exports = mongoose.model('work', new mongoose.Schema({
    title : {type : String, default: '', required : false },
    summary  : {type : String, default: '', required : false },
    image  : {type : String, default: '', required : false },
    order  : {type : Number, required : false }
}));