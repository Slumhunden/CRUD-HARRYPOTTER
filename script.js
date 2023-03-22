"use strict"
window.addEventListener("load", initApp);

function initApp() {
  // Pokémon
  const gyarados = {
    name: "Gyarados",
    description:
      "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    ability: "Intidmidate",
    image: "https://img.pokemondb.net/artwork/large/gyarados.jpg",
    footprint: null,
    dexindex: 130,
    type: "water",
    subtype: "flying",
    weaknesses: "electric, rock moves",
    gender: "male eller female",
    weight: 235000,
    height:650,
    generation: 1,
    gameversion:1,
    canEvolve: true,
    statsHP: 95,
    statsAttack:125,
    statsDefence: 79,
    statsSpecialAttack: 60,
    statsSpecialDefence:100,
    statsSpeed: 81,
  };
  function fetchJSON(){}
  
  function showPokemon(pokemon){}
  showPokemons(gyarados)
}
function showPokemons(image, name,dexindex,type) {
  const myHTML = /*HTML*/ `
<article><img src=${pokemon.image}>
                <h2>${pokemon.name}</h2>
                <p>${pokemon.house}</p>
                <p>${pokemon.dexindex}</p>
                <p>${pokemon.type}</p>
            </article>
            `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHTML);
}