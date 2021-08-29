import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './nav.scss';

const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.closeMobileMenu()}>
        <NavLink to="/">
          <i className="fas fa-home"></i>
        </NavLink>
      </li>
      <li onClick={() => props.closeMobileMenu()}>
        <NavLink to="/skills">Compétences</NavLink>
      </li>
      <li onClick={() => props.closeMobileMenu()}>
        <NavLink to="/creations">Mes créations</NavLink>
      </li>
      <li onClick={() => props.closeMobileMenu()}>A propos</li>
      <li onClick={() => props.closeMobileMenu()}>Contact</li>
      <li onClick={() => props.closeMobileMenu()}>Mon CV</li>
    </ul>
  );
};

// == Export
export default NavLinks;
