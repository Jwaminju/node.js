const express = require('express');
const router = express.Router()

var count = 0;
router.post('/', (req, res) => {
  const {data} = req.body

  if (data === 'ping') {
      count++;
      res.status(200).send('pong' + '(' + count +')')
      return
  }
  res.status(400).send(`Are you serious?, ${data}`)
 
})
module.exports = router

