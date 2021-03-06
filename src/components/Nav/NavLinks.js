import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './nav.scss';

const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink exact to="/" activeClassName="current-home">
          <i className="fas fa-home"></i>
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink exact to="/skills" activeClassName="current">
          Compétences
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink exact to="/creations" activeClassName="current">
          Mes créations
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink exact to="/contact" activeClassName="current">
          Contact
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink exact to="/Cv" activeClassName="current">
          Mon CV
        </NavLink>
      </li>
    </ul>
  );
};

// == Export
export default NavLinks;
