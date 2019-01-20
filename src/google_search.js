const axios = require('axios')

const base_search = 'https://www.googleapis.com/customsearch/v1?key=***REMOVED***&cx=013537525589528080147:vd3pceyhst8&q='

function clean_result(result) {
	var out = result.data.items[0].snippet;
	return out;
}

function get_result(keywords) {
	var keywords_search = keywords.replace(' ', '&');
	return axios.get(base_search + keywords_search)
		.then(response => clean_result(response))
		.catch((err) => {
			console.log(err);
		});
}

module.exports = {
	get_result
};