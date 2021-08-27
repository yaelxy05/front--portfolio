// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
// == Import Img
import logoNav from '../../assets/images/logov4.png';
// == Import
import './nav.scss';

// == Composant
const Nav = () => (
  <div className="nav">
    <div className="nav_banner--top">
      <div className="nav_logo--box">
        <img className="nav_logo" src={logoNav} alt="logo" />
      </div>

      <div className="nav_bar">
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
        </ul>
      </div>
    </div>
    <div className="nav_banner">
      <p>Bonjour, </p>
      <p>Je suis Yaël HUE</p>
      <p>Développeur web Fullstack</p>
    </div>
  </div>
);

// == Export
export default Nav;
