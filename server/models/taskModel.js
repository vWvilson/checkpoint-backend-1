const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {type: String, required: true},
    time : { type : Date, default: Date.now },
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);
 
