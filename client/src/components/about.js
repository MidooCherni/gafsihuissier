import React from 'react'

const About = () =>{
    return(
<div className="page">
  <div className="primary-col">
    <div className="generic">
      <div className="panel">
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="content">
          <h2>Proin nunc ante, tempus ac porta blandit. </h2>
          <p> Ut mollis blandit mi, vel ultricies arcu iaculis in. Vestibulum pellentesque volutpat sem quis mattis. Morbi egestas suscipit sem ut lacinia. Morbi interdum, orci et lacinia lacinia, nibh sapien blandit leo, a ornare lectus nulla in urna mauris, quis hendrerit mi hendrerit quis. Lorem ipsu.</p>
          <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
          <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
          <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.</p>
          <p>Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
          <p>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</p>
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

    )
}

export default About;