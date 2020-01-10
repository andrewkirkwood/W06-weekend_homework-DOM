document.addEventListener('DOMContentLoaded', () => {
  const newRecipeForm = document.querySelector('#new-item-form')
  newRecipeForm.addEventListener('submit', handleNewItemFormSubmit)
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault()
  const recipeListItem = createReadingListItem(event.target)
  const recipeList = document.querySelector('#recipe-list')
  recipeList.appendChild(recipeListItem)

  event.target.reset()
}

const createNewRecipeListItem = function (form) {
  const recipeListItem = document.createElement('li')
  recipeListItem.classList.add('recipe-list-item')

  const name = document.createElement('h2')
  name.textContent = form.title.value
  recipeListItem.appendChild(name)

  return recipeListItem;

}
