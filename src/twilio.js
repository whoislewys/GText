// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const fromNumber = '***REMOVED***';
const client = require('twilio')(accountSid, authToken);

// Send a message using the Twilio API
// Params:
//   messageText: input message to send
//   number: phone number to send the text to
// Returns:
//   void
function sendMessage(messageText, number) {
  client.messages
    .create({
       body: messageText,
       from: fromNumber,
       to: number
     })
    .then(message => console.log(message.sid))
    .done();
}

module.exports = {
  sendMessage
}
