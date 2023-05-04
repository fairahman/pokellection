
import React, { useState} from "react";
import { Link } from "react-router-dom";
import Select from "react-tailwindcss-select";
import MainContainer from "./MainContainer";

export default function Signup(props) {


	const[userName, setUserName] = useState()
	const[passWord, setPassWord] = useState()
	
	function validateForm() {
		return userName.length > 0 && passWord.length > 0
	}
	function handleSubmit(event) {
		event.preventDefault()
    fetch ("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: userName, password: passWord})
    }).then(response => response.json()).then(response => console.log(response))

    // setUserName(event.target.userName.value);
    // setPassWord(event.target.passWord.value);
    console.log("user name ",userName, "password ", passWord)
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
          <form className="flex flex-col" >
            <label for="userName" >User Name</label>
              <input type="text" name="userName" onChange={(e) => handleChangeUserName(e.target.value)}/>
            <label for="passWord" >Password</label>
              <input type="text" name="passWord" onChange={(e) => handleChangePassWord(e.target.value)}/>
            {/* <input type="submit" value="Submit" /> */}
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
	)
}