// JavaScript source code
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT | 3000


app.use(bodyParser.urlencoded({extended: ture})) //Q*
app.use(bodyParser.json())

app.use(express.static('myapp'))

const pongRouter = require('./routes/index')
app.use('/', pongRouter)

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
    console.log('Listening app at ${port}')
});

