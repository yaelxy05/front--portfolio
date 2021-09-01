import React from 'react';

// == Import
import './contact.scss';
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_h1">Me contacter</h1>
      <div className="form_box">
        <form action="" className="contact_form">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Votre message"
          ></textarea>
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
