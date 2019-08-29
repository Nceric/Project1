

document.querySelectorAll("button").forEach(function (node) {

    node.addEventListener("click", function () {

        const drink = event.target.id;

        const cockTailQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;

        fetch(cockTailQueryUrl).then(function (response) {
            return response.json()
        }).then(function (responseJson) {

            const results = responseJson;

            for (let i = 0; i < 3; i++) {

                const cockTail = results.drinks[i].strDrink;
                const recipeInstructions = results.drinks[i].strInstructions;
                const imgURL = responseJson.drinks[i].strDrinkThumb;

                const drinkDiv = document.createElement("div");
                drinkDiv.setAttribute("id", "container");

                const recipeContainerDiv = document.createElement("div");
                recipeContainerDiv.setAttribute("id", "instructions-container");

                const imageContainerDiv = document.createElement("div");
                imageContainerDiv.setAttribute("id", "image-container");

                const cockTailDiv = document.createElement("p");
                cockTailDiv.setAttribute("id", "name");
                cockTailDiv.innerHTML = cockTail;

                const imageDiv = document.createElement("img");
                imageDiv.setAttribute("src", imgURL);
                imageDiv.innerHTML = imgURL;

                const recipeDiv = document.createElement("p");
                recipeDiv.setAttribute("id", "instructions");
                recipeDiv.innerHTML = recipeInstructions;

                drinkDiv.append(cockTailDiv);
                recipeContainerDiv.append(recipeDiv);
                imageContainerDiv.append(imageDiv);

                document.getElementById("drink-names").prepend(cockTailDiv,imageDiv, recipeDiv);            
            }
        });
    });
});