// Worker thread

function fibonaci(n) {
  if (n < 2) return n
  return fibonaci(n - 1) + fibonaci(n - 2)
}

this.addEventListener('message', message => {
  console.log('Get value from main thread', message)
  const { data } = message

  this.postMessage(fibonaci(data))
})