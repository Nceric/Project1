
const getIngredients = obj => {

    const re = 'strIngredient';

    const keys = Object.keys(obj).filter(key => key.indexOf(re) > -1);

    const filter = keys.map(key => obj[key]).filter(ingred => ingred !== '' && ingred !== " ");

    const ingredientsList = document.createElement("UL");


    for (let i = 0; i < filter.length; i++) {
        const foodItem = filter[i]

        const apiKey = "ebeBxEQ0lUv4b4YUNMdwXZyH6sPjKF8Fbg6xdwWp"
        const url = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + foodItem + "&max=1&api_key=" + apiKey;

        fetch(url).then(response => {
            return response.json()
        }).then(responseJson => {
            console.log(responseJson.list.item[0].ndbno)
            const secondUrl = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=" + apiKey + "&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=" + responseJson.list.item[0].ndbno;

            fetch(secondUrl).then(response => {
                return response.json()
            }).then(responseJson => {
                console.log(responseJson.report.foods[0].nutrients)
                const foodItem = filter[i]

                const drinkCalories = responseJson.report.foods[0].nutrients[0].value

                console.log(drinkCalories)
               
                const filteredList = filter[i];

                const filteredListItem = document.createElement("li");

                filteredListItem.textContent = filteredList;

                ingredientsList.append(filteredListItem,drinkCalories)


                
                console.log(foodItem)
            })


        });

    }
    return ingredientsList;

}


document.querySelectorAll("button").forEach(node => {

    node.addEventListener("click", () => {

        const drink = event.target.id;

        const cockTailQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;

        fetch(cockTailQueryUrl).then(response => {
            return response.json()
        }).then(responseJson => {

            const results = responseJson;

            document.getElementById("drink-names").innerHTML = '';

            let wrapper;

            for (let i = 0; i < 3; i++) {



                wrapper = document.createElement('div');
                wrapper.classList.add('drink-wrapper');

                const cockTailName = results.drinks[i].strDrink;
                const recipeInstructions = results.drinks[i].strInstructions;
                const imgURL = responseJson.drinks[i].strDrinkThumb;




                const nameRecipeWrapper = document.createElement('div');
                nameRecipeWrapper.classList.add('name-recipe-wrapper');

                const cockTailDiv = document.createElement("p");
                cockTailDiv.setAttribute("id", "name");
                cockTailDiv.innerHTML = cockTailName;

                const imageDiv = document.createElement("img");
                imageDiv.setAttribute("src", imgURL);
                imageDiv.innerHTML = imgURL;

                const recipeDiv = document.createElement("p");
                recipeDiv.setAttribute("id", "instructions");
                recipeDiv.innerHTML = recipeInstructions;

                const ingredientsDiv = document.createElement("p");
                ingredientsDiv.setAttribute("id", "ingredients-list");

                const ingredients = getIngredients(results.drinks[i]);



                const ingredientsList = document.createElement("UL");
                ingredientsList.innerHTML = ingredients;



                ingredientsDiv.append(ingredients);
                nameRecipeWrapper.append(cockTailDiv, ingredientsDiv);
                wrapper.append(nameRecipeWrapper, recipeDiv, imageDiv);

                document.getElementById("drink-names").prepend(wrapper);

            }
        });
    });
});
