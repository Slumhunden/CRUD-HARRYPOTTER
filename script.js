"use strict";
window.addEventListener("load", initApp);

async function initApp() {

  const pokemons = await getPokemon("pokemons.json");
  for (const pokemon of pokemons){
    
    showPokemon(pokemon);
  }
}
async function getPokemon(url){
  const response = await fetch (url)
  const data = await response.json()
  return data 
}
function showPokemon(pokemon) {
  const myHTML = /*HTML*/ `
            <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>Name: ${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                <p>Dexindex: ${pokemon.dexIndex}</p>
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
        document.querySelector("#dialog-dexIndex").textContent = "#" + pokemon.dexindex;
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