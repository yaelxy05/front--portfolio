// == Import npm
import React from 'react';
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
            <i className="fas fa-home"></i>
          </li>
          <li>Compétences</li>
          <li>Mes créations</li>
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
