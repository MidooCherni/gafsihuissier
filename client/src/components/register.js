/* eslint-disable */

import React, { useState } from 'react'

async function tryRegister(creds){
  return fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(creds)
  }).then(data => data.json())
}

function Register(){
  const [name, setname] = useState()
  const [mail, setmail] = useState()
  const [cin , setcin] = useState()
  const [tel , settel] = useState()
  const [pass, setpass] = useState()
  const [pass2, setpass2] = useState()
  const [addr, setaddr] = useState()
  
  const [status, setstatus] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    const status = (await tryRegister({name, mail, cin, tel, pass, pass2, addr}))
    switch(status.status){
      case "EMPTY":
        alert("ERREUR: Tous les champs sont obligatoires.")
        break
      case "MAILERR":
        alert("ERREUR: Addresse mail invalide.")
        break
      case "PASSERR":
        alert("ERREUR: Les champs de mot de passe doivent êtres identiques.")
        break
      case "TELERR":
        alert("ERREUR: Numéro de téléphone invalide.")
        break
      case "CINERR":
        alert("ERREUR: CIN ou code invalide.")
        break
      case "ERRFIND":
        alert("Erreur de base de donnée. Veuillez contacter l'admin.")
        break
      case "EXISTS":
        alert("ERREUR: Utilisateur avec ce CIN existe déja.")
        break
      case "MRIGEL":
        alert("Compte crée avec success. Veuillez vous connecter.")
        break
      default:
        alert("wtf")
        return
    }
  }

    return(
<div className="page">
  <div className="generic">
    <div className="panel">
      <div className="title">
        <h1>Inscription</h1>
      </div>
      <div className="content">
        <h2>
          Pour pouvoir envoyer des fichiers et suivre votre demande, veuillez vous inscrire en utilisant vos informations personnelles.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-form mar-top30">
            <label> <span>Nom et Prénom du Représentant</span>
              <input type="text" className="input_text" name="name" id="name" onChange={e => setname(e.target.value)}/>
            </label>
            <label> <span>Email du Représentant</span>
              <input type="text" className="input_text" name="email" id="email" onChange={e => setmail(e.target.value)}/>
            </label>
            <label> <span>CIN ou ID</span>
              <input type="text" className="input_text" name="cin" id="cin" onChange={e => setcin(e.target.value)}/>
            </label>
            <label> <span>Numéro de Téléphone</span>
              <input type="text" className="input_text" name="tel" id="tel" onChange={e => settel(e.target.value)}/>
            </label>
            <label> <span>Mot de Passe</span>
              <input className="input_text" name="pass" id="pass" type="password" onChange={e => setpass(e.target.value)}/>
            </label>
            <label> <span>Répéter le Mot de Passe</span>
              <input className="input_text" name="pass2" id="pass2" type="password" onChange={e => setpass2(e.target.value)}/>
            </label>
            <label> <span>Addresse</span>
              <textarea className="message" name="address" id="address" defaultValue={""} onChange={e => setaddr(e.target.value)}/>
            </label>
            <div>
              <input type="submit" className="button" value="Inscription" />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default Register