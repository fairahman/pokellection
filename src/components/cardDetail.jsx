import React from 'react'

export default function cardDetail(props){ // changed props
    
    return(
    <div id="Information">
    <div id="Name">Name: {props.name}</div>
    <div id="hp">HP: {props.hp}</div>
    <div id="Level">Level: {props.level}</div>
    <div id="Types">Types: {props.type}</div>
    <div id="Rarity">Rarity: {props.rarity}</div>
    <div id="Price">Price: {props.price}</div>
    
    </div>
    )
}