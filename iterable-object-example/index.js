'use strict'

function toIterable(obj) {
  return {
    ...obj,
    [Symbol.iterator] () {
      const keys = Object.keys(this)
      const limit = keys.length
      const $this = this
  
      let counter = 0
  
      return {
        next() {
          if (counter < limit) {
            return {
              done: false,
              value: $this[keys[counter++]]
            }
          }
          return {
            done: true
          }
        }
      }
    }
  }
}

const person = {
  name: 'Alex',
  age: 25,
  city: 'Odessa'
}

const car = {
  model: 'BMW',
  getModel: () => this.model
}

for (let value of  toIterable(person)) {
  console.log(value)
}

for (let value of  toIterable(car)) {
  console.log(value)
}

console.log([...toIterable(person)])