let amount = 0

const input = document.querySelector('[type="number"]')
const buttonRender = document.querySelector('[data-action="render"]')
const buttonDestroy = document.querySelector('[data-action="destroy"]')
const elementBox = document.querySelector('#boxes')

console.log(buttonRender)
console.log(buttonDestroy)
console.log(input)

function createBoxes(amount) {
  let array = []
  let size = 30
  // создали див
  for (let i = 1; i < amount; i += 1) {
    const newBox = document.createElement('div')
    newBox.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`

    if (i === 1) {
      newBox.style.width = `${size}px`
      newBox.style.height = `${size}px`
    } else {
      size += 10
      newBox.style.width = `${size}px`
      newBox.style.height = `${size}px`
    }

    array.push(newBox)

    elementBox.append(...array)
  }

  // вставили дивы в контейнер
  elementBox.append()
}
function destroyBoxes() {}

input.addEventListener('input', event => {
  console.log(event.target.value)
  amount = event.target.value
  console.log(amount)
})

console.log(amount)
buttonRender.addEventListener('click', () => {
  console.log('click')
})
buttonDestroy.addEventListener('click', () => {})
