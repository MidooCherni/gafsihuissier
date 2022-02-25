import React from 'react'

const Home = () =>{
    return(
<div>
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
            <li>In ut leo eu mi rutrum pellentesque</li>
            <li>Maecenas consequat eleifend ligula</li>
            <li>Aenean nec ipsum turpis id vestibulum</li>
            <li>Proin at mauris at odio vulputate accu</li>
            <li className="-no-border-bottom">Mauris condimentum cursus tortor sit</li>
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