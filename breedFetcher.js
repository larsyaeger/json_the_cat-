const request = require('request');
const breed = process.argv.slice(2);
request(`https://api.thecata123pi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
	try {
		const bodyObject = JSON.parse(body);
	if (bodyObject.length === 0) {
		console.log(`${breed} doesn't seem to be a valid breed of kitty cat`)
	} else {
	console.log(bodyObject[0].description);
		} 
	} catch (err) {
		console.log(`There was an error, ${err}`);
	}
});