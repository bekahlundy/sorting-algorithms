const assert = require('chai').assert;
const { exampleFunction } = require('../lib/station-2.js');

describe('Arrays', () => {

  it('returns the length of the array', () => {
    const array = ['hello']
    assert.deepEqual(exampleFunction(array), 1)
  })

});
