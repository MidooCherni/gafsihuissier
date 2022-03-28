/* eslint-disable */

import React, { useState, useEffect, createElement } from 'react'

const CaseChat = () => {
  const [cnt, setcnt] = useState(0)
  const [cntm, setcntm] = useState("")
  const [caseInfo, setCaseInfo] = useState(0)
  const [sched, setSched] = useState("Vous n'avec encore aucun rendez-vous.")
  const messages = []

  const handleClick = async e =>{
    e.preventDefault()
    const t = JSON.parse(localStorage.getItem('token')).userid
    const final = JSON.stringify({t, cnt})
    await fetch('http://localhost:5000/makecase',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: final
    })
    window.location.href = "/"
  }

  const handleSend = async e =>{
    e.preventDefault()
    const t = JSON.parse(localStorage.getItem('token')).userid
    const final = JSON.stringify({t, cntm})
    await fetch('http://localhost:5000/sendclientmsg',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: final
    })
    window.location.href = "/profile"
  }
  
  useEffect(()=>{
    if(caseInfo == 0){
      fetch('http://localhost:5000/getcase',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: localStorage.getItem('token')
      }).then((data => data.json())).then((json)=>{setCaseInfo(json)})
    }
  })

  if(!caseInfo.found || caseInfo.found == "NO"){
    return(
      <div className="content">
        <h2>Vous n'avez pas encore rempli d'information concernant votre demande.</h2><br/><h2>Veuillez utiliser le formulaire ci-dessous:</h2>
        <form onSubmit={handleClick}>
          <div className="contact-form mar-top30">
            <label> <span>Votre message:</span>
              <textarea className="message" name="cnt" id="cnt" defaultValue={""} onChange={e => setcnt(e.target.value)}/>
            </label>
            <div>
              <input type="submit" className="button" value="Envoyer" />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </form>
      </div>
    )
  } else {
    if(caseInfo.date_sched !== ""){
      setSched("Vous avez un rendez-vous pour le: ", caseInfo.date_sched)
    }
    for(let i = caseInfo.chatlogWht.length-1; i >= 0; i--){
      if(caseInfo.chatlogWho[i] == "0") {  
        messages.push("Client: " + caseInfo.chatlogWht[i])
      } else {
        messages.push("Huissier: " + caseInfo.chatlogWht[i])
      }
    }
    return(<div><h2>{sched}</h2><br/><br/><br/>
      <form onSubmit={handleSend}>
          <div>
        <input name="cntm" id="cntm" defaultValue={""} onChange={e => setcntm(e.target.value)}/>
        <input type="submit" className="button" value="Envoyer" />
          </div>
      </form><br/><br/>
      <div><h3>
        {messages.map((val, index)=><div key={index}>{val}<br/><br/></div>)}
      </h3></div>
    </div>
    )
  }
}

const Sidebar = () => {
  const [userInfo, setUserInfo] = useState(0)
  useEffect(()=>{
    if(!userInfo){    // WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      fetch('http://localhost:5000/getinfo',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: localStorage.getItem('token')
      }).then((data => data.json())).then((json)=>{setUserInfo(json)})
    }
  })
  return(
    <ul>
      <li>ID: <b>{userInfo.cinorid}</b></li>
      <li>Nom: <b>{userInfo.name}</b></li>
      <li>E-Mail: <b>{userInfo.email}</b></li>
      <li>Téléphone: <b>{userInfo.tel}</b></li>
      <li>Addresse: <b>{userInfo.addr}</b></li>
    </ul>
  )
}

const Profile = () =>{
  if(localStorage.length == 0){ window.location.href = "/"; return null }
    return(
<div className="page">
  <div className="primary-col">
    <div className="generic">
      <div className="panel">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <CaseChat/>
      </div>
    </div>
  </div>
  {/*--primary end-*/}
  <div className="side-bar">
    <div className="clearing" />
    <div className="panel">
      <div className="title"> <span><img src="images/icon1.jpg" alt="icon" /></span>
        <h1>Vos Informations</h1>
      </div>
      <div className="content">
        <Sidebar/>
      </div>
    </div>
    <div className="clearing" />
  </div>
  {/*-side-bar-end-*/}
</div>

    )
}

export default Profile;