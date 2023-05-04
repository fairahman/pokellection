import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-tailwindcss-select";
import MainContainer from "./MainContainer";

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
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="flex flex-col w-full max-w-screen-lg px-4 bg-white rounded-2xl drop-shadow-xl">
        <div className="flex items-center mb-6 px-4 py-4">
          <div className="w-1/3 mr-4 text-6xl">
            <Select
              // value={value}
              onChange={handleChange}
              options={options}
              isClearable
              isSearchable
            />
          </div>
          <div className="w-2/3">
            <MainContainer pokemon={pokemon}/>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to="/login" className="text-blue-600 hover:underline">
            login page
          </Link>
          <Link to="/signup" className="text-blue-600 hover:underline">
            signup page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
