import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-tailwindcss-select";
import MainContainer from "./MainContainer";
import logo from '../PokeCollect-logo.png';
const Home = () => {

  const [allPokemon, setAllPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('/allPokemon')
      .then(response => response.json())
      .then(data => {

        const newOptions = data.map(poke => ({
          value: poke.name,
          label: poke.name.concat(': ', poke.rarity)
        }));

        setOptions(newOptions);
        setAllPokemon(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (value) => {
    console.log("option name:", value.value);
    setPokemon(allPokemon.find(obj => obj.name === value.value));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-yellow-200">
      <div className="w-1/2">
        <img src= {logo}/>
      </div>
      <div className="flex flex-col w-full max-w-screen-lg px-4 bg-white rounded-2xl drop-shadow-xl bg-opacity-70">
        <div className="flex mb-6 px-4 py-4">
          <div className="w-1/3 mr-4">
            <Select
              // value={value}
              onChange={handleChange}
              options={options}
              // isClearable
              primaryColor="indigo"
              isSearchable
            />
          </div>
          <div className="w-2/3 justify-center items-center bg-white bg-opacity-90 rounded-xl px-5 py-5">
            <MainContainer pokemon={pokemon}/>
          </div>
        </div>
        {/* <div className="flex justify-between">
          <Link to="/login" className="text-blue-600 hover:underline">
            this is login page
          </Link>
          <Link to="/signup" className="text-blue-600 hover:underline">
            signup page
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
