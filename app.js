const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"

const result = document.getElementById("results");
const soundButton = document.getElementById("sound-button");
const searchButton = document.getElementById("search-button");

//event listener for the button
searchButton.addEventListener("click", () => {
    let searchInput = document.getElementById("search-input");
    console.log('Hello input here');
    console.log(searchInput);
});



