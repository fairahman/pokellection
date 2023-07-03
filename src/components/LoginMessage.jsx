import React from 'react';
// import PokemonCard from "./pokemonCard"

const Message = () => {
  return (
		<div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-200 to-lime-200">
		<div className="flex flex-col items-center px-5 py-5 rounded-2xl drop-shadow-xl">
    <div class="alert shadow-lg">
    	<div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    	<span>Username or Password is incorrect.</span>
  	</div>
	</div>
	</div>
	</div>
  );
};

export default Message;