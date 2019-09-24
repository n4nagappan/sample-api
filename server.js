const express = require('express')
const app = express()
const port = 3000

app.get('/', getMessage)
app.post('/', saveMessage)


let message = "Default message"

function getMessage(req, res) {
    res.send(message) 
}

function saveMessage(req, res) {
    console.log("We are in Save message")
    console.log(req.query.message)

    message = req.query.message
    res.send(message) 
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))