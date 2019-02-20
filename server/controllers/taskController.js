const Task = require('../models/taskModel');

exports.list = function list(request, response) {  
  Task.find(function (err, tasks) {
    if (err) return console.error(err)        
    return response.json(tasks)
  })
}
exports.create = function create(request, response) {  
  const newTask = new Task({
        task: request.body.task,
        time: request.body.time});
  newTask.save(function (err, tasks) {
    if (err) return console.error(err)        
    return response.json(tasks)
  })
}



