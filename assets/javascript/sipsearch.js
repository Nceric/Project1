 // Example queryURL for Cocktail API
 const ingredients = ["Vodka", "Gin", "Whiskey", "Rum", "Tequila", "Brandy"];

 function displayDrinkInfo() {

     const ingredient = this.getAttribute("data-name");
     const queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;

     fetch(queryURL).then(function (response) {
         return response.json()
     }).then(function (responseJson) {
         console.log(responseJson);
         //create a div to hold the drinks
         const drinkDiv = document.createElement("div");
         drinkDiv.classList.add('ingredient');

         const name = responseJson.drinks;
         // Creating an element to have the drinks name displayed
         const pOne = document.createElement("p")
         pOne.innerHTML = name;

         // Display drink name
         drinkDiv.append(pOne);

         // Retrieving the URL for the image
         const imgURL = responseJson.drinks.strDrinkThumb;

         // Creating an element to hold the image
         const image = document.createElement("img")
         image.setAttribute("src", imgURL);

         // Appending the image
         drinkDiv.append(image);

         // Putting the new drinks above the previous drinks
         document.getElementById("ingredients-view").prepend(drinkDiv);

     });
 }

 function renderButtons() {
     // Deleting the buttons prior to adding new ingredients
     // (this is necessary otherwise you will have repeat buttons)
     document.getElementById("buttons-view").innerHTML = "";

     // Looping through the array of ingredients
     for (let i = 0; i < ingredients.length; i++) {

         // Then dynamically generating buttons for each ingredient in the array
         const a = document.createElement("button");
         // Adding a class of ingredient to our button
         a.classList.add("ingredient");
         // Adding a data-attribute
         a.setAttribute("data-name", ingredients[i]);
         // Providing the initial button text
         a.innerHTML = ingredients[i];
         // Adding the button to the buttons-view div
         document.getElementById("buttons-view").append(a);

         // Function for displaying the ingredient info
         a.addEventListener("click", displayDrinkInfo);
     }
 }

 // This function handles events where one button is clicked
 document.getElementById("add-ingredient").addEventListener("click", function (event) {
     event.preventDefault();

     // This line grabs the input from the textbox
     var ingredient = document.getElementById("ingredient-input").value.trim();

     // Adding the ingredient from the textbox to our array
     ingredients.push(ingredient);
     console.log(ingredients);

     // Calling renderButtons which handles the processing of our ingredient array
     renderButtons();
 });

 // Calling the renderButtons function to display the intial buttons
 renderButtons();