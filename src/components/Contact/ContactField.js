// == Import : npm
import React from 'react';
// == Import
import './contact.scss';
// == Composant
const ContactField = ({ value, type, name, placeholder, manageChange }) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  return (
    <>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

// == Export
export default ContactField;
