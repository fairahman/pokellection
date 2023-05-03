import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-tailwindcss-select";
import MainContainer from "./MainContainer";

// const options = [
//   { value: "pikachu", label: "pikachu" },
//   { value: "Butterfly", label: "Butterfly" },
//   { value: "Honeybee", label: "Honeybee" },
  
// ];

const Home = () => {

  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/allPokemon')
      .then(response => response.json())
      .then(data => {
        const newOptions = data.map(pokemon => ({
          value: pokemon.name,
          label: pokemon.name
        }));
        setOptions(newOptions);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (value) => {
    console.log("value:", value);
    setPokemon(value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="flex flex-col w-full max-w-screen-lg px-4 bg-white rounded-2xl drop-shadow-xl">
        <div className="flex items-center mb-6 px-4 py-4">
          <div className="w-1/3 mr-4 text-6xl">
            <Select
              value={pokemon}
              onChange={handleChange}
              options={options}

              isClearable
              isSearchable
            />
          </div>
          <div className="w-2/3">
            <MainContainer value={pokemon} />
          </div>
        </div>
        <div className="flex justify-between">
          <Link to="/login" className="text-blue-600 hover:underline">
            Click to view our login page
          </Link>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Click to view our signup page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
