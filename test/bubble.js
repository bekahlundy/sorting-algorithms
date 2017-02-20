const assert = require('chai').assert;
const { bubble } = require('../lib/bubble.js');

describe('Bubble Sort', () => {

  it('returns an array from the range', () => {
    assert.deepEqual(bubble([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
  })
});
