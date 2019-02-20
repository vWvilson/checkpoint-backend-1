const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // id: {type:Number},
    time : { type : Date, default: Date.now },
    amount: {type: String, required: true}    
    // orderTime: {type: String, required: true},
});



// Export the model
module.exports = mongoose.model('Order', OrderSchema);
 