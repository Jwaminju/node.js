const express = require('express');
const router = express.Router()

router.post('/', function(req, res){
  const body = req.body
  console.log(body.query)
  res.send(`pong`)
})

//app.use('/', router);
module.exports = router

/*app.get('/', function (req, res) {
  res.send('root');
});

app.get('/about', function (req, res) {
  res.send('about');
});

app.get('/random.text', function (req, res) {
  res.send('random.text');
});*/

