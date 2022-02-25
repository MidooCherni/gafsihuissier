import React from 'react'
import { Link } from 'react-router-dom'

const SecondHalf = ({token}) =>{
  if(!token){
    return(<div>
      <li><Link to="/login">Connexion</Link></li>
      <li><Link to="/register">Inscription</Link></li>
    </div>)
  } else {
    return(<div>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/logoff">Déconnexion</Link></li>
    </div>)
  }
}

const Navbar = ({token}) => {
  return( 
    <div>
      <div className="menu-wrap">
      <div className="menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">à propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <SecondHalf/>
        </ul>
      </div>
        </div>
        <div>
      {/*------menu wrap ends-------*/}
      <div className="clearing" />
      <div className="header">
        <div className="logo">
          <h1>tuni<span>Huissier</span></h1>
        </div>
        <div className="social">
          <ul>
            <li>Horaires de Travail:   8h00 - 18h00 sauf Weekends</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar