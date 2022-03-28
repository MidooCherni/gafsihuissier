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
import Admin from "./components/admin"
import Logoff from "./components/logoff"

const App = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register/>} />
                <Route exact path='/profile' element={<Profile/>} />
                <Route exact path='/admin' element={<Admin/>} />
                <Route exact path='/logoff' element={<Logoff/>} />
            </Routes>
        </Router>
    )
}

export default App