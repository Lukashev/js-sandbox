class Slider {

  constructor(slideIndex, options) {
    this.options = options || {}
    this.interval = null
    this.slideIndex = slideIndex
    this.sliderItems = document.getElementsByClassName('slider-item')
    this.controlItems = document.getElementsByClassName('slider__control-item')
    this.dotContainer = document.querySelector('.slider__dots')
    this.initControls()
    options.autoPlay
      ? this.runAutoPlay()
      : this.renderSlider()
  }

  runAutoPlay() {
    const { 
      options : { delay }, 
      changeSlideIndex
    } = this
    this.renderSlider()
    this.interval = setInterval(() => {
      changeSlideIndex.call(this, 1)()
    }, delay || 3000)
    document
    .querySelector('.slider__container')
    .addEventListener('mouseover', () => {
      clearInterval(this.interval)
    })
  }

  renderSlider() {
    const { 
      slideIndex, 
      sliderItems, 
      dotContainer,
      options: { fade = true } 
    } = this
    // first, hide all slides
    for (let i = 0; i < sliderItems.length; i++)
      sliderItems[i].style.opacity = '0'

    if (slideIndex === -1)
      this.slideIndex = sliderItems.length - 1
    if (slideIndex > sliderItems.length - 1)
      this.slideIndex = 0

    sliderItems[this.slideIndex]
      .style.opacity = '1'

    const dotItems = dotContainer.childNodes

    for (let i = 0; i < dotItems.length; i++)
      dotItems[i].classList.remove('active')

    dotItems[this.slideIndex].classList.add('active')
  }

  initControls() {
    const { controlItems, sliderItems, changeSlideIndex } = this
    for (let i = 0; i < controlItems.length; i++) {
      controlItems[i].addEventListener('click', changeSlideIndex.call(this, i))
    }
    for (let i = 0; i < sliderItems.length; i++) {
      this.renderDot(i)
    }
  }

  renderDot(index) {
    const { changeSlideIndex } = this
    const dotItem = document.createElement('div')
    dotItem.classList.add('slider__dots-item')

    dotItem.addEventListener('click', changeSlideIndex.call(this, null, index))

    this.dotContainer.appendChild(dotItem)
  }

  changeSlideIndex(controlIndex, slideIndex) {
    return () => {
      if (slideIndex !== undefined) {
        this.slideIndex = slideIndex
      } else {
        switch (controlIndex) {
          case 0:
            this.slideIndex = this.slideIndex - 1
            break;
          case 1:
            this.slideIndex = this.slideIndex + 1
            break;
        }
      }
      this.renderSlider()
    }
  }

}
