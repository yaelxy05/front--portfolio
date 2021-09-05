// == Import react
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ContactField from './ContactField';
import ContactFieldTextarea from './ContactFieldTextarea';
// == Import
import './contact.scss';

const Contact = ({
  changeFieldRegister,
  username,
  mail,
  message,
  handleMessage,
  response,
  contactResponse,
  resetFields,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleMessage();
  };

  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  useEffect(() => {
    contactResponse();
  }, []);

  useEffect(() => {
    resetFields();
  }, []);

  return (
    <div className="contact">
      <h1 className="contact_h1">Me contacter</h1>
      <div className="form_box">
        <form onSubmit={handleSubmit} className="contact_form">
          <ContactField
            id="username"
            type="text"
            placeholder="Nom"
            name="username"
            manageChange={changeFieldRegister}
            value={username}
          />

          <ContactField
            id="mail"
            type="email"
            placeholder="Email"
            name="mail"
            manageChange={changeFieldRegister}
            value={mail}
          />
          <ContactFieldTextarea
            type="text"
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
        {response && response.data.status === 'mail_sent' && (
          <div className="message_form valid">
            <p>{response.data.message}</p>
          </div>
        )}
        {response && response.data.status === 'validation_failed' && (
          <div className="message_form fail">
            <p>{response.data.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Contact.propTypes = {
  /** value for the email */
  mail: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  response: PropTypes.object,
  changeFieldRegister: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleMessage: PropTypes.func.isRequired,
  contactResponse: PropTypes.func.isRequired,
};

Contact.defaultProps = {
  username: '',
  mail: '',
  message: '',
};
export default Contact;
