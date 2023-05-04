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
        <div id="Information" className="flex flex-col space-y-2">
        <div id="Name" className="text-2xl font-bold text-white bg-blue-500 rounded-full p-2">
          {props.name}
        </div>
        <div id="hp" className="flex items-center">
          <div className="w-24 h-4 bg-gray-300 rounded-full mr-2">
            <div className="h-full bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-700">{props.hp} HP</span>
        </div>
        <div id="Level" className="flex items-center">
          <div className="w-24 h-4 bg-gray-300 rounded-full mr-2">
            <div className="h-full bg-blue-500 rounded-full "></div>
          </div>
          <span className="text-gray-700">Level {props.level}</span>
        </div>
        <div id="Types" className="text-gray-700">Types: {props.type}</div>
        <div id="Rarity" className="text-gray-700">Rarity: {props.rarity}</div>
        <div id="Price" className="text-xl font-bold text-yellow-500">${props.price}</div>
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Save
        </button>
      </div>
      
    )
}