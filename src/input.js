// Parse input string and make shit happen
// Params:
//   input: input string from SMS
// Returns:
//
const twilio = require('./twilio');
const google_maps = require('./google_maps');
const reg = /(?:(?:(?:(?:F|f)rom (.+)) (?:(?:T|t)o (.+)))|(?:(?:(?:T|t)o (.+)) (?:(?:F|f)rom (.+))))/g

 async function parse(message_in, number) {
  let groups = reg.exec(message_in)
    if (groups[0]) {
      if (groups[1]) {
        var message_out = await google_maps.get_directions(groups[1], groups[2]);
      } else {
        var message = await google_maps.get_directions(groups[3], groups[4]);
      }
    } else {
      message_out = "Sorry, we couldn't understand that! Try 'directions from *location* to *destination*.'"
    }

  console.log(message_out);
  twilio.sendMessage(message_out, number);
  // return groups;
}

module.exports = {
  parse
}

// console.log(parse('Go from 343 e North st to 493 N 16th st'))
