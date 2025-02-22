import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-tailwindcss-select";
import MainContainer from "./MainContainer";

export default function login(props) {

	const[userName, setUserName] = useState()
	const[passWord, setPassWord] = useState()
  const [stateIsVarified, setStateIsVarified] = useState(false);
  const navigate = useNavigate()

	function handleSubmit(event) {
		event.preventDefault()
    fetch ("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username: userName, password: passWord})
    }).then(response => response.json()).then(response => {
      if (response === true) {
        navigate("/home")
      }
      else {
        navigate("/loginMessage")
        // alert("User Name or Password is Incorrect")

      }
    })
    .catch(err => console.log(err))

    console.log("user name ",userName, "password ", passWord)
	}
  function handleSignUp(event) {
		event.preventDefault()
    fetch ("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // console.log("handleSignUp ", body)
      body: JSON.stringify({username: userName, password: passWord})
    }).then(response => response.json()).then(response => {
      console.log("response ", response)
      if (response) {
        navigate("/home")
      } else {
        navigate("/signUpMessage")
      }
    })
    .catch(err => console.log(err))
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
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-200 to-lime-200">
            <div className="flex flex-col items-center px-5 py-5 rounded-2xl drop-shadow-xl">
                <div className="flex flex-col w-full gap-4">
                        <label for="userName" >Username</label>
                        <input type="text" name="userName" onChange={(e) => handleChangeUserName(e.target.value)}/>
                        <label for="passWord" >Password</label>
                        <input type="password" name="passWord" onChange={(e) => handleChangePassWord(e.target.value)}/>
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button>
                        <button className="btn btn-outline btn-primary" type="submit" onClick={handleSignUp}>Signup</button>
                </div>
            </div>
        </div>
	)
}