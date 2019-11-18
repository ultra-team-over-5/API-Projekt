import "babel-polyfill";
import { removeChilds, noRecipesFound, renderResults } from "./api/elements";

const resultsElement = document.querySelector(".results");
const searchInput = document.querySelector(".searchQuery");
const searchSubmit = document.querySelector(".submitButton");
const startScreen = document.querySelector(".startScreen");
const cat = document.querySelector(".pusheen");
const cook = document.querySelector(".cook");

const main = document.querySelector(".main");
const proxy = "https://cors-anywhere.herokuapp.com/";

async function getRecipes(input) {
  const searchValue = input.value;
  const appID = "36f30a0c";
  const apiKey = "1967e8a493e9ea463eaf1e654a98999d";
  const response = await fetch(
    `${proxy}https://api.edamam.com/search?q=${searchValue}&app_id=${appID}&app_key=${apiKey}&from=0&to=50`
  );
  const data = await response.json();

  return data;
}

searchSubmit.addEventListener("click", async () => {
  main.appendChild(cat);
  removeChilds(resultsElement);
  cat.classList.add("show");
  const apiResponse = await getRecipes(searchInput);
  cat.classList.remove("show");
  removeChilds(startScreen);
  if (apiResponse.hits.length == 0) {
    noRecipesFound();
  } else renderResults(apiResponse);
});
