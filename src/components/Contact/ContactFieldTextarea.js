// == Import : npm
import React from 'react';
// == Import
import './contact.scss';
// == Composant
const ContactFieldTextarea = ({
  value,
  name,
  placeholder,
  manageChange,
  id,
  cols,
  rows,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  return (
    <>
      <textarea
        // React - state
        className="contact_textarea"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
      />
    </>
  );
};

// == Export
export default ContactFieldTextarea;
