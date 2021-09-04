// == Import : npm
import React from 'react';
// == Import
import './contact.scss';
// == Composant
const ContactField = ({ value, type, name, placeholder, manageChange, id }) => {
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
        id={id}
      />
    </>
  );
};

// == Export
export default ContactField;
