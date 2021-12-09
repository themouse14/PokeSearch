// Second API Call
async function testCall2() {
    await fetch("https://api.pokemontcg.io/v2/cards")
        .then(response => response.json())
        .then(cards => console.log(cards))

<<<<<<< HEAD
// API Key: 4c3f5891-21b8-4f5e-892e-a14841e797e7

async function testCall2() {
    await fetch("https://api.pokemontcg.io/v2/cards")
        .then(response => response.json())
        .then(types => console.log(types))

}

testCall2();

// const pokemonSearch = document.querySelector("#searchBtn")
// const dataTable = document.getElementById("datatable")

async function getPrices(){
    const searchValue = document.getElementById("datatable-search-input").value;
    // await fetch("https://api.pokemontcg.io/v2/cards?q=name:" + searchValue.toString()) 
    // // "method": "GET",
    // // "headers": 
    // //     "Authorization" : "Basic 4c3f5891-21b8-4f5e-892e-a14841e797e7",})
    // .then(response => response.json())
    // .then(prices => {
    //     console.log(prices.averageSellPrice);
    pokemon.card.all({ q: 'set.name:generations subtypes:mega' })
    .then(result => {
      console.log(result.data[0].name) // "Venusaur"
})

            const modalEl = document.getElementById("pokeModal"); //targetting modal
            const infoTCG = document.createElement("div"); 
            infoTCG.setAttribute("class", "tcginfo")
            console.log(infoTCG)
            modalEl.appendChild(infoTCG) // appended <div> element to the modalEl

            //for loop

            for (let i = 0; i < data.prices.averageSellPrice.length; i++) {
                console.log(data.prices.averageSellPrice[i].price.name)
                const price = document.createElement("p")
                price.textContent = data.prices.averageSellPrice[i].price.name
                infoTCG.appendChild(price)
            } 

            
}


// buttons for modal, eventlisteners

const modal = document.querySelector("pokeModal")
const buttonTCG = document.getElementById("seachBtnTCG"); //targetting button on website to pop up the modal
const span = document.getElementsByClassName("close")[0]; //target a close button

buttonTCG.onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none"
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

pokemonSearch.addEventListener("click", getPrices)



// Reference from previous API
// async function getPokemon() {
//     const searchValue = document.getElementById("datatable-search-input").value;
//     console.log(searchValue)
//     await fetch("https://pokeapi.co/api/v2/pokemon/" + searchValue.toString() + "/" )
//     .then(response => response.json())
//     .then(pokemon => {
//             console.log(pokemon.abilities);

//                 const abilityContainer = document.querySelector(".ability-container")
//                 const pokemonInfo = document.createElement("div")
//                 abilityContainer.textContent = ""
//                 pokemonInfo.setAttribute("class", "pokemoninfo")
//                 console.log(pokemonInfo)
//                 abilityContainer.appendChild(pokemonInfo)

//                 for (let i = 0; i < pokemon.abilities.length; i++) {
//                     console.log(pokemon.abilities[i].ability.name);
//                     const ability = document.createElement("p")
//                     ability.textContent = pokemon.abilities[i].ability.name
//                     pokemonInfo.appendChild(ability)
//                 }
                
                

                
//         })
//     }



// pokemonSearch.addEventListener("click", getPokemon);
=======
}

testCall2();          
>>>>>>> 151e4af2116c216380a03f71ed570b9ab2046c40
