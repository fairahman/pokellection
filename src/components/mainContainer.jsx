import React, { useState } from "react";
import PokemonCard from "./pokemonCard"
import CardDetail from "./cardDetail"

export default function MainContainer() {
  
  const fakeProps = {
    name: 'Ampharos',
    types: ['Lightning'],
    hp: '130',
    cardmarket: {
        url: 'https://prices.pokemontcg.io/cardmarket/pl1-1',
        updatedAt: '2023/04/29',
        prices: {
          averageSellPrice: 2.71,
          lowPrice: 0.15,
        },
      },
      images: {
        small: 'https://images.pokemontcg.io/det1/1.png',
        large: 'https://images.pokemontcg.io/det1/1_hires.png',
      }
    };
  //initialize state to one pokemon fetched from server
  const [data, setData] = useState(fakeProps);
  //update state whenever data is fetched from server
  return(
  <div id="main">
      <div id="pokemonInfo">
        <PokemonCard card={data.images.small}/>
        <CardDetail name={data.name}price={data.cardmarket.prices.averageSellPrice}/>
      </div>
  </div>
  
  )
}