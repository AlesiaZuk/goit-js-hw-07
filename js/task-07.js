const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

span.style.fontSize = '50px'

const fontSizeChange = event => {
  const inputValue = event.target.value
  span.style.fontSize = `${inputValue}px`
}

input.addEventListener('input', fontSizeChange)
