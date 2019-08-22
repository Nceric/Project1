function myFunction() {
    var element = document.getElementById("myBtn");
    element.classList.add("spinner-border", "spinner-border-sm","m-2");
}

// @ts-check

// Search cocktail by name
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// List all cocktails by first letter
// https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
// Search ingredient by name
// https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
// Lookup full cocktail details by id
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
// Lookup ingredient by ID
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552



// Grocery Products

// Grocery product endpoints will almost always give you a product id {ID}. With that and the imageType {TYPE} you can build the complete image paths depending on your needs.

// The base path for image URLs is https://spoonacular.com/productImages/. Once you know the product id {ID} and image type {TYPE}, you can complete that path to show an image. The complete path follows this pattern https://spoonacular.com/productImages/{ID}-{SIZE}.{TYPE}, where {SIZE} is one of the following:

// 90x90
// 312x231
// 636x393

const apiKey = "apikey=9b8593c8d1ac4cc7967acf03f4722027"

const ingredient = []

const size = []



const spoonifyQueryURL = "spoonacular.com/productImages/" + ingredient + "-" + size + ".jpeg" + ",?" + apiKey


// Ingredients
// Endpoints like the ingredient autosuggestion will only give you an image name. You have to build the full URL by adding the base path to the beginning. The base path for ingredient images is https://spoonacular.com/cdn/ingredients_{SIZE}/, where {SIZE} is one of the following:

// 100x100
// 250x250
// 500x500
// So for "apple.jpg" the full path for 100x100 is https://spoonacular.com/cdn/ingredients_100x100/apple.jpg






fetch(spoonifyQueryURL) 
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});


// Grocery Products

// Grocery product endpoints will almost always give you a product id {ID}. With that and the imageType {TYPE} you can build the complete image paths depending on your needs.

// The base path for image URLs is https://spoonacular.com/productImages/. Once you know the product id {ID} and image type {TYPE}, you can complete that path to show an image. The complete path follows this pattern https://spoonacular.com/productImages/{ID}-{SIZE}.{TYPE}, where {SIZE} is one of the following:

// 90x90
// 312x231
// 636x393
