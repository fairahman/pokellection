import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Input }
import Select from "react-tailwindcss-select";
// import Form from "react-tailwindcss-form";
import MainContainer from "./MainContainer";

export default function login(props) {


	const[userName, setUserName] = useState()
	const[passWord, setPassWord] = useState()
	
	// function validateForm() {
	// 	return userName.length > 0 && passWord.length > 0
	// }
  const [stateIsVarified, setStateIsVarified] = useState(false);

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
    }).then(response => response.json()).then(response => console.log("end of the handle submit"))

    // setUserName(event.target.userName.value);
    // setPassWord(event.target.passWord.value);
    console.log("user name ",userName, "password ", passWord)
	}
  const navigate = useNavigate()

  useEffect(() => {
    // const navigate = useNavigate()
    if (stateIsVarified) {navigate("/home")}
  },[stateIsVarified])



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
              <input type="password" name="passWord" onChange={(e) => handleChangePassWord(e.target.value)}/>
            {/* <input type="submit" value="Submit" /> */}
            <button type="submit" onClick={handleSubmit}>Login</button>
            <button type="sumbit" onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
	)
}

// "flex items-center mb-6 px-4 py-4"
