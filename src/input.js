// Parse input string and make shit happen
// Params:
//   input: input string from SMS
// Returns:
//
const twilio = require('./twilio');
const google_maps = require('./google_maps');
const reg = /(?:(?:(?:(?:F|f)rom (.+)) (?:(?:T|t)o (.+)))|(?:(?:(?:T|t)o (.+)) (?:(?:F|f)rom (.+))))/g

 async function parse(input) {
  let groups = reg.exec(input)
    if (groups[0]) {
      if (groups[1]) {
        var message = await google_maps.get_directions(groups[1], groups[2]);
      } else {

      }

    }

  twilio.sendMessage(message, number);
  // return groups;
}

module.exports = {
  parse
}

// console.log(parse('Go from 343 e North st to 493 N 16th st'))
