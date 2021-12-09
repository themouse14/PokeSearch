// Second API Call
async function testCall2() {
    await fetch("https://api.pokemontcg.io/v2/cards")
        .then(response => response.json())
        .then(cards => console.log(cards))

}

testCall2();          