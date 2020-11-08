const express = require('express');
const router = express.Router()
const cookieParser = requre('cookie-parser');
router.use(cookieParser())

router.post('/', (req, res) => {
  let count = req.cookies.count;
  if(req.cookies.count){
    count = parseInt(req.cookies.count);    
  }else{
    count = 0;
  }
  const {data} = req.body

  if (data === 'ping') {
      //count++;
      res.cookies('count', count + 1);
      res.status(200).send('pong' + '(' + req.cookies.count +')')
      return
  }
  res.status(400).send(`Are you serious?, ${data}`)
 
})
module.exports = router

/*https://dev.to/sochix/counting-requests-in-your-node-js-express-application-4g8g
 https://hashcode.co.kr/questions/1516/nodejs-%EC%97%90%EC%84%9C-%EB%B0%A9%EB%AC%B8%EC%9E%90-%EC%88%98-%EA%B8%B0%EB%8A%A5%EC%9D%84-%EA%B5%AC%ED%98%84%ED%95%98%EB%A0%A4%EA%B3%A0-%ED%95%A9%EB%8B%88%EB%8B%A4
*/ 

/*
서버가 재시작 되더라도 count가 날아가지 않도록 하기 + 같은 서버에서 
res.render를 이용하여 localhost에 접속하는 첫 화면에 자기 이름이 담긴 html 파일 띄우기
*/