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
// export function createHealthTags(healthTags) {
//   healthTags.forEach(healthTag => {
//     const healthBox = document.createElement("div");
//     const healthButton = document.createElement("button");
//     healthButton.innerHTML = healthTag;
//     healthBox.appendChild(healthButton);
//     healthBox.className = "healthTag";
//   });

export function renderResults(recipeList) {
  removeChilds(resultsElement);
  recipeList.hits.forEach(recipe => {
    renderCard(recipe);
  });
}
