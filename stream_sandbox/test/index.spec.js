const assert = require('chai').assert
const {
  fibonacci,
  findVowels,
  anagram
} = require('../index')

describe('Find Vowels', function() {
  it('find vowels', function() {
    assert.equal(findVowels('Alabama'), 4)
  }) 

  it('fibonacci', function() {
    assert.equal(fibonacci(6), 13)
  }) 

  it('anagram', function() {
    assert.equal(anagram('finder', 'Friend'), true)
  }) 

})