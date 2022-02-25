import React from 'react'

const Profile = () =>{
    return(
<div className="page">
  <div className="primary-col">
    <div className="generic">
      <div className="panel">
        <div className="title">
          <h1>Profile</h1>
        </div>
        <div className="content">
          <h2>Votre Profile. </h2>
          <p>nigga</p>
        </div>
      </div>
    </div>
  </div>
  {/*--primary end-*/}
  <div className="side-bar">
    <div className="clearing" />
    <div className="panel">
      <div className="title"> <span><img src="images/icon1.jpg" alt="icon" /></span>
        <h1>Sidebar</h1>
      </div>
      <div className="content">
        <ul>
          <li><a href="#">h</a></li>
          <li className="-no-border-bottom"><a href="#">noborder</a></li>
        </ul>
      </div>
    </div>
    <div className="clearing" />
  </div>
  {/*-side-bar-end-*/}
</div>

    )
}

export default Profile;