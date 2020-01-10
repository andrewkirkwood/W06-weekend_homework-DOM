document.addEventListener('DOMContentLoaded', () => {
  const newRecipeForm = document.querySelector('#new-item-form')
  newRecipeForm.addEventListener('submit', handleNewItemFormSubmit)

  const deleteAllButton = document.querySelector('#delete-button')
  console.log(deleteAllButton);

  deleteAllButton.addEventListener('click', handleDeleteAllClick)
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault()
  const recipeListItem = createRecipeListItem(event)
  const recipeList = document.querySelector('#recipe-list')
  recipeList.appendChild(recipeListItem)
  event.target.reset()
}

const createRecipeListItem = function (form) {
  const recipeListItem = document.createElement('li')
  recipeListItem.classList.add('recipe-list-item')

  const name = document.createElement('h2')
  name.textContent = form.target.name.value
  recipeListItem.appendChild(name)

  const category = document.createElement('h3')
  category.textContent = form.target.category.value
  recipeListItem.appendChild(category)

  const rating = document.createElement('h3')
  rating.textContent = form.target.ratingInput.value
  recipeListItem.appendChild(rating)

  return recipeListItem;

}

const handleDeleteAllClick = function (event) {
  const recipeList = document.querySelector('#recipe-list')
  recipeList.innerHTML = ''
}
