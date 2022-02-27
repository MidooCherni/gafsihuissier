/* eslint-disable */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css'
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"
import Login from "./components/login"
import Register from "./components/register"
import Profile from "./components/profile"
import Logoff from "./components/logoff"

const App = () => {
    const [token, setToken] = useState()
    if(sessionStorage.length > 0){
        setToken(sessionStorage.getItem('token'))
    }

    return(
        <Router>
            <Navbar token={token}/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/login' element={<Login setToken={setToken}/>} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/profile' element={<Profile/>} />
                <Route exact path='/logoff' element={<Logoff/>} />
            </Routes>
        </Router>
    )
}

export default App