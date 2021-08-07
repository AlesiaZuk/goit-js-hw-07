const input = document.querySelector('#validation-input')

input.addEventListener('input', event => {
  if (event.target.value.length !== 0) {
    if (event.target.value.length !== Number(input.dataset.length)) {
      input.classList.add('invalid')
    } else {
      input.classList.remove('invalid')
      input.classList.add('valid')
    }
  } else {
    input.classList.remove('invalid')
    input.classList.remove('valid')
  }
})
