// Parse input string and make shit happen
// Params:
//   input: input string from SMS
// Returns:
//
const twilio = require('./twilio');
const google_maps = require('./google_maps');
const google_search = require('./google_search');
const reg = /(?:(?:(?:(?:F|f)rom (.+)) (?:(?:T|t)o (.+)))|(?:(?:(?:(?:T|t)o(?!.*(?:T|t)o)) (.+)) (?:(?:F|f)rom (.+))))/g
const searchReg = /(?:(?:S|s)earch) (.+)/g

 async function parse(message_in, number) {
  let message_out = "Sorry, we couldn't understand that! Try 'directions from *location* to *destination*.'";
  let groups = reg.exec(message_in);
  let search = searchReg.exec(message_in);

  if (groups) {
    if (groups[1] && groups[2]) {
      message_out = await google_maps.get_directions(groups[1], groups[2]);
    } else if (groups[3] && groups[4]) {
      message_out = await google_maps.get_directions(groups[3], groups[4]);
<<<<<<< HEAD
    }
  } else if(search) {
    message_out = await google_search.get_result(search[1]);
=======
    // } else if (groups[2] || groups[4])
    //   message_out = 'Where are you at currently?'
    //}
>>>>>>> e8a20846138ea69bfc229f88880d5b7ff55e8061
  }

  console.log(message_out);
  twilio.sendMessage(message_out, number);
}

module.exports = {
  parse
}
