exports.task = function(task){
    return fetch("/tasks", {
        body: JSON.stringify(task),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json()) 
}
exports.task = function(task){
    return fetch("/tasks", {
        body: JSON.stringify(task),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json()) 
}