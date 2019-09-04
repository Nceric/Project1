
const getIngredients = obj => {

    const re = 'strIngredient';

    const keys = Object.keys(obj).filter(key => key.indexOf(re) > -1);

    const filter =  keys.map(key => obj[key]).filter(ingred => ingred !== '' && ingred !== " ");

    const ingredientsList = document.createElement("UL");

    for (let i =0; i<filter.length; i++){

        const filteredList = filter[i];

        const filteredListItem = document.createElement("li");

        filteredListItem .textContent = filteredList;

        ingredientsList.append(filteredListItem)

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
                console.log(ingredients);

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
