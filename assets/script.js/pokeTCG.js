// Second API Call

async function pokemonPrices(){
    fetch("https://api.pokemontcg.io/v2/cards?q=name:gardevoir", {
    "method": "GET"})
    .then(response => response.json())
    .then(prices => console.log(prices))
};
pokemonPrices();


