const { assert } = require('chai')
const {
  fibonacci,
  findVowels,
  anagram,
  range,
  sum,
  reverseArray,
  reverseArrayInPlace
} = require('../index')

describe('Stream Sandbox', function () {
  it('find vowels', function () {
    assert.equal(findVowels('Alabama'), 4)
  })

  it('fibonacci', function () {
    assert.equal(fibonacci(6), 13)
  })

  it('anagram', function () {
    assert.equal(anagram('finder', 'Friend'), true)
  })

  it('sum of range', function () {
    assert.equal(sum(range(1, 10)), 55)
  })

  it('range with positive step', function () {
    assert.deepEqual(range(1, 10, 2), [
      1, 3, 5, 7, 9
    ])
  })

  it('range with negative step', function () {
    assert.deepEqual(range(5, 2, -1), [5, 4, 3, 2])
  })

  it('reverse array', function () {
    assert.deepEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"])
  })

  it('reverse array by mutation', function () {
    let arrayValue = [1, 2, 3, 4, 5]
    reverseArrayInPlace(arrayValue)
    assert.deepEqual(arrayValue, [5, 4, 3, 2, 1])
  })
})