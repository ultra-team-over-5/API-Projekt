const resultsElement = document.querySelector(".results");

export function noRecipesFound() {
  removeChilds(resultsElement);
  const noResults = document.createElement("div");
  noResults.className = "NoResults";
  noResults.innerHTML = "Found no Recipe. Please try something else!";
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
  const healthBox = document.createElement("div");
  const recipeUrl = document.createElement("button");
  const recipeLink = document.createElement("a");
  const recipeCalories = document.createElement("h4");

  recipeUrl.className = "recipeUrl";

  recipeCard.className = "recipeCard";
  recipeDescription.className = "recipeDescription";
  recipeImage.className = "recipeImage";
  recipeCard.appendChild(recipeImage);
  recipeCard.appendChild(recipeDescription);
  recipeCard.appendChild(recipeLink);
  recipeDescription.appendChild(recipeName);
  recipeDescription.appendChild(recipeCalories);
  recipeDescription.appendChild(recipeLink);
  recipeLink.appendChild(recipeUrl);
  recipeCalories.innerHTML = hit.recipe.calories.toFixed(0) + " kcal";
  recipeUrl.innerHTML = "click for recipe";
  recipeLink.setAttribute("href", hit.recipe.url);
  recipeLink.setAttribute("target", "_blank");
  recipeName.innerHTML = hit.recipe.label.toLowerCase();
  recipeImage.setAttribute("src", hit.recipe.image);
  resultsElement.appendChild(recipeCard);
  recipeDescription.appendChild(healthBox);
  hit.recipe.healthLabels.slice(0, 2).forEach(healthTag => {
    const healthButton = document.createElement("button");
    healthButton.innerHTML = healthTag;
    healthBox.appendChild(healthButton);
    healthButton.className = "healthButton";
    healthBox.className = "healthTag";
  });
}

export function renderResults(recipeList) {
  removeChilds(resultsElement);
  recipeList.hits.forEach(recipe => {
    renderCard(recipe);
  });
  const backToTop = document.createElement("a");
  resultsElement.appendChild(backToTop);
  backToTop.className = "backToTop";
  backToTop.setAttribute("href", "#");
  backToTop.innerHTML = `<i class="fas fa-arrow-circle-up"></i>`;
}

// export function renderNoResults(recipeList) {
//   removeChilds(resultsElement);
//   recipeList.hits(result => {
//     renderNoResults();
//   });
// }
