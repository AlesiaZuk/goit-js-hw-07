const categoriesList = document.querySelector('#categories')
const categoriesItems = categoriesList.querySelectorAll('.item')

const categoriesAmount = categoriesList.children.length
console.log(`В списке ${categoriesAmount} категории.`)

categoriesItems.forEach(elem => {
  console.log('Категория : ', elem.firstElementChild.textContent)
  console.log('Количество эелментов : ', elem.lastElementChild.children.length)
})
