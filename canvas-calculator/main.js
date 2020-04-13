const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const styles = {
  special: {
    bgColor: '#A9A9A9',
    fontColor: '#000000',
    type: 'special'
  },
  operation: {
    bgColor: '#FF8C00',
    fontColor: '#ffffff',
    type: 'operation'
  },
  number: {
    bgColor: '#696969',
    fontColor: '#ffffff',
    type: 'number'
  }
}

class Calculator {
  constructor(width, height, options) {

    this.width = width
    this.height = height

    this.result = 0

    this.options = options || {
      padding: width / 15,
      outputHeight: height / 3
    }

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

    this._clearRect()
    this._setupEventListener()
  }

  _clearRect() {
    this._renderContainer()
    this._renderOutput()
    this._renderButtons()
  }

  _setupEventListener() {
    const { _getCursorPosition, buttonList } = this
    canvas.addEventListener('click', e => {
      const { x, y } = _getCursorPosition(e.target, e)

      const button = buttonList.reduce((acc, row) => {
        return acc.concat(row)
      }, [])
        .find(elem => {
          const { coords: { x1, x2, y1, y2 } } = elem
          return x >= x1 && x <= x2 && y >= y1 && y <= y2
        })

      if (button) {
        const { label, type } = button

        switch (type) {
          case 'special':
            this._btnSpecialClick(label)
            break
          case 'operation':
            this._btnOperationClick(label)
            break
          case 'number':
            this._btnNumberClick(label)
          default:
            return
        }
      }

    })
  }

  _btnSpecialClick(symbol) {
    const { _clearRect } = this
    switch (symbol) {
      case 'AC':
        this.result = 0
        break
      case '+/-':
        /* TODO */
        break
      case '%':
        /* TODO */
        break  
      default:
        return
    }
    _clearRect.call(this)
  }

  _btnOperationClick(symbol) {
    let _symbol = symbol

    if (symbol === 'x') _symbol = '*'
    if (symbol === '÷') _symbol = '/'

    if (symbol !== '=') {
      this.result += _symbol
    } else {
      const value = Number(eval(this.result))
      this.result = value.toFixed(value % 1 !== 0 ? 2 : 0)
    }
    this._clearRect()
  }

  _btnNumberClick(number) {
    if (!this.result) this.result = number
    else this.result += number
    this._clearRect()
  }

  _getCursorPosition() {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return { x, y }
  }

  _renderContainer() {
    const { width, height } = this
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, width, height)
  }

  _renderOutput() {
    const { width, options: { padding, outputHeight }, result } = this
    ctx.fillStyle = '#fff'
    ctx.font = `${padding * 2}px monospace`
    ctx.textAlign = 'right'
    ctx.fillText(result, width - padding, outputHeight)
  }

  _renderButtons() {
    const { width, options: { padding, outputHeight }, buttonList } = this
    for (let i = 0; i < buttonList.length; i++) {
      for (let j = 0; j < buttonList[i].length; j++) {
        let { label, fontColor, bgColor, coords } = buttonList[i][j]

        const x = j * (width - padding) / 4 + padding * 2.2,
          y = (outputHeight + padding * 2) + (i * (width / 7 + padding)),
          arcSize = width / 7 - padding

        /* render circle */
        ctx.beginPath();


        ctx.arc(x, y, arcSize, 0, 2 * Math.PI);
        ctx.closePath()
        ctx.fillStyle = bgColor

        ctx.fill();

        ctx.fillStyle = fontColor
        ctx.font = `${padding}px monospace`
        ctx.textAlign = 'center'
        ctx.fillText(label, x, y + padding / 2.5)

        if (!coords) {
          this.buttonList[i][j].coords = {
            x1: x - arcSize,
            x2: x + arcSize,
            y1: y - arcSize,
            y2: y + arcSize
          }
        }
      }
    }
  }
}

new Calculator(canvas.clientWidth, canvas.clientHeight)
