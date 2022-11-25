// const { fetchBreedDescription } = require('../breedFetcher');
// const { assert } = require('chai');
// describe('fetchBreedDescription', async() => {
// 	it('returns a string description for a valid breed, via callback', (done) => {
// 		fetchBreedDescription('Siberian', (err, desc) => {
// 			assert.equal(err, null);

// 			const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

// 			assert.equal(expectedDesc, desc.trim());

// 			done();
// 		});
// 	// it('returns err on error and desc to be null', (err, desc) => {
// 	// 		assert.equal(desc, true);

// 	// 		const expectedErr = `${breed} doesn't seem to be a valid breed of kitty cat`;

// 	// 		assert.equal(expectedErr, err.trim());
// 	// 		done();
// 	// 	});
// 	});
// });

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      //console.log(desc);
			assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
	it('returns our error if we give it a non existent breed', (done) => {
		fetchBreedDescription('dog', (err, desc) => {
			assert.equal (err, null);

			const expectedErr = `dog doesn't seem to be a valid breed of kitty cat`

			assert.equal(desc, expectedErr);
			done();
		});
	});
});
