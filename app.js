const express = require('express')
const bodyParser = require('body-parser')
//const cookieParser = requre('cookie-parser')

const app = express()
//app.set('view engine', 'pug')

const port = process.env.PORT | 3000
//const name = require('./views/index.html')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static('myapp'))
//app.use(cookieParser())
//app.use(count)

const pongRouter = require('./routes/index')
app.use('/', pongRouter)
//app.get('/', (res, req)=>{
    //res,render(name)
})
//count=

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
    console.log('Listening app at ${port}')
});