var express = require('express');
var router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: "This is the only response that the server can give right now"})
});

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body == 'hello') {
    twiml.message('Hi!');
  } else if (req.body.Body == 'bye') {
    twiml.message('Goodbye');
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server.'
    );
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

module.exports = router;
