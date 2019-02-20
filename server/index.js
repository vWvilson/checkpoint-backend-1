const express = require("express");
const bodyParser = require("body-parser");


const mongoose = require('mongoose');
mongoose.connect('mongodb://someuser:abcd1234@ds147118.mlab.com:47118/checkpoint', {useNewUrlParser: true});


const app = express();

// // Imports routes 
const MessageRoutes = require("./routes/messageRoute");
const TaskRoutes = require("./routes/taskRoute");
const OrderRoutes = require("./routes/orderRoute");


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(MessageRoutes);
app.use(OrderRoutes);
app.use(TaskRoutes);

// app.use('/messages',MessageRoutes);
// app.use('/orders',OrderRoutes);
// app.use(TaskRoutes);


app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages", err);
 }); 