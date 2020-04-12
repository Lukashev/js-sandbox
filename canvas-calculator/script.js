const styles = {
  special: {
    bgColor: '#A9A9A9',
    fontColor: '#000000'
  },
  operation: {
    bgColor: '#FF8C00',
    fontColor: '#ffffff'
  },
  number: {
    bgColor: '#696969',
    fontColor: '#ffffff'
  }
}


const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


class Calculator {

  constructor(width, height, options) {

    this.width = width
    this.height = height
    this.options = options || {
      padding: width / 15,
      outputY: height / 3
    }
    this.result = 0
    this.buttonList = [
      [
        {
          label: 'AC',
          ...styles.special
        },
        {
          label: '+/-',
          ...styles.special
        },
        {
          label: '%',
          ...styles.special
        },
        {
          label: '÷',
          ...styles.operation
        },
      ],
      [
        {
          label: '7',
          ...styles.number
        },
        {
          label: '8',
          ...styles.number
        },
        {
          label: '9',
          ...styles.number
        },
        {
          label: 'x',
          ...styles.operation
        }
      ],
      [
        {
          label: '4',
          ...styles.number
        },
        {
          label: '5',
          ...styles.number
        },
        {
          label: '6',
          ...styles.number
        },
        {
          label: '-',
          ...styles.operation
        }
      ],
      [
        {
          label: '1',
          ...styles.number
        },
        {
          label: '2',
          ...styles.number
        },
        {
          label: '3',
          ...styles.number
        },
        {
          label: '+',
          ...styles.operation
        }
      ],
      [
        {
          label: '0',
          ...styles.number
        },
        {
          label: '.',
          ...styles.number
        },
        {
          label: '=',
          ...styles.operation
        },
      ]
    ]

    this._renderContainer()
    this._renderOutput()
    this._renderButtons()
  }

  _renderContainer() {
    const { width, height } = this
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, width, height)
  }

  _renderOutput() {
    const { options: { outputY, padding }, width, result } = this
    ctx.fillStyle = '#ffffff'
    ctx.font = `${padding * 2}px monospace`
    ctx.textAlign = 'right'
    ctx.fillText(result, width - padding, outputY)
  }

  _renderButtons() {
    const { buttonList, width, options: { padding, outputY } } = this

    for (let i = 0; i < buttonList.length; i++) {
      for (let j = 0; j < buttonList[i].length; j++) {
        const { label, bgColor, fontColor } = buttonList[i][j]

        const x = j * (width - padding) / 4 + padding * 2.2,
          y = (outputY + padding * 2) + (i * (width / 7 + padding))

        ctx.beginPath()

        ctx.arc(x, y, width / 7 - padding, 0, 2 * Math.PI)

        ctx.closePath()

        ctx.fillStyle = bgColor

        ctx.fill()

        ctx.fillStyle = fontColor
        ctx.font = `${padding}px monospace`
        ctx.textAlign = 'center'
        ctx.fillText(label, x, y + padding / 2.5)

      }
    }

  }

}

new Calculator(canvas.clientWidth, canvas.clientHeight)