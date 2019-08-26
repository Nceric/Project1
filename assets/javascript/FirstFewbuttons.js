

document.querySelectorAll("button").forEach(function (node) {

    node.addEventListener("click", function () {

        const drink = event.target.id

        const cockTailQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink



        fetch(cockTailQueryUrl).then(function (response) {
            return response.json()
        }).then(function (responseJson) {
            const results = responseJson

            for (let i = 0; i < 3; i++) {


                const cockTail = results.drinks[i].strDrink;

                const recipeInstructions = results.drinks[i].strInstructions;

                const drinkDiv = document.createElement("div");
                drinkDiv.setAttribute("id","container");

                const cockTailDiv = document.createElement("p");
                cockTailDiv.setAttribute("id","name");
                cockTailDiv.innerHTML = cockTail;

                const recipeDiv = document.createElement("p");
                recipeDiv.setAttribute("id","instructions");
                recipeDiv.innerHTML = recipeInstructions;
                
                drinkDiv.append(cockTailDiv);

                drinkDiv.append(recipeDiv);
                document.getElementById("drink-names").prepend(recipeDiv);
                document.getElementById("drink-names").prepend(cockTailDiv);
               
                
                console.log(cockTail)
                console.log(recipeInstructions)

            }
            

        });


    });
});