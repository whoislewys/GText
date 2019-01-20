api = '***REMOVED***'

const googleMapsClient = require('@google/maps').createClient({
	key: api,
	Promise: Promise
});

function parse(route) {
	var dur = '';
	var step = '';
	var out = '';
	var legs = route.legs;
	for (i in legs) {
		var steps = legs[i].steps;
		for (j in steps) {
			ii = Number(i) + 1;
			jj = Number(j) + 1;
			var num = '[' + (ii).toString() + '.' + (jj).toString() + '] ';

			dur = steps[j].distance.text;
			dur = ' (' + dur + ')';

			step = steps[j].html_instructions;
			clean_step = step.replace(/<[/|b^>]+>/g, '');
			clean_step = clean_step.replace(/&[nbsp^>]+;/g, ' ')
			clean_step_split = clean_step.split(/<[^>]+>/);
			
			out += '\n\n' + num + clean_step_split[0] + dur;
		}
	}
	return out
}

function get_directions(origin, destination) {
	return googleMapsClient.directions({
		origin: origin,
		destination: destination
	})
	.asPromise()
	.then(response => parse(response.json.routes[0]))
	.catch((err) => {
		console.log(err);
	});
}

module.exports = {
	get_directions
};