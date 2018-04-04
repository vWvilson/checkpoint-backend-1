const express = require('express')
const app = express()

app.get('/newComments', (req, res) => res.send('24'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))