const fetchBreedDescription = (breedName, callback) => {
	const request = require('request');
	//const breed = process.argv.slice(2);
	request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
		//console.log(response.body.length);
		if (error) {
			callback(`There was an error, ${error}`, null);
		} else {
			if (JSON.parse(response.body).length === 0) {
				callback(null, `${breedName} doesn't seem to be a valid breed of kitty cat`)
			} else {
				const bodyObject = JSON.parse(response.body);
				callback(null, bodyObject[0].description)
			}
			//console.log(bodyObject[0].description);
			//	callback(null, response)
		}
	
	
	
	
	// 	try {
	// 		const bodyObject = JSON.parse(body);
	// 	if (bodyObject.length === 0) {
	// 		console.log(`${breed} doesn't seem to be a valid breed of kitty cat`)
	// 	} else {
	// 	console.log(bodyObject[0].description);
	// 		} 
	// 	} catch (err) {
	// 		console.log(`There was an error, ${err}`);
	// 	}
	// });
});
}
module.exports = { fetchBreedDescription };