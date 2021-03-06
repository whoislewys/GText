var express = require('express');
var router = express.Router();
const input = require('../src/input');

router.get('/', function(req, res, next) {
  res.json({message: "This is the only response that the server can give right now"})
});

router.post('/sms', (req, res) => {
  let body = req.body;

  message_in = body.Body;
  number = body.From;

  console.log(message_in)

  input.parse(message_in, number);

  res.status(200).end();
});

module.exports = router;
