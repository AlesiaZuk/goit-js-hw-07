const input = document.querySelector('[type="number"]')
const buttonRender = document.querySelector('[data-action="render"]')
const buttonDestroy = document.querySelector('[data-action="destroy"]')
const elementBox = document.querySelector('#boxes')

const elementBoxObj = {
  amount: 0,
  boxSize: 30,

  getInputValue(event) {
    this.amount = event.target.value
  },

  createBoxes(amount) {
    amount = elementBoxObj.amount

    for (let i = 1; i <= amount; i += 1) {
      const newBox = document.createElement('div')

      const red = Math.floor(Math.random() * (255 - 0 + 1)) + 0
      const green = Math.floor(Math.random() * (255 - 0 + 1)) + 0
      const blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0

      newBox.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')'

      if (i === 1) {
        newBox.style.width = `${elementBoxObj.boxSize}px`
        newBox.style.height = `${elementBoxObj.boxSize}px`
      } else {
        newBox.style.width = `${(elementBoxObj.boxSize += 10)}px`
        newBox.style.height = `${(elementBoxObj.boxSize += 10)}px`
      }

      elementBox.append(newBox)
    }
  },

  destroyBoxes() {
    elementBox.innerHTML = ''
    input.value = ''
    elementBoxObj.boxSize = 30
  },
}

input.addEventListener('change', elementBoxObj.getInputValue.bind(elementBoxObj))
buttonRender.addEventListener('click', elementBoxObj.createBoxes.bind(elementBoxObj))
buttonDestroy.addEventListener('click', elementBoxObj.destroyBoxes.bind(elementBoxObj))
