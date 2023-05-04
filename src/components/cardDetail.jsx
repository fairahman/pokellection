import React from 'react'

export default function cardDetail(props){ // changed props
    function handleClick() {
        //     console.log("props name", props.name);
             const data = {id: props.id}
        //     method: 'POST',
        //     body: {name: props.name},
        //     };
        // fetch('/save', options)
        // .then(data => data.json())
        // .then(data => console.log(data));
        fetch('/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(data => {
            console.log("returned data:", data);
          })
          .catch(error => {
            console.error(error);
          });
    }
    return(
    <div id="Information">
    <div id="Name">Name: {props.name}</div>
    <div id="hp">HP: {props.hp}</div>
    <div id="Level">Level: {props.level}</div>
    <div id="Types">Types: {props.type}</div>
    <div id="Rarity">Rarity: {props.rarity}</div>
    <div id="Price">Price: {props.price}</div>
    <button onClick={handleClick}>save</button>
    </div>
    )
}