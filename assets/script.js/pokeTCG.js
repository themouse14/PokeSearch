// Second API Call
async function testCall2() {
    await fetch("https://api.pokemontcg.io/v2/cards")
        .then(response => response.json())
        .then(cards => console.log(cards))


async function pokemonPrices(){
    fetch("https://api.pokemontcg.io/v2/cards?q=name:gardevoir", {
    "method": "GET"})
    .then(response => response.json())
    .then(prices => console.log(prices))
};
pokemonPrices();


=======
}

testCall2();          
>>>>>>> 3761e24401ca1803476a66934fdca461aa2f2a2d
