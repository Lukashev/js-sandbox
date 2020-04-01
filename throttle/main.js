// test function
function logger() {
  console.log(arguments[0]) // log the first argument
}

/**
  * Throttle example
  * 
  * @param {Function} func - your custom function
  * @param {number} second - time (ms)
  * @returns {Function} 
  */
function _throttle(func, time) {

  let savedArgs = null,
    isThrottled = false

  return function wrapper() {

    if (isThrottled) {
      savedArgs = arguments
      return
    }

    isThrottled = true

    func.apply(null, arguments)

    setTimeout(() => {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(null, savedArgs)
        savedArgs = null
      }
    }, time)
  }
}

const t = _throttle(logger, 500)

window.addEventListener('scroll', () => {
  t(window.scrollY) // call throttle wrapper if scroll event fires
})