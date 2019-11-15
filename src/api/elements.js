const resultsElement = document.querySelector(".results");

export function noRecipesFound() {
  removeChilds(resultsElement);
  const noResults = document.createElement("h2");
  noResults.innerHTML = "No matches. Sad :(";
  resultsElement.appendChild(noResults);
}

export function removeChilds(parent) {
  parent.innerHTML = "";
}

export function renderCard(hit) {
  const recipeCard = document.createElement("div");
  const recipeName = document.createElement("h3");
  const recipeImage = document.createElement("img");
  recipeCard.appendChild(recipeName);
  recipeCard.appendChild(recipeImage);
  recipeName.innerHTML = hit.recipe.label;
  recipeImage.setAttribute("src", hit.recipe.image);
  resultsElement.appendChild(recipeCard);
}

export function renderResults(recipeList) {
  removeChilds(resultsElement);
  recipeList.hits.forEach(recipe => {
    renderCard(recipe);
  });
}
