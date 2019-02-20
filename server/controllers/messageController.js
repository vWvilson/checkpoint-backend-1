const Message = require('../models/messageModel');




exports.list = function list(request, response) {  
  Message.find(function (err, mesg) {
    if (err) return console.error(err)        
    return response.json(mesg)
  })
}
exports.create = function create(request, response) {  
  const newMsg = new Message({
          name: req.body.name,
          time: req.body.time });
  newMsg.save(function (err, mesg) {
    if (err) return console.error(err)        
    return response.json(mesg)
  })
}




//   message.save().then(messageSaved =>{
      
//       res.send(messageSaved)    
//   })
// };
