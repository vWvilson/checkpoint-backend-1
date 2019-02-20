const Order = require('../models/orderModel');

exports.list = function list(request, response) {  
    Order.find(function (err, order) {
      if (err) return console.error(err)        
      return response.json(order)
    })
  }
  exports.create = function create(request, response) {  
    const newOrder = new Order({
        amount: req.body.amount,
        time: req.body.time });
    newOrder.save(function (err, order) {
      if (err) return console.error(err)        
      return response.json(order)
    })
  }
  
  
  
  

