import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Deck from "./components/Deck.jsx"
import LoginMessage from "./components/LoginMessage.jsx"
import SignUpMessage from "./components/SignUpMessage.jsx"


export default function App() {
  return (
    <>
    <div id="app">
      <Routes>
        <Route index element = { <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/deck" element={ <Deck /> } />
        <Route path="/loginMessage" element={ <LoginMessage /> } />
        <Route path="/signUpMessage" element={ <SignUpMessage /> } />

      </Routes>
    </div>
    </>
  )
};
