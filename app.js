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


//��pp.post('/', (req, res) => {
   // req.on('ping')
    //res.send("pong")
    //console.log(req.body) //�ܼ� â�� ���, �����͐b ������
//})

//�ٵ� �ļ�, use get post listen

//const router = require('')
 
//Ŭ���̾�Ʈ 
//��Ե� ping�̶� ���ڿ� �����͸� -> get�̵� post��
//localhost�� ����� ������ ������,
//pong�̶� ������� �� �ִ� ���� �����
//node js�� �������� �����ϴ� ��

/*https://min-it.tistory.com/14
 */