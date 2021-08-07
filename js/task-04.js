let counterValue = 0

const buttonDecrement = document.querySelector('[data-action="decrement"]')
const buttonIncrement = document.querySelector('[data-action="increment"]')
const spanValue = document.querySelector('#value')

const decrement = () => {
  counterValue -= 1
  spanValue.innerHTML = counterValue
}
const incremen = () => {
  counterValue += 1
  spanValue.innerHTML = counterValue
}

buttonDecrement.addEventListener('click', decrement)
buttonIncrement.addEventListener('click', incremen)
