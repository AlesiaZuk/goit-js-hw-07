const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

const test = event => {
  if (event.target.value.trim().length === 0) {
    span.textContent = 'незнакомец'
  } else {
    span.textContent = event.target.value
  }
}

input.addEventListener('input', test)
