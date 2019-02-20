const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {type: String, required: true},
    time : { type : Date, default: Date.now }
});


// Export the model
module.exports = mongoose.model('Message', MessageSchema);
 

