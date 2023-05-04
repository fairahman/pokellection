import React from 'react'

export default function cardDetail(props){ // changed props

    async function save(props) {
        try {
            const savePokemon = await fetch('/save', {
                method: POST,
                body: props
            })
        }
        catch(err) {
            console.log(err)
        }
    }

    return(
    <div id="Information">
    <div id="Name">Name:{props.name}</div>
    <div id="Price">Price:{props.price}</div>
    <button onClick = {save}></button>
    </div>
    )
}