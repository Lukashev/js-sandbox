let numbers = ['first', 'second', 'third'] // Array<string>
let responses = [] // array of responses

/* 
  I don't wanna deal with REAL API.
  I use setTimeout for this one
*/
async function fetchData(value, i) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, i * 1000)
  })
}

/* 
  Rewrite polyfill
*/
async function asyncForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    await callback(arr[i], i, arr)
  }
}

/* 
  entrypoint
*/
async function start() {
  await asyncForEach(numbers, async (item, i) => {
    const result = await fetchData(item, i)
    responses.push(result)
  })

  // waiting for all responses and log them after
  Promise.all(responses)
    .then(data => console.log('Done: ', responses))
    .catch(console.error)
}

// call entrypoint
start()