import React from 'react'

const Contact = () =>{
    return(
<div className="page">
    <div className="generic">
      <div className="panel">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="content">
          <h2>Si vous voulez un rendez-vous sans avoir à vous inscrire, veuillez remplir ce formulaire.</h2>
          <form>
            <div className="contact-form mar-top30">
              <label> <span>Nom et Prénom</span>
                <input type="text" className="input_text" name="name" id="name" />
              </label>
              <label> <span>Email</span>
                <input type="text" className="input_text" name="email" id="email" />
              </label>
              <label> <span>Numéro de Téléphone</span>
                <input type="text" className="input_text" name="tel" id="tel" />
              </label>
              <label> <span>Sujet</span>
                <input type="text" className="input_text" name="subject" id="subject" />
              </label>
              <label> <span>Message</span>
                <textarea className="message" name="feedback" id="feedback" defaultValue={""} />
                <input type="button" className="button" defaultValue="Envoyer" />
              </label>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </form>
          <div className="address">
            <div className="panel">
              <div className="title">
                <h1>Addresse</h1>
              </div>
              <div className="content">
                <p>Block No:5, Some where Road,<br />
                  City name, State, Country name</p>
                <p className="padTop"><span>Tel 1 :</span> 000 888 88888</p>
                <p className="padTop"><span>Tel 2 :</span> 000 888 88888</p>
                <p><span>Email :</span> <a href="mailto:info@companyname.com">info@companyname.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    )
}

export default Contact;