const express = require('express')
var bodyParser = require('body-parser')
var db = require('./dbMethods')

const app = express()
const port = 5555

app.use(bodyParser.json())

app.get('/dictionary/:word', getMeaning)
app.post('/dictionary/:word', setMeaning)

async function getMeaning(req, res) {
    var row = await db.getWord(req.params.word)    
    res.send(row) 
}

async function setMeaning(req, res) {
    console.log( req.body )

    var row = await db.saveWord(req.params.word, req.body.meaning)
    res.send(row) 
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))