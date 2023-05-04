import React from 'react'

export default function cardDetail(props){ // changed props
    function handleClick() {
        
            const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.name),
            };
        fetch('/save', options)
        .then(data => data.json())
    }
    return(
    <div id="Information">
    <div id="Name">Name: {props.name}</div>
    <div id="hp">HP: {props.hp}</div>
    <div id="Level">Level: {props.level}</div>
    <div id="Types">Types: {props.types}</div>
    <div id="Rarity">Rarity: {props.rarity}</div>
    <div id="Price">Price: {props.price}</div>
    <button onClick={handleClick}>save</button>
    </div>
    )
}