const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']

const ingredientRefs = ingredients.map(elementContent => {
  const ingredientRef = document.createElement('li')
  ingredientRef.textContent = elementContent

  return ingredientRef
})

const ingredientsList = document.querySelector('#ingredients')

ingredientsList.append(...ingredientRefs)
