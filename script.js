"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  // Pokémon
  const gyarados = {
    // name: "Gyarados",
    // description:
    //   "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    // ability: "Intidmidate",
    // image: "https://img.pokemondb.net/artwork/large/gyarados.jpg",
    // footprint: null,
    // dexindex: 130,
    // type: "water",
    // subtype: "flying",
    // weaknesses: "electric, rock moves",
    // gender: "male eller female",
    // weight: 235000,
    // height: 650,
    // generation: 1,
    // gameversion: 1,
    // canEvolve: true,
    // statsHP: 95,
    // statsAttack: 125,
    // statsDefence: 79,
    // statsSpecialAttack: 60,
    // statsSpecialDefence: 100,
    // statsSpeed: 81,
  };
  const pokemon = await getPokemon();
  showPokemon(pokemon);
}
async function getPokemon(){
  const response = await fetch ("gyarados.json")
  const data = await response.json()
  return data 
}
function showPokemon(pokemon) {
  const myHTML = /*HTML*/ `
            <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>Name: ${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                <p>Dexindex: ${pokemon.dexindex}</p>
                <p>Subtype: ${pokemon.subtype}</p>
                </article>
                `;
                document.querySelector("#pokemon").insertAdjacentHTML("beforeend", myHTML);
                document
                  .querySelector("#pokemon article:last-child")
                  .addEventListener("click", pokemonClicked);

    function pokemonClicked() {
     showPokeModal(pokemon)
  }
}
function showPokeModal(pokemon){
        document.querySelector("#dialog-image").src = pokemon.image;
        document.querySelector("#dialog-name").textContent = "Name: " + pokemon.name;
        document.querySelector("#dialog-description").textContent = "Description: " +
          pokemon.description;
        document.querySelector("#dialog-ability").textContent = "Ability: " + pokemon.ability;
        document.querySelector("#dialog-footprint").textContent = "Footprint: " + pokemon.footprint;
        document.querySelector("#dialog-dexindex").textContent = "#" + pokemon.dexindex;
        document.querySelector("#dialog-type").textContent = "Type: " + pokemon.type;
        document.querySelector("#dialog-subtype").textContent = "Subtype: " + pokemon.subtype;
        document.querySelector("#dialog-weaknesses").textContent = "Weaknesses: " + pokemon.weaknesses;
        document.querySelector("#dialog-gender").textContent = "Gender: " + pokemon.gender;
        document.querySelector("#dialog-weight").textContent = "Weight: " + pokemon.weight;
        document.querySelector("#dialog-height").textContent = "Height: " + pokemon.height;
        document.querySelector("#dialog-generation").textContent ="Generation: " + pokemon.generation;
        document.querySelector("#dialog-gameversion").textContent = "Gameversion: " +
          pokemon.gameversion;
          const evolve = canEvolve(pokemon)
        document.querySelector("#dialog-canEvolve").textContent =evolve;
        document.querySelector("#dialog-statsHP").textContent ="HP: " + pokemon.statsHP;
        document.querySelector("#dialog-statsAttack").textContent = "Attack: " +
          pokemon.statsAttack;
        document.querySelector("#dialog-statsDefence").textContent = "Defence: " +
          pokemon.statsDefence;
        document.querySelector("#dialog-statsSpecialAttack").textContent = "Special Attack: " +
          pokemon.statsSpecialAttack;
        document.querySelector("#dialog-statsSpecialDefence").textContent = "Special Defence: " +
          pokemon.statsSpecialDefence;
        document.querySelector("#dialog-statsSpeed").textContent = "Speed: " + pokemon.statsSpeed;
        document.querySelector("#dialog-pokemonbox").showModal();
}
function canEvolve(pokemon){
  let evolve = "";
  if (pokemon.canEvolve){
    evolve = `${pokemon.name} can evolve`
  } else {
      evolve =`${pokemon.name} cannot evolve`
  }
  return evolve;
}