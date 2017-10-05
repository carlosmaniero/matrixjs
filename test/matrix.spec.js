const matrix = require('../src/matrix.js')
var assert = require('assert')


describe('Matrix', function() {
  it('should return an empty matrix with the given size', function() {
    const myMatrix = matrix.createMatrix(5, 2)

    assert.equal(myMatrix.length, 5)

    assert.equal(myMatrix[0].length, 2)
    assert.equal(myMatrix[1].length, 2)
    assert.equal(myMatrix[2].length, 2)
    assert.equal(myMatrix[3].length, 2)
    assert.equal(myMatrix[4].length, 2)
  })
})