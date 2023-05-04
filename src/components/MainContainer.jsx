import React, { useState } from "react";
import PokemonCard from "./pokemonCard"
import CardDetail from "./cardDetail"

export default function MainContainer(props) {
  
  // const fakeProps = {
  //   name: 'Ryan',
  //   types: ['Lightning'],
  //   hp: '130',
  //   cardmarket: {
  //       url: 'https://prices.pokemontcg.io/cardmarket/pl1-1',
  //       updatedAt: '2023/04/29',
  //       prices: {
  //         averageSellPrice: 2.71,
  //         lowPrice: 0.15,
  //       },
  //     },
  //     images: {
  //       small: 'https://images.pokemontcg.io/det1/1.png',
  //       large: 'https://images.pokemontcg.io/det1/1_hires.png',
  //     }
  //   };
  //initialize state to one pokemon fetched from server
  // const [data, setData] = useState(null);
  // setData(props)
  console.log('props',props)
  // console.log('data',data)
  //update state whenever data is fetched from server
  if(props.pokemon !== null) {
    return(
     
    <div id="main">
        <div id="pokemonInfo">
          
          <PokemonCard card={props.pokemon.images.small}/> 
          <CardDetail name={props.pokemon.name} price={props.pokemon.price} hp = {props.pokemon.hp} rarity = {props.pokemon.rarity} level = {props.pokemon.level} type = {props.pokemon.types}/>
        </div>
    </div>
    )
  } else {
    return (
      <div></div>
      )
  }
}