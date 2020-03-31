let block = document.querySelector('.block'), // get block element from DOM
  isFocused = false, // change to true if we click on block 
  blockCoords = null // current block coordinates

block.addEventListener('mousedown', e => {
  isFocused = true 
  const { top, left } = e.target.getBoundingClientRect()
  // set block coordinates based on relative block offset
  blockCoords = {
    x: e.clientX - left, 
    y: e.clientY - top
  }
})

document.addEventListener('mouseup', e => {
  // reset the flag
  isFocused = false
})

document.addEventListener('mousemove', e => {
  // move block only if it's on focus
  if (isFocused) {
    const { x, y } = blockCoords 
    block.style.top = `${e.clientY - y}px`
    block.style.left = `${e.clientX - x}px`
  }
})