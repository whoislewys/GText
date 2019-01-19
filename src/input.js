// Parse input string and make shit happen
// Params:
//   input: input string from SMS
// Returns:
//
const twilio = require('twilio');
const google_maps = require('google_maps');

async function parse(input) { 
  var message = await google_maps.get_directions(origin, destination);
  twilio.sendMessage(message, number);
}

module.exports = {
  parse
}
