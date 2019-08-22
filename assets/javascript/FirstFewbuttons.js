const rum = document.getElementById("");
const vodka = document.getElementById("");
const gin = document.getElementById("");
const tequila = document.getElementById("");
const cockTailQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
const drink = ""
const rumresults = document.getElementById("");

rum.addEventListener("click", function () {

    const cockTailQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum"
    fetch(cockTailQueryUrl)
  .then(response => response.json())
  .then(data => { 
      for (let i = 0 )
      rumresults.innerHTML = response.json.drinks[]
      

});