// Parse input string and make shit happen
// Params:
//   input: input string from SMS
// Returns:
//
const twilio = require('./twilio');
const google_maps = require('./google_maps');
const reg = /(?:(?:(?:(?:F|f)rom (.+)) (?:(?:T|t)o (.+)))|(?:(?:(?:T|t)o (.+)) (?:(?:F|f)rom (.+))))/g

 async function parse(message_in, number) {
  let message_out = "Sorry, we couldn't understand that! Try 'directions from *location* to *destination*.'";
  let groups = reg.exec(message_in)

  if (groups) {
    if (groups[1] && groups[2]) {
      message_out = await google_maps.get_directions(groups[1], groups[2]);
    } else if (groups[3] && groups[4]) {
      message_out = await google_maps.get_directions(groups[3], groups[4]);
    // } else if (groups[2] || groups[4])
    //   message_out = 'Where are you at currently?'
    //}
  }

  console.log(message_out);
  twilio.sendMessage(message_out, number);
}

module.exports = {
  parse
}
