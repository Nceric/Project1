const apiKey = "ebeBxEQ0lUv4b4YUNMdwXZyH6sPjKF8Fbg6xdwWp"
const foodItem = "Rum"

const url = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + foodItem + "&max=1&api_key=" + apiKey;

fetch(url).then(response => {
    return response.json()
}).then(responseJson => {
console.log(responseJson.list.item[0].ndbno)

const secondUrl = "https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key="+ apiKey + "&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=" + responseJson.list.item[0].ndbno;

fetch(secondUrl).then(response => {
    return response.json()
}).then(responseJson => {
    console.log(responseJson.report.foods[0].nutrients)
})
});
