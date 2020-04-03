const form = document.getElementById('form'), // get form from DOM
  result = form.result // get disabled input from form cuz it has attribute 'name'
  
/**
  * Paranthesis balance example
  * 
  * @param {String} str - code pattern, etc. 
  * @returns {Boolean} 
  */  
function parenthesisBalance(str) {
  // declare list of parenthesis
  const list = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  let notMatched = []

  // remove spaces and letters
  const filtered = str.split('')
    .filter(char => Object.keys(list).some(key => {
      return char === key || list[key] === char
    }))
  
  const matchedQuantity = filtered.reduce((acc, item, i, arr) => {
    // get copy of array by using 'slice' if we meet opened brace and get match index
    const matchedIndex = arr
    .slice(list[item] ? i : 0)
    .findIndex(char => char === list[item])

    if (matchedIndex === -1) notMatched.push(notMatched)

    return matchedIndex !== -1 ? ++acc : acc
  }, 0) 

  return matchedQuantity === notMatched.length
}


form.addEventListener('submit', e => {
  e.preventDefault()
  
  // get string from textarea
  const text = form.textarea.value
  // reset textarea value
  form.textarea.value = ''

  const isBalanced = parenthesisBalance(text)
  // set boolean value to disabled input
  result.value = isBalanced
})