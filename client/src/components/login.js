import React, { useState } from 'react'

async function loginUser(credentials){
  return fetch('http://localhost:5000/signin', {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

const Login = ({ setToken }) =>{
  const [mailcin, setmailcin] = useState()
  const [pass, setpass] = useState() 

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({mailcin, pass})
    if(token.status === "NOTFOUND"){
      alert("ERREUR: Ce compte n'existe pas.")
    } else {
      setToken(token)
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }

  return(
    <div className="page">
    <div className="generic">
      <div className="panel">
        <div className="title">
          <h1>Connexion</h1>
        </div>
        <div className="content">
          <h2>Veuillez introduire votre addresse e-mail ou votre CIN, ou ceux de votre représentant.</h2>
          <form onSubmit={handleSubmit}>
            <div className="contact-form mar-top30">
              <label> <span>Email ou Cin</span>
                <input type="text" className="input_text" name="email" id="email" onChange={e => setmailcin(e.target.value)}/>
              </label>
              <label> <span>Mot de Passe</span>
                <input type="password" className="input_text" name="pass" id="pass" onChange={e => setpass(e.target.value)}/>
              </label>
              <button type="submit" className="button">Connexion</button>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login;