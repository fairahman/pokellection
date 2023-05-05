import React from 'react';
import PokemonCard from "./pokemonCard"

const Deck = () => {

  let pokemons;
  fetch('/getSavedPoke')
  .then(data => {
     pokemons = data.map((pokemon, index) =>  (
      <div key={index}>
          <PokemonCard card = {pokemon.images.small}/>
      </div>)
    )
  })

  return (
    <div>
      <h1>Deck Page</h1>
      {pokemons}
    </div> 
  );
};

export default Deck;