// == Import react
import React from 'react';
import PropTypes from 'prop-types';
import ContactField from './ContactField';
import ContactFieldTextarea from './ContactFieldTextarea';
// == Import
import './contact.scss';

const Contact = ({
  changeFieldRegister,
  name,
  mail,
  message,
  handleMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleMessage();
  };

  return (
    <div className="contact">
      <h1 className="contact_h1">Me contacter</h1>
      <div className="form_box">
        <form onSubmit={handleSubmit} className="contact_form">
          <ContactField
            type="text"
            placeholder="Nom"
            name="name"
            manageChange={changeFieldRegister}
            value={name}
          />
          <ContactField
            type="text"
            placeholder="Email"
            name="mail"
            manageChange={(value, identifier) =>
              changeFieldRegister(value, identifier)
            }
            value={mail}
          />
          <ContactFieldTextarea
            cols="30"
            rows="10"
            name="message"
            id="message"
            placeholder="Votre message"
            value={message}
            manageChange={changeFieldRegister}
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  /** value for the email */
  mail: PropTypes.string.isRequired,

  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  /** value name */
  name: PropTypes.string.isRequired,

  changeFieldRegister: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleMessage: PropTypes.func.isRequired,
};

export default Contact;
