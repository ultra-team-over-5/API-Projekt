import "babel-polyfill";
import { removeChilds, noRecipesFound, renderResults } from "./api/elements";
//import  from "./api/edamam";

const searchInput = document.querySelector(".searchQuery");
const searchSubmit = document.querySelector(".submitButton");
const proxy = "https://cors-anywhere.herokuapp.com/";

async function getRecipes(input) {
  const searchValue = input.value;
  const appID = "36f30a0c";
  const apiKey = "1967e8a493e9ea463eaf1e654a98999d";
  const response = await fetch(
    `${proxy}https://api.edamam.com/search?q=${searchValue}&app_id=${appID}&app_key=${apiKey}`
  );
  const data = await response.json();

  return data;
}

searchSubmit.addEventListener("click", async () => {
  const apiResponse = await getRecipes(searchInput);
  renderResults(apiResponse.hits);
});
