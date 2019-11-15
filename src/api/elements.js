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
  const recipeImage = document.createElement("img");
  const recipeDescription = document.createElement("div");
  const recipeName = document.createElement("h3");

  const recipeUrl = document.createElement("button");
  const recipeLink = document.createElement("a");
  const recipeCalories = document.createElement("h4");
  const healthTags = document.createElement("div");
  recipeUrl.className = "recipeUrl";
  recipeCard.className = "recipeCard";
  recipeDescription.className = "recipeDescription";
  recipeImage.className = "recipeImage";
  recipeCard.appendChild(recipeImage);
  recipeCard.appendChild(recipeDescription);
  recipeCard.appendChild(recipeLink);
  recipeDescription.appendChild(recipeName);
  recipeDescription.appendChild(recipeLink);
  recipeDescription.appendChild(recipeCalories);
  recipeLink.appendChild(recipeUrl);
  recipeCalories.innerHTML = hit.recipe.calories.toFixed(0) + " kcal";
  recipeUrl.innerHTML = "Cook this!";
  recipeLink.setAttribute("href", hit.recipe.url);
  recipeLink.setAttribute("target", "_blank");
  recipeName.innerHTML = hit.recipe.label.toLowerCase();
  recipeImage.setAttribute("src", hit.recipe.image);
  resultsElement.appendChild(recipeCard);
}

export function renderResults(recipeList) {
  removeChilds(resultsElement);
  recipeList.hits.forEach(recipe => {
    renderCard(recipe);
  });
}
