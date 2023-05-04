import React from 'react'

export default function cardDetail(props){ // changed props
    return(
    <div id="Information">
    <div id="Name">Name:{props.name}</div>
    <div id="hp">HP:{props.hp}</div>
    <div id="Rarity">Rarity:{props.rarity}</div>
    </div>
    )
}