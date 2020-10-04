// JavaScript source code
const express = require('express')
//const bodyParser = require('body-parser')

const app = express()
const port = 8000
app.get('/ping', function (req, res) {
    res.send('pong')
})

app.listen(port, () => {
    console.log(`Listening app at http://localhost:${port}`)
})



//const pongRouter = require('./routes/index')
//app.use('/ping', pongRouter)



//app.use(bodyParser().json)
//app.use(bodyParser.urlendcoded({extended: false}))

//app.use(express.static('nodejs'))

//const bookRouter = require('./routes/index')
//app.use('/book', bookRouter)

//document.getElementsByName('ping')


//ㅁpp.post('/', (req, res) => {
   // req.on('ping')
    //res.send("pong")
    //console.log(req.body) //콘솔 창에 출력, 데이터륿 보내면
//})

//바디 파서, use get post listen

//const router = require('')
 
//클라이언트 
//어떻게든 ping이란 문자열 데이터를 -> get이든 post든
//localhost에 띄워진 서버에 보내고,
//pong이란 응답받을 수 있는 서버 만들기
//node js가 웹서버로 동작하는 것

/*https://min-it.tistory.com/14
 */