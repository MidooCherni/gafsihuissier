import React from 'react'

const Home = () =>{
    return(
<div>
  <div className="menu-wrap">
    <div className="menu">
      <ul>
        <li><a href="public/index.html" className="active">home</a></li>
        <li><a href="public/about.html">about</a></li>
        <li><a href="public/contact.html">Contact</a></li>
        <li><a href="public/login.html">Connexion</a></li>
        <li><a href="public/register.html">Inscription</a></li>
      </ul>
    </div>
  </div>
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
  {/*------header wrap ends-------*/}
  <div className="banner">
    <h1>Maître GAFSI Saida </h1>
    <h2>Huissier de justice</h2>
  </div>
  {/*------banner end------*/}
  <div className="page">
    <div className="primary-col">
      <div className="generic">
        <div className="panel">
          <div className="title">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
          </div>
          <div className="content">
            <h2>Proin nunc ante, tempus ac porta blandit. </h2>
            <p> Ut mollis blandit mi, vel ultricies arcu iaculis in. Vestibulum pellentesque volutpat sem quis mattis. Morbi egestas suscipit sem ut lacinia. Morbi interdum, orci et lacinia lacinia, nibh sapien blandit leo, a ornare lectus nulla in urna mauris, quis hendrerit mi hendrerit quis. Lorem ipsu.</p>
            <div className="button mar-top20"><a href="#">More INfo</a></div>
          </div>
        </div>
      </div>
      <div className="block float-left mar-top30">
        <div className=" panel">
          <div className="title">
            <h1>Morbi sed felis digni</h1>
          </div>
          <div className="content"> <img src="images/img4.jpg" alt="img" />
            <h2>Nam iaculis fermentum </h2>
            <p>Trices lacinia sem interdum vitae. Suspendisse a urna id nulla hendrerit porttitor ultrices in odio. Vivamus varius, arcu id vestibulum sagittis, lorem</p>
            <h2>Nam iaculis fermentum </h2>
            <p>Trices lacinia sem interdum vitae. Suspendisse a urna id nulla hendrerit porttitor ultrices in odio. </p>
            <div className="button"><a href="#">more info</a></div>
          </div>
        </div>
      </div>
      <div className="block float-right mar-top30">
        <div className=" panel">
          <div className="title">
            <h1>Morbi sed felis digni</h1>
          </div>
          <div className="content"> <img src="images/img5.jpg" alt="img" />
            <h2>Nam iaculis fermentum </h2>
            <p>Trices lacinia sem interdum vitae. Suspendisse a urna id nulla hendrerit porttitor ultrices in odio. Vivamus varius, arcu id vestibulum sagittis, lorem</p>
            <h2>Nam iaculis fermentum </h2>
            <p>Trices lacinia sem interdum vitae. Suspendisse a urna id nulla hendrerit porttitor ultrices in odio. </p>
            <div className="button"><a href="#">more info</a></div>
          </div>
        </div>
      </div>
    </div>
    {/*--primary end-*/}
    <div className="side-bar">
      <div className="clearing" />
      <div className="panel">
        <div className="title"> <span><img src="images/icon1.jpg" alt="icon" /></span>
          <h1>Morbi sed dignissim</h1>
        </div>
        <div className="content">
          <ul>
            <li><a href="#">In ut leo eu mi rutrum pellentesque</a></li>
            <li><a href="#">Maecenas consequat eleifend ligula</a></li>
            <li><a href="#">Aenean nec ipsum turpis id vestibulum</a></li>
            <li><a href="#">Proin at mauris at odio vulputate accu</a></li>
            <li className="-no-border-bottom"><a href="#">Mauris condimentum cursus tortor sit</a></li>
          </ul>
        </div>
      </div>
      <div className="clearing" />
    </div>
    {/*-side-bar-end-*/}
  </div>
</div>
    )
}

export default Home;