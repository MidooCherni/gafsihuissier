/* eslint-disable */

import React, { useState, Component, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MessagePanel = ({ uid }) => {
  const [cntm, setcntm] = useState("")
  const [caseInfo, setCaseInfo] = useState(0)
  const messages = []

  const handleSend = async e =>{
    e.preventDefault()
    const t = uid
    const final = JSON.stringify({t, cntm})
    await fetch('http://localhost:5000/sendadminmsg',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: final
    })
    window.location.href = "/admin?uid=" + uid
  }

  if(!localStorage.getItem("currentuid") && !uid){
    return(<div><h2>Veuillez choisir un message du menu à droite.</h2></div>)
  } else {
    if(!localStorage.getItem("currentuid") && uid){ localStorage.setItem("currentuid", uid); window.location.href = "/admin?uid=" + uid; }
    if(localStorage.getItem("currentuid") != uid){ localStorage.setItem("currentuid", uid); window.location.href = "/admin?uid=" + uid; }

    useEffect(()=>{
      if(caseInfo == 0){
        const tokenne = {userid:localStorage.getItem('currentuid')}
        fetch('http://localhost:5000/getcase',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(tokenne)
        }).then((data => data.json())).then((json)=>{setCaseInfo(json)})
      }
    })

    if((caseInfo != 1) && (caseInfo.found == "YES")){
      for(let i = caseInfo.chatlogWht.length-1; i >= 0; i--){
        if(caseInfo.chatlogWho[i] == "0") {  
          messages.push("Client: " + caseInfo.chatlogWht[i])
        } else {
          messages.push("Huissier: " + caseInfo.chatlogWht[i])
        }
      }
      return(<div><h2>Chat Avec Client N° {caseInfo.id_of_user}</h2><br/><br/><br/>
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
    } else {
      return(<div>Valeur invalide. Veuillez ré-essayer.</div>)
    }
  }
}

const Sidebar = () => {
  const [headerList, setHeaderList] = useState()  
  if(!headerList){
    fetch('http://localhost:5000/getdmheaders',).then((data => data.json())).then((json)=>{setHeaderList(json)})
    return(
      <div>
        Il n'y a aucun message.
      </div>
    )
  } else {
    return(
      <div><ul>
        {headerList.restable.map((val, index)=><li key={index}><Link to={`?uid=${val}`}>{val}</Link></li>)}
      </ul></div>
    )
  }
}

const Profile = () =>{
  let query = new URLSearchParams(useLocation().search)

  if(localStorage.length == 0){ window.location.href = "/"; return null }
    return(
<div className="page">
  <div className="primary-col">
    <div className="generic">
      <div className="panel">
        <div className="title">
          <h1>Chat</h1>
        </div>
        <MessagePanel uid={query.get("uid")}/>
      </div>
    </div>
  </div>
  {/*--primary end-*/}
  <div className="side-bar">
    <div className="clearing" />
    <div className="panel">
      <div className="title"> <span><img src="images/icon1.jpg" alt="icon" /></span>
        <h1>Messages</h1>
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