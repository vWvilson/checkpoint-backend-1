// const Message = require('../models/messageModel');


// exports.message_create = function (req, res) {
//   let message = new Message(
//       {
//           name: req.body.name,
//           date: req.body.date,
//           message: req.body.message

//       }
//   );


//   message.save().then(messageSaved =>{
      
//       res.send(messageSaved)
//   })
// };

// module.exports.message_details = function (req, res) {
//   Message.findById(req.params.id, function (err, message) {
//       ;
//   })
// };

// module.exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };