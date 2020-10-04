// JavaScript source code
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('myapp'))

const stringRouter = require('./routes/index')
app.use('/', stringRouter)

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
    console.log('Listening app at ${port}')
});


/* 
클라이언트-서버
클라이언트 측에서 API post와 put 메소드로 요청시 
body를 포함하여 보낼 수 있는데 이값을 서버 측에서 받는다고 그대로 사용할 수 있는게 아니다

바디를 보내면 바디의 데이터를 쓸 수 있다

파싱(맞춤으로 데이터를 가공하는 것)
바디를 보낼 때 바디 파서도 같이 있어야 바디가 읽힘
*/
