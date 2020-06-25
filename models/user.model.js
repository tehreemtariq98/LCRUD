const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String },
    email: {type: String},
    password: {type:String},
});


// Export the model
module.exports = mongoose.model('User', userSchema);
