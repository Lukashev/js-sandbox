function anagram(str1 = '', str2 = '') {
  str1 = str1.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  str2 = str2.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")

  const result = str1.split('')
    .every(char => {
      return str2.split('')
        .find(_char => {
          return _char === char
        })
    })

  return result && (str1.length === str2.length)
}

function fibonacci(num) {
  let a = 1, b = 0, temp

  while (num >= 0) {
    temp = a
    a = a + b
    b = temp
    num--
  }

  return b
}

function findVowels(string) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u']
  return string
    .toLowerCase()
    .split('')
    .reduce((acc, current) => {
      return vowelsArr.includes(current)
        ? ++acc
        : acc
    }, 0)
}

function range(start, end, step = 1) {
  let arr = []
  for (
    let i = start; 
    step < 0 ? i >= end : i <= end; 
    i+=step) {
    arr.push(i)
  }
  return arr
}

function sum(arr) {
  return arr.reduce((acc, number) => {
    return acc + number
  }, 0)
}

function reverseArray(arr = []) {
  return arr.reduce((acc, _, i) => {
    return acc.concat(arr[arr.length - 1 - i])
  }, [])
}

function reverseArrayInPlace(arr) {
  const tmpLength = arr.length 
  for (let i = 0; i < tmpLength; i++) {
    arr[tmpLength + i] = arr[tmpLength - 1 - i]
  }
  arr.splice(0, tmpLength)
}

module.exports = {
  fibonacci,
  anagram,
  findVowels,
  range,
  sum,
  reverseArray,
  reverseArrayInPlace
}

