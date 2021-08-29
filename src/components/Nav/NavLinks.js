import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './nav.scss';

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">
          <i className="fas fa-home"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills">Compétences</NavLink>
      </li>
      <li>
        <NavLink to="/creations">Mes créations</NavLink>
      </li>
      <li>A propos</li>
      <li>Contact</li>
      <li>Mon CV</li>
    </ul>
  );
};

// == Export
export default NavLinks;
