const express = require('express')
const app = express()
const path = require('path')
let port = 80;

app.use('/static', express.static(__dirname + '/images'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/files/index.html'))
})

server = app.listen(port, () => {
    console.log(`site is running on ${port}`)
})