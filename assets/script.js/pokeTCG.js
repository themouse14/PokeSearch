// Second API Call
async function testCall2() {
    await fetch("https://api.pokemontcg.io/v2/cards")
        .then(response => response.json())
        .then(cards => console.log(cards))

<<<<<<< HEAD
async function pokemonPrices(){
    fetch("https://api.pokemontcg.io/v2/cards/", {
    "method": "GET"})
    .then(response => response.json())
    .then(prices => console.log(prices))
};
pokemonPrices();
=======
}

testCall2();          
>>>>>>> 151e4af2116c216380a03f71ed570b9ab2046c40
