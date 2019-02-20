// const Order = require('../models/orderModel');


// module.exports.order_create = function (req, res) {
//   let order = new Order(
//       {
//         orderDate: req.body.orderDate,
//         orderTime: req.body.orderTime,
//         amount: req.body.amount         
          
//       }
//   );


//   order.save(function (err,next) {
      
//       res.send('Order created successfully')
//   })
// };

// module.exports.order_details = function (req, res) {
//   Order.findById(req.params.id, function (err, order,next) {
//       res.send(order);
//   })
// };

