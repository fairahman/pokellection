import React from 'react'

export default function cardDetail(props){ // changed props
    function handleClick() {
        
        const data = {id: props.id}
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
        <div id="Information" className="flex flex-col gap-3 w-full px-4">

            <div id="Name" className="flex text-2xl font-bold justify-center items-center text-white bg-blue-500 rounded-full">
                {props.name}
            </div>

            <div id="hp" className="flex flex-row flex-wrap items-center">
                    <div className="w-20 h-4 bg-green-300 rounded-full mr-2" style={{width: props.hp/2 + '%'}}></div>
                    <span className="text-gray-700">HP {props.hp}</span>
            </div>

            <div id="Level" className="flex flex-row flex-wrap items-center">
                <div className="w-24 h-4 bg-yellow-300 rounded-full mr-2" style={{width: props.level + '%'}}></div>
                <span className="text-gray-700">Level {props.level}</span>
            </div>


            <div id="Types" className="badge badge-primary badge-outline text-gray-700">Types: {props.type}</div>
            <div id="Rarity" className="badge badge-primary badge-outline text-gray-700">Rarity: {props.rarity}</div>
            <div id="Price" className="text-xl font-bold text-yellow-500"> Price: $ {props.price}</div>

            <button onClick={handleClick} className="px-4 py-2 btn btn-outline btn-primary">
                Save
            </button>
      </div>
      
    )
}