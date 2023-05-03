import React, { useState} from "react";
import { Link } from "react-router-dom";
// import { Input }
import Select from "react-tailwindcss-select";
// import Form from "react-tailwindcss-form";
import MainContainer from "./MainContainer";

export default function login(props) {


	const[userName, setUserName] = useState(props)
	const[passWord, setPassWord] = useState(props)
	
	function validateForm() {
		return userName.length > 0 && passWord.length > 0
	}
	function handleSubmit(event) {
		event.preventDefault()
	}
	const handleChangeUserName = (value) => {
		console.log("value:", value);
		setUserName(value);
	};
  const handleChangePassWord = (value) => {
		console.log("value:", value);
		setPassWord(value);
	};
	return (
		<div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="flex flex-col w-full max-w-screen-lg px-4 bg-white rounded-2xl drop-shadow-xl">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="w-2/3 mt-4 text-6xl">
            <Input
              onChange={handleChangeUserName}
              isClearable
            />
          </div>
          <div className="w-2/3 mt-4 text-6xl">
            <Select
              onChange={handleChangePassWord}
              isClearable
            />
          </div>
        </div>
      </div>
    </div>
	)
}

// "flex items-center mb-6 px-4 py-4"
