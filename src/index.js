import "babel-polyfill";

const searchQuery = "pizza";
const appID = "36f30a0c";
const apiKey = "1967e8a493e9ea463eaf1e654a98999d";

const bspLink = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appID}c&app_key=${apiKey}`;

console.log(bspLink);
