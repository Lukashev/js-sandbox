// function getPersonInfo(name, city, age) {
//   return [name, city, age]
// }

// console.log(getPersonInfo('John', 'Kyiv', 25))

// function getPersonInfo(name) {
//   return function(city) {
//     return function(age) {
//       return [name, city, age]
//     }
//   }
// }

// console.log(getPersonInfo('John')('Kyiv')(25))

// function getPersonInfo(name) {
//   return function(city, age) {
//     return [name, city, age]
//   }
// }

// const getter = getPersonInfo('Alex')
// console.log(getter('Odessa', 26))

// function getPersonInfo(name, city, age) {
//   return [name, city, age]
// }

// function carry(fn) {
//   return function inner(...args1) {
//     if (fn.length === args1.length) {
//       return fn(...args1)
//     }
//     return function(...args2) {
//       return inner(...args1, ...args2)
//     }
//   }
// }

// const infoGetter = carry(getPersonInfo)
// console.log(infoGetter('John', 'Kyiv', 25))
// console.log(infoGetter('John')('Kyiv')(25))
// console.log(infoGetter('John', 'Kyiv')(25))