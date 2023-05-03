import React, {useEffect, useState, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
// importing three diffrent hooks from React

import Home from "./components/Home.jsx"
import Login from "./client/components/Login.jsx"
import Signup from "./components/Signup.jsx"

import MainContainer from './client/containers/mainContainer';
// import LoginContainer from './client/components/Login';

import './styles.css';

// we are declaring the function we're going export default here
// inside we are defining the login .. this is the react component that will render
// there's no point in taking in props here as it's the top component and is therefore not receiving any freakin' prop!


/*
export default function App(props) {

    // useRef here is a React hook .. by using useRef we update the componnent without changing it's state
    // therefore the page doesn't re-render

    const newUsername = useRef(null)
    const newPassword = useRef(null)


    const username = useRef(null)
    const password = useRef(null)

    // useState is defining isVisible as state .. this is saying use 'isVisible' as state .. 
    // this sets it's initial state to false .. therefore it's state is 'isVisible' which is false
    // setIsVisible is the function that will be allowed to change state
    // setIsVisble can only change this specific state
    // so it's the same as:
    // this.state {
        // isVisible = false
    // }

    const [isVisible, setIsVisible] = useState(false);
    function storeUser(){
        // this is for the signup .. when the user clicks .. in the return there's a button with an event handler onClick .. 
        // this will invoke our function here, storeUser
        // this function sends a post request to the backend endpoint 'signup' with the body displayed below .. 

        console.log(newUsername.current.value)
        console.log(newPassword.current.value)
        fetch('/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: newUsername.current.value,
                password: newPassword.current.value
            })
        })
        .then(res => console.log("sucessful adding the user"))
        .catch(err => console.log(err))
    }

    function showComponent(event) {
        // this runs when the user clicks the 'login' button
        // this will send a post to the 'login' endpoint with the body displayed below .. 

        console.log(username.current.value)
        console.log(password.current.value)
        fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
        .then(res => setIsVisible(res.json()))
        .catch(err => console.log(err))
        setIsVisible();
    }
    return (
        // return to render the below in our html .. which is the login and signup .. 

        <div id="App">

            <div id="signup">
                <input placeholder="Create a Username" ref={newUsername}/>
                <input placeholder="Create a Password" ref={newPassword}/>
                <button onClick={storeUser}>Signup</button>
            </div>
            <div>
                <input placeholder="Username" ref={username}/>
                <input placeholder="Password" ref={password}/>
                <button onClick={showComponent}>Login</button>
            </div>
            {
                isVisible ? <MainContainer/> : null

                // here we are checking the variable isVisible (set to false initially) to see if it's true
                // if this evaluates to true .. render <MainContainer/> else it's false
            }
        </div>

    )
}
*/

export default function App() {
  return(
    <Routes>
      <Route index element={ <Home />} />
      <Route path='/signup' element={ <Signup />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/deck' element={ <Deck />} />
    </Routes>
  )
}
