const barList = document.getElementsByClassName('progress-bar')

function init() {
  for (let i = 0; i < barList.length; i++) {
    const limit = barList[i].getAttribute('data-limit'),
      color = barList[i].getAttribute('data-color')

    const innerBlock = document.createElement('div')
    
    innerBlock.style.backgroundColor = color

    barList[i].appendChild(innerBlock)
  }
}

/* Здесь можете поиграться :) */
async function fillUp() {
  for (let i = 0; i < barList.length; i++) {
    let counter = 0
    const result = new Promise(resolve => {
      let intervalId = setInterval(() => {
        if (counter === +barList[i].getAttribute('data-limit')) {
          clearInterval(intervalId)
          resolve('done')
        }
        barList[i].childNodes[0].style.width = `${counter}%`
        counter++
      }, 10)
    })
    await result
  }
}

init()
fillUp()